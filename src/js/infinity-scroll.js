// import InfiniteScroll from 'infinite-scroll';
// console.log(InfiniteScroll);
// // import PixabayApiServise from './apiService';

// // const pixabayApiServise = new PixabayApiServise();

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = 'key=19156782-f4e949a45fa5f59b2c0db0877';

// const elem = document.querySelector('.container');

// const infScroll = new InfiniteScroll(elem, {
//   // options
//   path: '.pagination__next',
//   append: '.post',
//   history: false,
//   path() {
//     const url = `${BASE_URL}?${API_KEY}&q=yellow+flowers&q=${this.searchQuery}&image_type=photo&per_page=12&page=${this.pageIndex}`;
//     console.log(url);
//     return url;
//   },
// });
// console.log(infScroll.pageIndex);

// infScroll.loadNextPage();

// infScroll.on('load', function (response, path) {
//   console.log(path);
// });
