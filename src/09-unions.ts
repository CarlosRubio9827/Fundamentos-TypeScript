(() => {
  let myDinamicVar: number | string;

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`Logintud del text: ${myText.length}`);
    } else {
      console.log(myText.toFixed(1));
    }
  }

  greeting('HOla');
  greeting(2);
})();
