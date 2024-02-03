import { images } from './carousel-images';
import { createCarousel } from './carousel-markup';
import { handleCarousel } from './carousel-handling';
import cycloneStudiosLogoSVG from '../assets/images/logos/cycloneStudios.svg';

// > --------------------------------------------------------------

function renderDOM() {
  const cycloneStudiosLogoElement = document.createElement('img');
  cycloneStudiosLogoElement.classList.add('cyclone-studios-logo', 'non-interactive');
  cycloneStudiosLogoElement.src = cycloneStudiosLogoSVG;
  

  const carousel = createCarousel(images);

  const content = document.getElementById('content');
  content.append(cycloneStudiosLogoElement, carousel);
}

renderDOM();
handleCarousel();
