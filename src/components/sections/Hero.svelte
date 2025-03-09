<script>
  import { scrollToSection } from "../../stores/navigationStore.js";

  // Tilt effect variables
  let tiltX = 0;
  let tiltY = 0;
  let isHovering = false;

  function handleMouseMove(event) {
    if (!isHovering) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the element
    const y = event.clientY - rect.top; // y position within the element

    // Calculate tilt based on mouse position relative to center of element
    tiltX = (y / rect.height - 0.5) * -20; // Invert Y axis for natural tilt
    tiltY = (x / rect.width - 0.5) * 10;
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
</script>

<section id="hero" class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-text">
        <h1>
          <span class="prototype">Prototype 0</span>
          <!-- span class="zero"></span -->
        </h1>

        <p class="hero-description">
          The keyboard that <span class="bold">anticipates</span> your next move.
          Featuring an ortholinear layout, integrated side display, and precision
          volume knob.
        </p>

        <div class="hero-buttons">
          <button class="primary-button">Learn more</button>
          <a href="/WebConfigurator" class="configurator-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
              ></path>
            </svg>
            <span>Configure your device</span>
          </a>
        </div>
        <p class="configurator-note">
          Already have a Prototype 0? Use our web configurator to customize your
          device.
        </p>
      </div>

      <div class="hero-image">
        <div
          class="tilt-container"
          on:mousemove={handleMouseMove}
          on:mouseenter={handleMouseEnter}
          on:mouseleave={handleMouseLeave}
          style="transform: perspective(1000px) rotateX({tiltX}deg) rotateY({tiltY}deg);"
        >
          <img
            src="/placeholder.svg?height=600&width=800"
            alt="Prototype 0 Keyboard"
          />
          <div class="rgb-glow"></div>
        </div>

        <!-- Floating badge -->
        <div class="new-badge">
          <span>New</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Hero Section */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
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
    content: "";
    position: absolute;
    inset: -4px;
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-secondary)
    );
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
    position: relative;
    display: inline-block;
  }

  @media (min-width: 768px) {
    .hero-description {
      font-size: 1.5rem;
    }
  }

  .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 0.5rem;
    display: inline-flex;
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
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
  }

  .secondary-button::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: black;
    transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: -1;
  }

  .secondary-button:hover {
    color: white;
  }

  .secondary-button:hover::after {
    width: 100%;
  }

  .secondary-button span,
  .secondary-button svg {
    position: relative;
    z-index: 1;
  }

  .secondary-button svg {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .secondary-button:hover svg {
    transform: translateX(4px);
  }

  .configurator-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: rgba(153, 131, 255, 0.1);
    color: var(--color-primary);
    border: none;
    border-radius: 9999px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    text-decoration: none;
  }

  .configurator-button:hover {
    background-color: rgba(153, 131, 255, 0.2);
    transform: translateY(-2px);
  }

  .configurator-note {
    font-size: 0.875rem;
    color: #777;
    margin-top: 0.5rem;
  }

  .hero-image {
    flex: 1;
    position: relative;
  }

  .tilt-container {
    transition: transform 0.1s ease-out;
    transform-style: preserve-3d;
    width: 100%;
    position: relative;
  }

  .tilt-container img {
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .rgb-glow {
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 15px;
    background: linear-gradient(
      90deg,
      #ff0000,
      #ff7f00,
      #ffff00,
      #00ff00,
      #0000ff,
      #4b0082,
      #8b00ff
    );
    filter: blur(15px);
    opacity: 0.7;
    border-radius: 50%;
    animation: rgb-flow 5s linear infinite;
  }

  @keyframes rgb-flow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
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
</style>
