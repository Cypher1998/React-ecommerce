export const getRandomProducts = (array, num) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    const randomNumber = Math.floor(Math.random() * array.length);
    const randomProduct = array[randomNumber];
    result.push(randomProduct);
    array.splice(randomNumber, 1);

    // result.filter((displayedProduct) => {
    //   return displayedProduct !== id;
    // });
  }

  return result;
};
