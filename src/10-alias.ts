(() => {
  type UserId = number | string;
  let myDinamicVar: UserId;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'X';
  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'X';

  function greeting(myText: UserId, size:Sizes) {
    if (typeof myText === 'string') {
      console.log(`Logintud del text: ${myText.toLocaleLowerCase()}`);
    } else {
      console.log(myText.toFixed(1));
    }
  }

  greeting('HOla', 'M');
  greeting(2, 'M');
})();
