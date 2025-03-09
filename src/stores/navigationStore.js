import { writable } from 'svelte/store';

// Navigation state
export const isScrolled = writable(false);
export const currentSection = writable('hero');

// Sections for navigation
export const sections = [
  { id: 'hero', label: 'Prototype 0' },
  { id: 'design', label: 'Design' },
  { id: 'features', label: 'Features' },
  { id: 'specs', label: 'Specs' },
  { id: 'order', label: 'Order' }
];

// Smooth scroll to section
export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
}