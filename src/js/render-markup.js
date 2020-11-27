// import './infinity-scroll';
// import './css/common.css';
import getRefs from './get-refs';
import onImgClick from './modal-img';

import templatesImages from '../templates/image-markup.hbs';
import PixabayApiServise from './apiService';
// import './infinity-scroll';

const refs = getRefs();

// console.log(refs.searchForm);
// console.log(refs.galerrylist);
// console.log(refs.loadMoreBtn);
console.log(refs.containerEL);

const pixabayApiServise = new PixabayApiServise();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.galerrylist.addEventListener('click', onImgClick);
// window.addEventListener('scroll', loadImages);

function onSearch(e) {
  e.preventDefault();

  pixabayApiServise.query = e.currentTarget.elements.query.value;
  //   console.log(pixabayApiServise.query);
  pixabayApiServise.resetPage();
  pixabayApiServise.fetchImages().then(hits => {
    clearImagesList();
    appendImagesMarkup(hits);
    registerIntersectionObserver();
  });
}

function onLoadMore() {
  pixabayApiServise.fetchImages().then(appendImagesMarkup);
}

function appendImagesMarkup(hits) {
  refs.galerrylist.insertAdjacentHTML('beforeend', templatesImages(hits));
}
function clearImagesList() {
  refs.galerrylist.innerHTML = '';
}

function registerIntersectionObserver() {
  const onEntry = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && pixabayApiServise.query !== '') {
        console.log('пора');
        pixabayApiServise.fetchImages().then(appendImagesMarkup);
      }
    });
  };

  const options = {
    rootMargin: '450px',
  };
  const observer = new IntersectionObserver(onEntry, options);

  observer.observe(refs.containerEL);
}

// const infScroll = new InfiniteScroll(refs.containerEL, {
//   // options
//   path: '.pagination__next',
//   append: '.post',
//   history: false,
// });
