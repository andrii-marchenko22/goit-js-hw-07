const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

// варінт 1 ================================>

const collection = document.querySelector('.gallery');

  const element = images.map((image) => {
  const item = document.createElement("li");
  item.classList.add("item-elem");
  
  const picture = document.createElement("img");
  picture.classList.add("image-item");
  picture.src = image.url;
  picture.alt = image.alt;

  item.appendChild(picture);
  return item;
});

collection.append(...element);


// варіант 2 =================================>

// const gallery = document.querySelector(".gallery");

// const galleryMarkup = images.map((image) =>
//     `
//       <li class="item-elem">
//         <img class="image-item" src="${image.url}" alt="${image.alt}">
//       </li>
//     `
//   ).join("");

// gallery.insertAdjacentHTML("beforeend", galleryMarkup);