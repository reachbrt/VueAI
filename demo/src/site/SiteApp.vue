<template>
  <div v-if="library">
    <div class="library-bar">
      <strong>Component library</strong>
      <button type="button" @click="library = false">Back to studio</button>
    </div>
    <LibraryApp />
  </div>

  <div v-else class="studio">
    <header class="nav">
      <a class="mark" href="#top">VueAI</a>
      <nav class="nav-links">
        <a href="#agent">Agent</a>
        <a href="#controls">Controls</a>
        <a href="#packages">Packages</a>
        <button type="button" @click="library = true">Library</button>
        <a class="nav-cta" href="https://github.com/reachbrt/VueAI">GitHub</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero">
        <div>
          <p class="eyebrow">Agent runtime for Vue</p>
          <h1>The interface<br><em>for agents.</em></h1>
          <p class="lede">Streaming, tools, approvals, and your own components inside the thread. The agent shares state with the page it is standing on.</p>
          <div class="hero-actions">
            <a class="btn" href="#agent">Open the studio</a>
            <span class="install">npm i @aivue/agent</span>
          </div>
        </div>
        <div class="hero-stage">
          <HeroCanvas />
          <div class="hero-float">
            <strong>filter_invoices</strong>
            <span>Shared state · filter = overdue · waiting for the next tool</span>
          </div>
        </div>
      </section>

      <section id="agent" class="section">
        <AgentStage />
      </section>

      <section id="controls" class="section">
        <div class="section-intro">
          <h2>Controls, <em>not a skin.</em></h2>
          <p>Each piece is a component you can place on its own. The studio below is the same code the package exports.</p>
        </div>
        <ControlGallery @library="library = true" />
      </section>

      <section id="packages" class="section">
        <div class="section-intro">
          <h2>The suite.</h2>
          <p>Install one package, or start from the agent and call the rest as tools.</p>
        </div>
        <div class="package-grid">
          <a
            v-for="item in packages"
            :key="item.name"
            :href="`https://www.npmjs.com/package/${item.name}`"
          >
            <strong>{{ item.name }}</strong>
            <span>{{ item.text }}</span>
          </a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span>VueAI · MIT</span>
      <span>
        <a href="https://github.com/reachbrt/VueAI">GitHub</a>
        ·
        <a href="https://www.npmjs.com/package/@aivue/agent">npm</a>
      </span>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from 'vue';
import AgentStage from './AgentStage.vue';
import ControlGallery from './ControlGallery.vue';
import HeroCanvas from './HeroCanvas.vue';
import { packages } from './packages';
import './site.css';

const LibraryApp = defineAsyncComponent(() => import('../App.vue'));
const library = ref(false);

watch(library, (isLibrary) => {
  document.body.style.background = isLibrary ? '' : '#0c0d0b';
  document.body.style.color = isLibrary ? '' : '#f3f1ea';
}, { immediate: true });
</script>
