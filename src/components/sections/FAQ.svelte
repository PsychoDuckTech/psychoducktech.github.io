<script>
  import { faqItems } from "../../data/productData.js";
</script>

<section class="faq">
  <div class="container">
    <div class="section-header">
      <span class="overline">Questions</span>
      <h2>Frequently Asked Questions</h2>
    </div>

    <div class="faq-grid">
      {#each faqItems as item}
        <div class="faq-item">
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      {/each}
    </div>

    <div class="faq-contact">
      <p>Still have questions? <a href="#" class="text-link">Contact us</a></p>
    </div>
  </div>
</section>

<style>
  /* FAQ Section */
  .faq {
    padding: 6rem 0;
    background-color: #f9f9f9;
  }

  .faq-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 768px) {
    .faq-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .faq-item {
    background-color: white;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  .faq-item h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-text);
  }

  .faq-item p {
    color: #555;
    line-height: 1.6;
  }

  .faq-contact {
    text-align: center;
    font-size: 1.125rem;
  }
</style>
