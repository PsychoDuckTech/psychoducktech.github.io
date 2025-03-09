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
          Advanced <span class="highlight">3D printed</span> construction
        </h2>
        <p>
          Each Prototype 0 keyboard is crafted using cutting-edge 3D printing technology with high-performance composite materials, 
          creating a lightweight yet durable design with perfect key stability.
        </p>
        <p>
          The RGB underglow provides customizable ambient lighting, while the magnetic module system allows for expandability 
          with numpad, macropad, and other accessories.
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

<style>
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
</style>