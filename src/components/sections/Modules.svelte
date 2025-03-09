<script>
  import { modules } from '../../data/productData.js';
</script>

<section class="modules">
  <div class="container">
    <div class="section-header">
      <span class="overline">Expandable</span>
      <h2>Magnetic Modules</h2>
      <p class="section-description">
        Customize your setup with magnetically attachable modules that seamlessly integrate with your Prototype 0.
      </p>
    </div>
    
    <div class="modules-showcase">
      <div class="modules-visual">
        <img 
          src="/placeholder.svg?height=400&width=600" 
          alt="Magnetic Modules" 
          class="modules-image"
        />
        <div class="modules-connector"></div>
      </div>
      
      <div class="modules-list">
        {#each modules as module, i}
          <div class="module-item">
            <div class="module-number">{i + 1}</div>
            <div class="module-content">
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  /* Modules Section */
  .modules {
    padding: 6rem 0;
    background-color: #f9f9f9;
  }
  
  .modules-showcase {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 3rem;
  }
  
  @media (min-width: 768px) {
    .modules-showcase {
      flex-direction: row;
      align-items: center;
    }
  }
  
  .modules-visual {
    flex: 1;
    position: relative;
  }
  
  .modules-image {
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
  
  .modules-connector {
    position: absolute;
    top: 50%;
    right: -20px;
    width: 40px;
    height: 80px;
    background-color: var(--color-primary);
    border-radius: 0.5rem;
    transform: translateY(-50%);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    z-index: 2;
  }
  
  .modules-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .module-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
  }
  
  .module-number {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    color: white;
    font-weight: 700;
    border-radius: 50%;
    flex-shrink: 0;
  }
  
  .module-content h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  .module-content p {
    color: #555;
    line-height: 1.6;
  }
</style>