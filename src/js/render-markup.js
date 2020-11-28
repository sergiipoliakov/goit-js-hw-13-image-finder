import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';
import getRefs from './get-refs';
import onImgClick from './modal-img';

import templatesImages from '../templates/image-markup.hbs';
import PixabayApiServise from './apiService';
// import './infinity-scroll';

const refs = getRefs();

// console.log(refs.searchForm);
// console.log(refs.galerrylist);
// console.log(refs.loadMoreBtn);
// console.log(refs.containerEL);

const pixabayApiServise = new PixabayApiServise();

refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.galerrylist.addEventListener('click', onImgClick);

function onSearch(e) {
  e.preventDefault();

  pixabayApiServise.query = e.currentTarget.elements.query.value;
  //   console.log(pixabayApiServise.query);

  pixabayApiServise.resetPage();
  pixabayApiServise
    .fetchImages()
    .then(hits => {
      if (hits.length === 0) {
        return error({
          text: 'Something Wrong!!! Please enter a specific query!',
          type: 'info',
        });
      }

      clearImagesList();

      appendImagesMarkup(hits);

      registerIntersectionObserver();
    })
    .catch(error => {
      return error({
        text: 'Something Wrong!!! Please enter a specific query!',
        type: 'info',
      });
    });
}

// function onLoadMore() {
//   pixabayApiServise
//     .fetchImages()
//     .then(appendImagesMarkup)
//     .catch(error => {
//       console.log(error);
//     });
// }

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
