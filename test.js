import fetchx from 'fetchx-lite';

fetchx.get('https://jsonplaceholder.typicode.com/posts/').then((res) => {
  console.log(res.data);
});

fetchx
  .post('https://jsonplaceholder.typicode.com/posts/', {
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  .then((res) => {
    console.log(res.data);
  });

fetchx
  .put('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  .then((res) => {
    console.log(res.data);
  });

fetchx.delete('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
  console.log(res.data);
});
