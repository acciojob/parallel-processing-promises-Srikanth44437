const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

const downloadImage = (image) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load image's: ${images.url}`);
    img.src = image.url;
  });
};

const downloadAllImage = () => {
  Promise.all(images.map(downloadImage))
    .then((images) => {
      images.forEach((img) => {
        output.appendChild(img);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

btn.addEventListener("click", downloadAllImage);