<script>
  import { specifications } from "../../data/productData.js";
</script>

<section id="specs" class="specs">
  <div class="container">
    <div class="specs-header">
      <span class="overline">The Details</span>
      <h2>Technical Specifications</h2>
      <p>
        Every component of Prototype 0 has been engineered to deliver
        uncompromising performance and reliability.
      </p>
    </div>

    <div class="specs-content">
      <div class="specs-visual">
        <div class="specs-diagram">
          <div class="blueprint-grid"></div>
          <img
            src="/placeholder.svg?height=500&width=700"
            alt="Keyboard Technical Diagram"
            class="blueprint-image"
          />
          <div class="blueprint-annotation top-left">
            <div class="annotation-line"></div>
            <div class="annotation-text">Side Display</div>
          </div>
          <div class="blueprint-annotation bottom-right">
            <div class="annotation-line"></div>
            <div class="annotation-text">Volume Knob</div>
          </div>
          <div class="blueprint-annotation top-right">
            <div class="annotation-line"></div>
            <div class="annotation-text">Module Connector</div>
          </div>
          <div class="blueprint-annotation bottom-left">
            <div class="annotation-line"></div>
            <div class="annotation-text">RGB Underglow</div>
          </div>
        </div>

        <div class="tech-details">
          <div class="tech-detail">
            <div class="tech-label">OS Version</div>
            <div class="tech-value">PsychOS 0.1.6β</div>
          </div>
          <div class="tech-detail">
            <div class="tech-label">Processor</div>
            <div class="tech-value">Dual-Core XTensa LX7</div>
          </div>
          <div class="tech-detail">
            <div class="tech-label">Memory</div>
            <div class="tech-value">8MB PSRAM</div>
          </div>
          <div class="tech-detail">
            <div class="tech-label">Polling Rate</div>
            <div class="tech-value">± 1000Hz</div>
          </div>
        </div>
      </div>

      <div class="specs-grid">
        {#each specifications as spec}
          <div class="spec-item">
            <h3>{spec.name}</h3>
            <p>{spec.value}</p>
          </div>
        {/each}

        <div class="download-specs">
          <button class="download-button">
            <span>Download Full Specs</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Specs Section */
  .specs {
    padding: 6rem 0;
  }

  .specs-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .specs-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  .specs-header p {
    font-size: 1.125rem;
    color: #555;
    max-width: 36rem;
    margin: 0 auto;
    line-height: 1.6;
  }

  .specs-content {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  @media (min-width: 768px) {
    .specs-content {
      flex-direction: row;
    }
  }

  .specs-visual {
    flex: 1;
  }

  .specs-diagram {
    position: relative;
    margin-bottom: 2rem;
  }

  .blueprint-grid {
    position: absolute;
    inset: -20px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: -1;
    border-radius: 0.5rem;
  }

  .blueprint-image {
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .blueprint-annotation {
    position: absolute;
    display: flex;
    align-items: center;
  }

  .top-left {
    top: 20%;
    left: 10%;
  }

  .top-right {
    top: 30%;
    right: 10%;
  }

  .bottom-left {
    bottom: 20%;
    left: 10%;
  }

  .bottom-right {
    bottom: 30%;
    right: 10%;
  }

  .annotation-line {
    width: 40px;
    height: 1px;
    background-color: var(--color-primary);
    margin-right: 0.5rem;
  }

  .annotation-text {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-primary);
    white-space: nowrap;
  }

  .tech-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    background-color: #f5f5f5;
    padding: 1.5rem;
    border-radius: 0.5rem;
  }

  .tech-detail {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .tech-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #777;
  }

  .tech-value {
    font-size: 1rem;
    font-weight: 500;
  }

  .specs-grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
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

  .download-specs {
    grid-column: span 2;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
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
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-secondary)
    );
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
</style>
