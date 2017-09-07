console.log('Start App');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('Inside of callback with no delay');
}, 0);

console.log('Finish App');