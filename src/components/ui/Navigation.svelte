<script>
  import {
    sections,
    currentSection,
    isScrolled,
    scrollToSection,
  } from "../../stores/navigationStore.js";

  // Bind menuOpen from parent
  export let menuOpen;
</script>

<nav class:scrolled={$isScrolled}>
  <div class="container nav-container" class:scrolled={$isScrolled}>
    <div class="nav-content" class:scrolled={$isScrolled}>
      <div class="logo">
        <span>PsychoDuck<span class="bold">Tech</span></span>
      </div>

      <!-- Desktop Navigation -->
      <div class="desktop-nav">
        <div class="nav-pills">
          {#each sections as section}
            <button
              class="nav-pill"
              class:active={$currentSection === section.id}
              on:click={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          {/each}
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button class="menu-button" on:click={() => (menuOpen = !menuOpen)}>
        <div class="hamburger">
          <span class="line" class:open={menuOpen}></span>
          <span class="line" class:open={menuOpen}></span>
          <span class="line" class:open={menuOpen}></span>
        </div>
      </button>

      <!-- Pre-order Button -->
      <button class="preorder-button">Pre-order</button>
    </div>
  </div>
</nav>

<style>
  /* Navigation */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nav-container {
    transition: max-width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    padding: 1rem 1.5rem;
  }

  .nav-container.scrolled {
    max-width: 900px;
  }

  .nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nav-content.scrolled {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: var(--radius-full);
    padding: 0.5rem 1.5rem;
    box-shadow: var(--shadow-md);
    backdrop-filter: blur(10px);
  }

  .logo {
    font-size: 1.25rem;
    font-weight: 300;
    background: linear-gradient(to right, #000, #555);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
  }

  .logo::before {
    content: "";
    position: absolute;
    inset: -4px;
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-secondary)
    );
    border-radius: 50%;
    filter: blur(20px);
    opacity: 0.3;
    z-index: -1;
    transition: all var(--transition-medium);
  }

  .desktop-nav {
    display: none;
  }

  @media (min-width: 768px) {
    .desktop-nav {
      display: block;
    }
  }

  .nav-pills {
    display: flex;
    background-color: rgba(240, 240, 240, 0.5);
    border-radius: 9999px;
    padding: 0.25rem;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .nav-pill {
    padding: 0.5rem 1.25rem;
    border-radius: var(--radius-full);
    border: none;
    background: none;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-light);
    cursor: pointer;
    transition: all var(--transition-medium);
    position: relative;
    z-index: 1;
  }

  .nav-pill.active {
    color: white;
  }

  .nav-pill::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--color-text);
    border-radius: var(--radius-full);
    z-index: -1;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .nav-pill.active::before {
    opacity: 1;
    transform: scale(1);
    box-shadow: var(--shadow-sm);
  }

  .menu-button {
    display: block;
    background: none;
    border: none;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1001;
  }

  @media (min-width: 768px) {
    .menu-button {
      display: none;
    }
  }

  .hamburger {
    width: 24px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .line {
    height: 2px;
    background-color: black;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  .line:nth-child(1) {
    width: 18px;
  }

  .line:nth-child(2) {
    width: 14px;
  }

  .line:nth-child(3) {
    width: 24px;
  }

  .line.open:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    width: 24px;
  }

  .line.open:nth-child(2) {
    opacity: 0;
  }

  .line.open:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .preorder-button {
    display: none;
    background-color: black;
    color: white;
    border: none;
    border-radius: 9999px;
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .preorder-button:hover {
    background-color: #333;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    .preorder-button {
      display: block;
    }
  }
</style>
