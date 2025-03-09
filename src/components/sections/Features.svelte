<script>
  import { features } from '../../data/productData.js';
</script>

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
          
          <a href="#" class="learn-more">
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

<style>
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
    background-color: rgba(153, 131, 255, 0.05);
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
</style>