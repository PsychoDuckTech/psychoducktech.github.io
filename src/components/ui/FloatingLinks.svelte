<div class="floating-links">
  <a href="#" class="floating-link">Support</a>
  <a href="#" class="floating-link">Privacy</a>
  <a href="#" class="floating-link">Terms</a>
  <a href="#" class="floating-link">Contact</a>
</div>

<style>
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

  .floating-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease;
  }

  .floating-link:hover {
    color: black;
  }

  .floating-link:hover::after {
    width: 100%;
  }
</style>