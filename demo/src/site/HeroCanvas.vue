<template>
  <div ref="host" class="hero-canvas" aria-hidden="true" />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import {
  BufferGeometry,
  Float32BufferAttribute,
  Group,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  TorusGeometry,
  WebGLRenderer
} from 'three';

const host = ref<HTMLDivElement | null>(null);
let stop = () => {};

onMounted(() => {
  const el = host.value;
  if (!el) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scene = new Scene();
  const camera = new PerspectiveCamera(32, 1, 0.1, 40);
  camera.position.set(0, 0.1, 7.2);

  const renderer = new WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  el.appendChild(renderer.domElement);

  const group = new Group();
  const outerGeo = new IcosahedronGeometry(1.72, 1);
  const outerMat = new MeshBasicMaterial({ color: 0xd6f25c, wireframe: true, transparent: true, opacity: 0.38 });
  const outer = new Mesh(outerGeo, outerMat);
  const innerGeo = new IcosahedronGeometry(1.02, 0);
  const innerMat = new MeshBasicMaterial({ color: 0xf4f1e8, wireframe: true, transparent: true, opacity: 0.22 });
  const inner = new Mesh(innerGeo, innerMat);
  const ringGeo = new TorusGeometry(2.35, 0.008, 12, 96);
  const ringMat = new MeshBasicMaterial({ color: 0xd6f25c, transparent: true, opacity: 0.55 });
  const ring = new Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 2.35;

  const count = 140;
  const positions: number[] = [];
  for (let index = 0; index < count; index += 1) {
    const phi = Math.acos(1 - (2 * (index + 0.5)) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * index;
    const radius = 2.65;
    positions.push(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );
  }
  const pointsGeo = new BufferGeometry();
  pointsGeo.setAttribute('position', new Float32BufferAttribute(positions, 3));
  const pointsMat = new PointsMaterial({ color: 0xf4f1e8, size: 0.028, transparent: true, opacity: 0.75 });
  const points = new Points(pointsGeo, pointsMat);

  group.add(outer, inner, ring, points);
  scene.add(group);

  let pointerX = 0;
  let pointerY = 0;
  let spin = 0;
  let frame = 0;

  const resize = () => {
    const width = el.clientWidth || 1;
    const height = el.clientHeight || 1;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };
  resize();
  const observer = new ResizeObserver(resize);
  observer.observe(el);

  const onMove = (event: PointerEvent) => {
    const rect = el.getBoundingClientRect();
    pointerX = ((event.clientX - rect.left) / rect.width - 0.5);
    pointerY = ((event.clientY - rect.top) / rect.height - 0.5);
  };
  window.addEventListener('pointermove', onMove);

  const tick = () => {
    if (!reduce) spin += 0.0022;
    group.rotation.y = spin + pointerX * 0.35;
    group.rotation.x = pointerY * 0.25;
    inner.rotation.y = -spin * 1.4;
    ring.rotation.z += reduce ? 0 : 0.002;
    renderer.render(scene, camera);
    frame = requestAnimationFrame(tick);
  };
  tick();

  stop = () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    window.removeEventListener('pointermove', onMove);
    outerGeo.dispose();
    innerGeo.dispose();
    ringGeo.dispose();
    pointsGeo.dispose();
    outerMat.dispose();
    innerMat.dispose();
    ringMat.dispose();
    pointsMat.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
});

onBeforeUnmount(() => stop());
</script>
