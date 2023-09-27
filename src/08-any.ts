(() => {
  let myDinamicVar: any = 'sdsd';
  myDinamicVar = 12;

  myDinamicVar = 'Hola';
  const rta = (myDinamicVar as string).length;
  console.log(rta);

  myDinamicVar = 222;
  const rta2 = (<number>myDinamicVar).toFixed();
  console.log(rta2);
})();
