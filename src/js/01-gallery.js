import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const gallery = document.querySelector(".gallery");

for (let item of galleryItems) {
    
    let newItem = document.createElement("div");
    newItem.classList.add("gallery__item");
    let newLink = document.createElement("a");
    newLink.href = item.original;
    newLink.classList.add("gallery__link");

    let newImage = document.createElement("img");
    newImage.classList.add("gallery__image");
    newImage.src = item.preview;
    newImage.alt = item.description;
    newImage.setAttribute("data-source", item.original);

    newItem.append(newLink);
    newLink.append(newImage); 
    gallery.append(newItem); 
}

//NPM Lightbox

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoomFactor: false,});
		

	
