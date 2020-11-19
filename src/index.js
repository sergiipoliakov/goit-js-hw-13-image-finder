import './css/common.css';
// import './js/fetch-url';
import PixabayApiServise from './js/apiService';

const refs = {
  searchForm: document.querySelector('#search-form'),
  galerrylist: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};
// console.log(refs.searchForm);
// console.log(refs.galerrylist);
// console.log(refs.loadMoreBtn);

const pixabayApiServise = new PixabayApiServise();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  pixabayApiServise.query = e.currentTarget.elements.query.value;
  console.log(pixabayApiServise.query);
  pixabayApiServise.fetchImages();
}

function onLoadMore() {
  pixabayApiServise.fetchImages();
}
