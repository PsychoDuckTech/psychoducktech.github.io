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
            <p>Includes USB-C cable and keycap puller</p>
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

<style>
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
    background: linear-gradient(to bottom right, rgba(153, 131, 255, 0.05), rgba(255, 171, 7, 0.05));
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
</style>