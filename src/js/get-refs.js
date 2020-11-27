export default function getRefs() {
  return {
    searchForm: document.querySelector('#search-form'),
    galerrylist: document.querySelector('.js-gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    containerEL: document.querySelector('.container'),
  };
}
