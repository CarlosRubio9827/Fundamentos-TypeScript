(() => {
  // // let myNumber: number;
  // let myString: string;

  // let myNull: null = null;
  // let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;
  let myString: string | undefined = undefined;
  myString = '12';

  // function hi(name: string | null) {
  //   let hello = 'hola';
  //   if (name) {
  //     hello += name;
  //   } else {
  //     hello += 'nobody';
  //   }
  //   console.log(hello);
  // }
  function hi(name: string | null) {
    let hello = 'hola';
    hello += ' ' + name?.toLocaleLowerCase() || 'nobody';
    console.log(hello);
  }

  hi('CArlos');
  hi(null);
})();
