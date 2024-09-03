import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initFaqSlider} from './modules/init-faq-slider';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();
  initFaqSlider();
});
