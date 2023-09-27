(() => {
  let isEnable = true;
  isEnable = false;
  console.log('isEnable', isEnable);

  let isEnable2: boolean = true;
  console.log('isEnable2', isEnable2);

  const random = Math.random();
  console.log('random', random);
  isEnable2 = random >= 0.5 ? true : false;
  console.log('isEnable22', isEnable2);

  

})();
