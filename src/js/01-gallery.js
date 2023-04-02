// Add imports above this line
import { galleryItems } from './gallery-items.js';
import sifmplelightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const galleryCard = createGallery(galleryItems);

function createGallery(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
  </a>
</div>`;
    })
        .join('');
}

gallery.insertAdjacentHTML('beforeend', galleryCard);

new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
});
console.log(galleryItems);