<script>
  import { onMount } from "svelte";
  import { currentSection, isScrolled } from "./stores/navigationStore.js";
  import { handleScroll } from "./utils/scrollUtils.js";

  // Import all section components
  import Hero from "./components/sections/Hero.svelte";
  import Design from "./components/sections/Design.svelte";
  import Features from "./components/sections/Features.svelte";
  import Modules from "./components/sections/Modules.svelte";
  import Showcase from "./components/sections/Showcase.svelte";
  import Specs from "./components/sections/Specs.svelte";
  import FAQ from "./components/sections/FAQ.svelte";
  import Newsletter from "./components/sections/Newsletter.svelte";
  import Order from "./components/sections/Order.svelte";

  // Import UI components
  import Navigation from "./components/ui/Navigation.svelte";
  import MobileMenu from "./components/ui/MobileMenu.svelte";
  import FloatingLinks from "./components/ui/FloatingLinks.svelte";

  // Mobile menu state
  let menuOpen = false;

  // Initialize scroll event listener
  onMount(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<svelte:head>
  <!-- Ensure styles are properly loaded -->
  <link rel="stylesheet" href="global.css" />
</svelte:head>

<svelte:window on:scroll={handleScroll} />

<main>
  <!-- Navigation -->
  <Navigation bind:menuOpen />

  <!-- Mobile Menu Overlay -->
  {#if menuOpen}
    <MobileMenu bind:menuOpen />
  {/if}

  <!-- Page Sections -->
  <Hero />
  <Design />
  <Features />
  <Modules />
  <Showcase />
  <Specs />
  <FAQ />
  <Order />

  <!-- Floating Navigation Buttons -->
  <FloatingLinks />
</main>

<style>
  /* Ensure global styles are applied */
  :global(:root) {
    /* Colors */
    --color-primary: #9983ff;
    --color-secondary: #ffab07;
    --color-text: #111;
    --color-text-light: #555;
    --color-text-lighter: #777;
    --color-background: white;
    --color-background-alt: #f5f5f5;
    --color-border: #eee;

    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-medium: 0.3s ease;
    --transition-slow: 0.4s cubic-bezier(0.16, 1, 0.3, 1);

    /* Shadows */
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.1);

    /* Border radius */
    --radius-sm: 0.5rem;
    --radius-md: 1rem;
    --radius-full: 9999px;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-text);
    background-color: var(--color-background);
  }

  :global(.container) {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  :global(.bold) {
    font-weight: 700;
  }

  :global(.overline) {
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 0.5rem;
  }

  :global(.overline-highlight) {
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: inline-block;
    margin-bottom: 0.5rem;
    position: relative;
  }

  :global(.overline-highlight::after) {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: var(--color-secondary);
    z-index: -1;
  }

  :global(.highlight) {
    position: relative;
    display: inline-block;
  }

  :global(.highlight::after) {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: var(--color-secondary);
    z-index: -1;
  }

  :global(.section-header) {
    text-align: center;
    margin-bottom: 4rem;
  }

  :global(.section-header h2) {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 0.5rem;
    position: relative;
    display: inline-block;
  }

  :global(.section-header h2::after) {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-secondary)
    );
  }

  :global(.section-description) {
    font-size: 1.125rem;
    color: var(--color-text-light);
    max-width: 36rem;
    margin: 1.5rem auto 0;
    line-height: 1.6;
  }

  :global(.text-link) {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 500;
    position: relative;
  }

  :global(.text-link::after) {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-primary);
    transition: width var(--transition-medium);
  }

  :global(.text-link:hover::after) {
    width: 100%;
  }

  main {
    background-color: var(--color-background);
    color: var(--color-text);
    width: 100%;
    overflow-x: hidden;
  }
</style>
