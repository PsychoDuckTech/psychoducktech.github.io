import { isScrolled, currentSection, sections } from '../stores/navigationStore.js';

// Handle scroll events to update navigation
export function handleScroll() {
  isScrolled.set(window.scrollY > 50);

  // Update current section based on scroll position
  const scrollPosition = window.scrollY + 100;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  
  // Special case for bottom of page (Order section)
  if (scrollPosition + windowHeight >= documentHeight - 100) {
    currentSection.set('order');
    return;
  }
  
  // Normal section detection
  for (const section of sections) {
    const element = document.getElementById(section.id);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        currentSection.set(section.id);
        break;
      }
    }
  }
}