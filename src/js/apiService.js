export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchImages() {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = 'key=19156782-f4e949a45fa5f59b2c0db0877';

    fetch(
      `${BASE_URL}?${KEY}&q=yellow+flowers&q=${this.searchQuery}&image_type=photo&per_page=5&page=${this.page}`,
    )
      .then(res => res.json())
      .then(data => {
        this.page += 1;
      });
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
