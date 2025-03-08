<script>
  import { onMount } from 'svelte';
  
  // Navigation state
  let isScrolled = false;
  let currentSection = 'hero';
  let menuOpen = false;
  
  // Sections for navigation
  const sections = [
    { id: 'hero', label: 'Prototype 0' },
    { id: 'design', label: 'Design' },
    { id: 'features', label: 'Features' },
    { id: 'specs', label: 'Specs' },
    { id: 'order', label: 'Order' }
  ];
  
  // Product specs
  const specifications = [
    { name: 'Switches', value: 'Custom PsychoDuck Tactile' },
    { name: 'Material', value: 'CNC Aluminum Unibody' },
    { name: 'Keycaps', value: 'Double-shot PBT' },
    { name: 'Connectivity', value: 'USB-C, Bluetooth 5.2' },
    { name: 'Battery Life', value: '120 hours' },
    { name: 'Dimensions', value: '355 × 127 × 19 mm' },
    { name: 'Weight', value: '890g' }
  ];
  
  // Features with minimal descriptions
  const features = [
    {
      title: 'Adaptive Response',
      description: 'Pressure-sensitive keys adapt to your typing style in real-time.'
    },
    {
      title: 'Silent Precision',
      description: 'Near-silent operation with 1.2mm travel distance for rapid actuation.'
    },
    {
      title: 'Neural Connect',
      description: 'AI-powered keystroke prediction reduces latency by 40%.'
    }
  ];
  
  // Tilt effect variables
  let tiltX = 0;
  let tiltY = 0;
  let isHovering = false;

  function handleMouseMove(event) {
    if (!isHovering) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the element
    const y = event.clientY - rect.top;  // y position within the element
    
    // Calculate tilt based on mouse position relative to center of element
    tiltX = ((y / rect.height) - 0.5) * -20; // Invert Y axis for natural tilt
    tiltY = ((x / rect.width) - 0.5) * 10;
  }

  function handleMouseEnter() {
    isHovering = true;
  }

  function handleMouseLeave() {
    isHovering = false;
    // Reset tilt gradually
    setTimeout(() => {
      tiltX = 0;
      tiltY = 0;
    }, 300);
  }
  
  // Handle scroll events to update navigation
  function handleScroll() {
    isScrolled = window.scrollY > 50;
  
  // Update current section based on scroll position
  const scrollPosition = window.scrollY + 100;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  
  // Special case for bottom of page (Order section)
  if (scrollPosition + windowHeight >= documentHeight - 100) {
    currentSection = 'order';
    return;
  }
  
  // Normal section detection
  for (const section of sections) {
    const element = document.getElementById(section.id);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        currentSection = section.id;
        break;
      }
    }
  }
}
  
  // Smooth scroll to section
  function scrollToSection(id) {
    menuOpen = false;
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  
  // Initialize
  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<svelte:window on:scroll={handleScroll} />

<main>
  <!-- Navigation -->
  <nav class:scrolled={isScrolled}>
    <div class="container">
      <div class="nav-content">
        <div class="logo">
          <span>PsychoDuck<span class="bold">Tech</span></span>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="desktop-nav">
          <div class="nav-pills">
            {#each sections as section}
              <button 
                class="nav-pill"
                class:active={currentSection === section.id}
                on:click={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            {/each}
          </div>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="menu-button" on:click={() => menuOpen = !menuOpen} aria-label="Toggle menu">
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
  
  <!-- Mobile Menu Overlay -->
  {#if menuOpen}
    <div class="mobile-menu">
      <div class="mobile-menu-content">
        {#each sections as section}
          <button 
            class="mobile-nav-item"
            class:active={currentSection === section.id}
            on:click={() => scrollToSection(section.id)}
          >
            {section.label}
          </button>
        {/each}
        
        <button class="mobile-preorder">Pre-order Now</button>
      </div>
    </div>
  {/if}

  <!-- Hero Section -->
  <section id="hero" class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1>
            <span class="prototype">Prototype</span>
            <span class="zero">0</span>
          </h1>
          
          <p class="hero-description">
            The keyboard that <span class="bold">anticipates</span> your next move.
          </p>
          
          <div class="hero-buttons">
            <button class="primary-button">Learn more</button>
            <button class="secondary-button">
              <span>Watch</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="hero-image">
          <div 
            class="tilt-container"
            role="img"
            aria-label="Prototype 0 Keyboard"
            on:mousemove={handleMouseMove}
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
            style="transform: perspective(1000px) rotateX({tiltX}deg) rotateY({tiltY}deg);"
          >
            <img 
              src="/placeholder.svg?height=600&width=800"
              alt="Prototype 0 Keyboard" 
            />
          </div>
          
          <!-- Floating badge -->
          <div class="new-badge">
            <span>New</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Design Section -->
  <section id="design" class="design">
    <div class="container">
      <div class="design-content">
        <div class="design-images">
          <!-- Main image -->
          <img 
            src="/placeholder.svg?height=500&width=700" 
            alt="Prototype 0 Design Details" 
            class="main-image"
          />
          
          <!-- Detail images -->
          <img 
            src="/placeholder.svg?height=150&width=150" 
            alt="Detail 1" 
            class="detail-image detail-1"
          />
          <img 
            src="/placeholder.svg?height=150&width=150" 
            alt="Detail 2" 
            class="detail-image detail-2"
          />
        </div>
        
        <div class="design-text">
          <span class="overline">Precision Engineering</span>
          <h2>
            Crafted from a <span class="highlight">single</span> piece of aluminum
          </h2>
          <p>
            Each Prototype 0 keyboard is precision-milled from a solid block of aerospace-grade aluminum, 
            creating a seamless unibody design that's both incredibly durable and impossibly thin.
          </p>
          <p>
            The result is a typing experience with zero flex and perfect key stability, housed in a 
            frame that's just <span class="bold">19mm</span> at its thickest point.
          </p>
          
          <!-- Stat highlights -->
          <div class="stats">
            <div class="stat">
              <div class="stat-value">19mm</div>
              <div class="stat-label">Thickness</div>
            </div>
            <div class="stat">
              <div class="stat-value">890g</div>
              <div class="stat-label">Weight</div>
            </div>
            <div class="stat">
              <div class="stat-value">100%</div>
              <div class="stat-label">Recyclable</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="features">
    <div class="container">
      <div class="section-header">
        <span class="overline">Revolutionary</span>
        <h2>Intelligent Performance</h2>
      </div>
      
      <div class="features-grid">
        {#each features as feature}
          <div class="feature">
            <div class="feature-icon">
              <img
                src="/placeholder.svg?height=64&width=64"
                alt={feature.title}
              />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            
            <a href="#" class="learn-more" aria-label="Learn more about {feature.title}">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Full-width Product Image -->
  <section class="showcase">
    <div class="container">
      <h2>Designed for the future</h2>
      <div class="showcase-image-container">
        <img 
          src="/placeholder.svg?height=800&width=2000" 
          alt="Prototype 0 Keyboard" 
          class="showcase-image"
        />
        
        <div class="showcase-text">
          <h3>The future of typing</h3>
          <p>Experience the next evolution in human-computer interaction.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Specifications Section -->
  <section id="specs" class="specs">
    <div class="container">
      <div class="specs-content">
        <div class="specs-intro">
          <span class="overline">The Details</span>
          <h2>Technical Specifications</h2>
          <p>
            Every component of Prototype 0 has been engineered to deliver uncompromising performance and reliability.
          </p>
          
          <button class="download-button">
            <span>Download Full Specs</span>
          </button>
        </div>
        
        <div class="specs-grid">
          {#each specifications as spec}
            <div class="spec-item">
              <h3>{spec.name}</h3>
              <p>{spec.value}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Order Section -->
  <section id="order" class="order">
    <div class="container">
      <div class="order-content">
        <div class="order-header">
          <span class="overline-highlight">Limited Release</span>
          <h2>Be among the first</h2>
          <p>
            Prototype 0 is available in a limited initial production run. Reserve yours today to ensure delivery in the first wave.
          </p>
        </div>
        
        <div class="order-card">
          <div class="product-info">
            <div class="product-details">
              <h3>Prototype 0</h3>
              <p>Includes charging cable and keycap puller</p>
            </div>
            <div class="product-price">$299</div>
          </div>
          
          <button class="order-button">
            Pre-order Now
          </button>
          <p class="shipping-info">Expected shipping: November 2023</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Floating Navigation Buttons -->
  <div class="floating-links">
    <a href="#" class="floating-link">Support</a>
    <a href="#" class="floating-link">Privacy</a>
    <a href="#" class="floating-link">Terms</a>
    <a href="#" class="floating-link">Contact</a>
  </div>
</main>

<style>
  /* Base styles */
  :global(:root) {
  /* Colors */
  --color-primary: #9983FF;
  --color-secondary: #FFAB07;
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

  --color-primary-rgb: 153, 131, 255;
  --color-secondary-rgb: 255, 171, 7;
}
  
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-text);
    background-color: var(--color-background);
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  .bold {
    font-weight: 700;
  }
  
  .overline {
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .overline-highlight {
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: inline-block;
    margin-bottom: 0.5rem;
    position: relative;
  }
  
  .overline-highlight::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: var(--color-secondary);
    z-index: -1;
  }
  
  .highlight {
    position: relative;
    display: inline-block;
  }
  
  .highlight::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: var(--color-secondary);
    z-index: -1;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .section-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 0.5rem;
    position: relative;
    display: inline-block;
  }
  
  .section-header h2::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  }
  
  /* Navigation */
  nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  transition: all var(--transition-slow);
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all var(--transition-slow);
}

nav.scrolled .container {
  max-width: 900px;
  transition: max-width var(--transition-slow);
}

nav.scrolled .nav-content {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: var(--radius-full);
  padding: 0.5rem 1.5rem;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-slow);
  background-color: transparent;
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-sm);
}
  
  .nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  content: '';
  position: absolute;
  inset: -4px;
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
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
  content: '';
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
  
  /* Hero Section */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 5rem;
    position: relative;
    overflow: hidden;
  }
  
  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom right, #f5f5f5, white);
    z-index: -1;
  }
  
  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  
  @media (min-width: 768px) {
    .hero-content {
      flex-direction: row;
      align-items: center;
    }
  }
  
  .hero-text {
    flex: 1;
  }
  
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 1;
    margin-bottom: 1.5rem;
  }
  
  @media (min-width: 768px) {
    h1 {
      font-size: 5rem;
    }
  }
  
  .prototype {
    display: block;
  }
  
  .zero {
    position: relative;
    display: inline-block;
  }
  
  .zero::before {
  content: '';
  position: absolute;
  inset: -4px;
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  border-radius: 8px;
  filter: blur(20px);
  opacity: 0.5;
  z-index: -1;
}
  
  .hero-description {
    font-size: 1.25rem;
    font-weight: 300;
    color: #555;
    margin-bottom: 2rem;
    max-width: 24rem;
    line-height: 1.5;
  }
  
  @media (min-width: 768px) {
    .hero-description {
      font-size: 1.5rem;
    }
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
  }
  
  .primary-button {
    background-color: black;
    color: white;
    border: none;
    border-radius: 9999px;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .primary-button:hover {
    background-color: #333;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .secondary-button {
    border: 2px solid black;
    background-color: transparent;
    color: black;
    border-radius: 9999px;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .secondary-button:hover {
    background-color: black;
    color: white;
  }
  
  .secondary-button:hover svg {
    transform: translateX(4px);
  }
  
  .hero-image {
    flex: 1;
    position: relative;
  }
  
  .tilt-container {
    transition: transform 0.1s ease-out;
    transform-style: preserve-3d;
    width: 100%;
  }

  .tilt-container img {
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
  
  .new-badge {
    position: absolute;
    bottom: -1.5rem;
    right: -1.5rem;
    background-color: black;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-weight: 700;
    transform: rotate(12deg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
  
  /* Design Section */
  .design {
    padding: 6rem 0;
    background-color: #f5f5f5;
    overflow: hidden;
  }
  
  .design-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  
  @media (min-width: 768px) {
    .design-content {
      flex-direction: row;
      align-items: center;
    }
  }
  
  .design-images {
    flex: 1;
    position: relative;
    order: 2;
  }
  
  @media (min-width: 768px) {
    .design-images {
      order: 1;
    }
  }
  
  .main-image {
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 1;
  }
  
  .detail-image {
    position: absolute;
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border: 4px solid white;
    z-index: 2;
  }
  
  .detail-1 {
    top: -2.5rem;
    right: -2.5rem;
    transform: rotate(6deg);
  }
  
  .detail-2 {
    bottom: -3rem;
    right: 5rem;
    transform: rotate(-12deg);
  }
  
  .design-text {
    flex: 1;
    order: 1;
  }
  
  @media (min-width: 768px) {
    .design-text {
      order: 2;
      padding-left: 4rem;
    }
  }
  
  .design-text h2 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
  
  .design-text p {
    font-size: 1.125rem;
    color: #555;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .stats {
    display: flex;
    gap: 2rem;
    margin-top: 2.5rem;
  }
  
  .stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1;
  }
  
  .stat-label {
    font-size: 0.875rem;
    color: #777;
    margin-top: 0.5rem;
  }
  
  /* Features Section */
  .features {
    padding: 6rem 0;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  @media (min-width: 768px) {
    .features-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .feature {
    position: relative;
    padding: 2rem;
    border-radius: 1rem;
    transition: all 0.3s ease;
  }
  
  .feature:hover {
  background-color: rgba(var(--color-primary-rgb, 153, 131, 255), 0.05);
}
  
  .feature-icon {
    width: 4rem;
    height: 4rem;
    margin-bottom: 1.5rem;
    position: relative;
  }
  
  .feature-icon img {
    width: 100%;
    transition: all 0.3s ease;
  }
  
  .feature:hover .feature-icon img {
    transform: scale(1.1);
  }
  
  .feature h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .feature p {
    color: #555;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .learn-more {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: black;
    font-weight: 500;
    text-decoration: none;
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  .feature:hover .learn-more {
    opacity: 1;
  }
  
  .learn-more svg {
    transition: all 0.3s ease;
  }
  
  .learn-more:hover svg {
    transform: translateX(4px);
  }
  
  /* Showcase Section */
  .showcase {
    padding: 4rem 0;
    background-color: black;
    color: white;
  }
  
  .showcase h2 {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .showcase-image-container {
    position: relative;
  }
  
  .showcase-image {
    width: 100%;
    border-radius: 0.5rem;
  }
  
  .showcase-text {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    max-width: 20rem;
    text-align: left;
  }
  
  .showcase-text h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  .showcase-text p {
    color: #ccc;
  }
  
  /* Specs Section */
  .specs {
    padding: 6rem 0;
  }
  
  .specs-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  
  @media (min-width: 768px) {
    .specs-content {
      flex-direction: row;
    }
  }
  
  .specs-intro {
    flex: 1;
  }
  
  .specs-intro h2 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
  
  .specs-intro p {
    font-size: 1.125rem;
    color: #555;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
  
  .download-button {
  position: relative;
  overflow: hidden;
  background-color: black;
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.download-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  opacity: 0;
  transition: opacity var(--transition-medium);
}
  
  .download-button:hover::before {
    opacity: 1;
  }
  
  .download-button span {
    position: relative;
    z-index: 1;
  }
  
  .specs-grid {
    flex: 2;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (min-width: 768px) {
    .specs-grid {
      grid-template-columns: repeat(2, 1fr);
      padding-left: 4rem;
    }
  }
  
  .spec-item {
    border-top: 2px solid #eee;
    padding-top: 1rem;
    transition: all 0.3s ease;
  }
  
  .spec-item:hover {
    border-top-color: black;
  }
  
  .spec-item h3 {
    font-size: 0.875rem;
    font-weight: 700;
    color: #777;
    margin-bottom: 0.25rem;
  }
  
  .spec-item p {
    font-size: 1.25rem;
    font-weight: 500;
  }
  
  /* Order Section */
  .order {
    padding: 6rem 0;
    background: linear-gradient(to bottom right, #f5f5f5, white);
  }
  
  .order-content {
    max-width: 48rem;
    margin: 0 auto;
    text-align: center;
  }
  
  .order-header {
    margin-bottom: 3rem;
  }
  
  .order-header h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .order-header p {
    font-size: 1.125rem;
    color: #555;
    max-width: 36rem;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .order-card {
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.order-card:hover {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.order-card:hover::before {
  opacity: 1;
}

.order-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, rgba(var(--color-primary-rgb), 0.05), rgba(var(--color-secondary-rgb), 0.05));
  opacity: 0;
  transition: opacity var(--transition-medium);
}
  
  .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
  }
  
  @media (min-width: 768px) {
    .product-info {
      flex-direction: row;
    }
  }
  
  .product-details {
    text-align: left;
    margin-bottom: 1.5rem;
  }
  
  @media (min-width: 768px) {
    .product-details {
      margin-bottom: 0;
    }
  }
  
  .product-details h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }
  
  .product-details p {
    color: #555;
  }
  
  .product-price {
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  .order-button {
    width: 100%;
    background-color: black;
    color: white;
    border: none;
    border-radius: 9999px;
    padding: 1rem;
    font-size: 1.125rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  
  .order-button:hover {
    background-color: #333;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .shipping-info {
    font-size: 0.875rem;
    color: #777;
    margin-top: 1rem;
    position: relative;
    z-index: 1;
  }
  
  /* Floating Links */
  .floating-links {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    gap: 1.5rem;
    z-index: 100;
  }

  .floating-link {
    color: #555;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
  }

  .floating-link:hover {
    color: black;
  }

  .floating-link:hover::after {
    width: 100%;
  }
</style>

