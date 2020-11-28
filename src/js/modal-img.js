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
