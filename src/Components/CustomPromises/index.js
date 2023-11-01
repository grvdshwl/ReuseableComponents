function customPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve(`Success! Random number is ${randomNumber}`);
      } else {
        reject(`Error! Random number is ${randomNumber}`);
      }
    }, 1000);
  });
}

customPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
