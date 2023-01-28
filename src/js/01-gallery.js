import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// пошук галереї на сторінці
const gallery = document.querySelector(".gallery");

// створення пустого масиву для додавання елементів
const items = [];

// перебирання масиву об'єктів з файлу './gallery-items.js'
galleryItems.forEach((element) => {

  // створення тегу посилання
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link"); // додавання класу до посилання
  galleryLink.href = element.original; // присвоєння посилання на фото з властивості об'єкта

  // створення тегу зображення
  const galleryImage = document.createElement("img");

  // додавання класу до зображення
  galleryImage.classList.add("gallery__image");

  // додавання малого зображення з властивості об'єкта './gallery-items.js'
  galleryImage.src = element.preview; // присвоєння малого зображення

  // додавання атрибуту title з властивості об'єкта './gallery-items.js'
  galleryImage.setAttribute("title", element.description);

  // додавання тексту для alt з властивості об'єкта './gallery-items.js'
  galleryImage.alt = element.description;

  galleryLink.append(galleryImage); // вставлення зображення в посилання
  items.push(galleryLink); // вставлення посилання в масив елементів
});

// додавання створених елементів до галереї через розпилення
gallery.append(...items);

// додавання затримки для опису зображення
new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});

// Діма Берестень