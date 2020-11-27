import * as basicLightbox from 'basiclightbox';

import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

export default function onImgClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const src = event.target.dataset.sourse;
  console.log(src);
  const instance = basicLightbox.create(
    `<img src="${src}" width="800" height="600">`,
  );
  instance.show();
}

// function onImgClick(evt) {
//   const src = evt.target.dataset.src;
//   console.log(src);

//     if (evt.target.nodeName !== ‘IMG’)
//     {
//       return
//       }
//     const instance = basicLightbox.create(`
//         <img class = “imgModal” src=“${evt.target.dataset.source}” width=“800” height=“600">`)
//     instance.show()
//   }
