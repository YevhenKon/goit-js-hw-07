import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const makeGalleryItems = galleryItem => {
    const { original, preview, description } = galleryItem;
    // console.log(galleryItem);
    return `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
}

const makeGalleryPictures = galleryItems.map(makeGalleryItems).join('')

const galleryElements = document.querySelector('.gallery')

galleryElements.insertAdjacentHTML('afterbegin', makeGalleryPictures)
// console.log(makeGalleryPictures);

galleryElements.addEventListener('click', (evt) => {
    evt.preventDefault()

    if (evt.target.tagName !== 'IMG') {
        return
    }

    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height ="600">`
    )

    instance.show()
})



