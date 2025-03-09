import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import './styles/variables.css';
import './styles/global.css';

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
