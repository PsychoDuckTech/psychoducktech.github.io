<section class="newsletter">
  <div class="container">
    <div class="newsletter-content">
      <div class="newsletter-text">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for product updates, typing tips, and exclusive offers.</p>
      </div>
      
      <form class="newsletter-form">
        <input type="email" placeholder="Your email address" class="newsletter-input" />
        <button type="submit" class="newsletter-button">Subscribe</button>
      </form>
    </div>
  </div>
</section>

<style>
  /* Newsletter Section */
  .newsletter {
    padding: 4rem 0;
    background-color: #f5f5f5;
  }
  
  .newsletter-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }
  
  .newsletter-text h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  .newsletter-text p {
    color: #555;
    max-width: 36rem;
    margin: 0 auto;
  }
  
  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 36rem;
  }
  
  @media (min-width: 768px) {
    .newsletter-form {
      flex-direction: row;
    }
  }
  
  .newsletter-input {
    flex: 1;
    padding: 0.75rem 1.5rem;
    border: 1px solid #ddd;
    border-radius: 9999px;
    font-size: 1rem;
    outline: none;
    transition: border-color var(--transition-medium);
  }
  
  .newsletter-input:focus {
    border-color: var(--color-primary);
  }
  
  .newsletter-button {
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
  
  .newsletter-button:hover {
    background-color: #333;
    transform: translateY(-2px);
  }
</style>