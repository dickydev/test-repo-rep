import fetchx from 'fetchx-lite';

fetchx.get('https://jsonplaceholder.typicode.com/posts/').then((res) => {
  console.log(res.data);
});
