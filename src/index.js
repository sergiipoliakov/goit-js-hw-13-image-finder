fetch(
  'https://pixabay.com/api/?key=19156782-f4e949a45fa5f59b2c0db0877&q=yellow+flowers&image_type=photo',
)
  .then(res => res.json())
  .then(console.log);