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
      <a class="mark" href="#top"><Icon name="orbit" /> VueAI</a>
      <nav class="nav-links">
        <a href="#agent">Agent</a>
        <a href="#controls">Controls</a>
        <a href="#packages">Packages</a>
        <button type="button" @click="library = true">Library</button>
        <a class="nav-cta" href="https://github.com/reachbrt/VueAI"><Icon name="github" /> GitHub</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Agent runtime for Vue</p>
          <h1>
            <span>A component suite</span>
            <span>the agent can call,</span>
            <span class="hero-accent">on the page it is in.</span>
          </h1>
          <p class="lede">Streaming, tools, approvals, and your own Vue components inside the thread. Every package below is a control the agent can use, and a component you can place on its own.</p>
          <div class="hero-actions">
            <a class="btn" href="#agent">Open the studio</a>
            <a class="btn btn-ghost" href="#packages">All {{ packages.length }} packages</a>
          </div>
        </div>
        <div class="hero-stage">
          <div class="hero-grid" aria-hidden="true" />
          <HeroCanvas />
          <div class="orbit" aria-hidden="true">
            <article class="slab slab-back">
              <p><Icon name="database" /> Shared state</p>
              <strong>filter = overdue</strong>
              <span>The table and the thread read the same object.</span>
            </article>
            <article class="slab slab-mid">
              <p><Icon name="tool" /> Tool</p>
              <strong>filter_invoices</strong>
              <span>{"status":"overdue"} · 2 rows</span>
            </article>
            <article class="slab slab-front">
              <p><Icon name="approval" /> Approval</p>
              <strong>Refund invoice 1042</strong>
              <span>Waiting. The agent does not send it alone.</span>
            </article>
          </div>
        </div>
      </section>

      <section class="section steps" aria-label="How a run moves">
        <article v-for="step in steps" :key="step.index" class="step">
          <div class="badge"><Icon :name="step.icon" /></div>
          <p>{{ step.index }}</p>
          <h2>{{ step.title }}</h2>
          <span>{{ step.text }}</span>
        </article>
      </section>

      <section class="section scenes" aria-label="Product scenes">
        <div class="section-intro">
          <h2>Scenes from the suite.</h2>
          <p>The same components, drawn as the surfaces a person actually uses.</p>
        </div>
        <div class="scene-grid">
          <figure v-for="scene in scenes" :key="scene.title">
            <img :src="sceneImages[scene.src]" :alt="scene.title" />
            <figcaption>
              <strong>{{ scene.title }}</strong>
              <span>{{ scene.text }}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="agent" class="section">
        <AgentStage />
      </section>

      <section id="controls" class="section">
        <div class="section-intro">
          <h2>Controls, <em>each on its own.</em></h2>
          <p>These are the pieces inside the agent panel. Place one in a page, or let the runtime compose them. The cards below are the exported components, not a mock.</p>
        </div>
        <div class="control-index">
          <article v-for="control in controls" :key="control.name">
            <div class="badge"><Icon :name="control.icon" /></div>
            <p>{{ control.package }}</p>
            <h3>{{ control.name }}</h3>
            <span>{{ control.text }}</span>
          </article>
        </div>
        <ControlGallery @library="library = true" />
      </section>

      <section id="packages" class="section">
        <div class="section-intro">
          <h2>Every package.</h2>
          <p>{{ packages.length }} packages, from the runtime to the field the user is typing in. Open a card for the npm page and its README.</p>
        </div>
        <div class="package-grid">
          <a
            v-for="item in packages"
            :key="item.name"
            :href="`https://www.npmjs.com/package/${item.name}`"
          >
            <div class="card-top">
              <div class="badge"><Icon :name="packageIcons[item.name] || 'orbit'" /></div>
              <p>{{ item.group }}</p>
            </div>
            <strong>{{ item.name }}</strong>
            <span>{{ item.text }}</span>
            <em>{{ item.controls }}</em>
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
import Icon from './Icon.vue';
import { controls, packageIcons, packages, scenes, steps } from './packages';
import heroArt from '../assets/images/scene-suite.svg';
import chatbotArt from '../assets/images/scene-chat.svg';
import smartformArt from '../assets/images/scene-form.svg';
import autosuggestArt from '../assets/images/scene-input.svg';
import captionArt from '../assets/images/scene-vision.svg';
import analyticsArt from '../assets/images/scene-signal.svg';
import './site.css';

const sceneImages: Record<string, string> = {
  hero: heroArt,
  chatbot: chatbotArt,
  smartform: smartformArt,
  autosuggest: autosuggestArt,
  caption: captionArt,
  analytics: analyticsArt
};

const LibraryApp = defineAsyncComponent(() => import('../App.vue'));
const library = ref(false);

watch(library, (isLibrary) => {
  document.body.style.background = isLibrary ? '' : '#071422';
  document.body.style.color = isLibrary ? '' : '#f3f1ea';
}, { immediate: true });
</script>
