export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchImages() {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = 'key=19156782-f4e949a45fa5f59b2c0db0877';

    return fetch(
      `${BASE_URL}?${API_KEY}&q=yellow+flowers&q=${this.searchQuery}&image_type=photo&per_page=12&page=${this.page}`,
    )
      .then(res => res.json())
      .then(data => {
        this.incrementPage();
        console.log(data.hits);
        return data.hits;
      });
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
