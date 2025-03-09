<script>
  import { sections, currentSection, scrollToSection } from '../../stores/navigationStore.js';
  
  // Bind menuOpen from parent
  export let menuOpen;
</script>

<div class="mobile-menu">
  <div class="mobile-menu-content">
    {#each sections as section}
      <button 
        class="mobile-nav-item"
        class:active={$currentSection === section.id}
        on:click={() => {
          scrollToSection(section.id);
          menuOpen = false;
        }}
      >
        {section.label}
      </button>
    {/each}
    
    <button class="mobile-preorder">Pre-order Now</button>
  </div>
</div>

<style>
  /* Mobile Menu */
  .mobile-menu {
    position: fixed;
    inset: 0;
    background-color: white;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .mobile-menu-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  
  .mobile-nav-item {
    font-size: 1.5rem;
    font-weight: 300;
    color: #555;
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .mobile-nav-item.active {
    font-weight: 700;
    color: black;
  }
  
  .mobile-preorder {
    margin-top: 1rem;
    background-color: black;
    color: white;
    border: none;
    border-radius: 9999px;
    padding: 0.75rem 2rem;
    font-size: 1.125rem;
    font-weight: 500;
    cursor: pointer;
  }
</style>