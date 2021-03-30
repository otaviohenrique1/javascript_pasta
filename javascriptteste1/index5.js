function Teorema_de_Pitagoras2(hipotenusa, cateto1, cateto2) {
  if (hipotenusa == 0) {
    return Math.sqrt((Math.pow(cateto1, 2) + Math.pow(cateto2, 2)));
  }
  if (cateto1 == 0) {
    return Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(cateto2, 2)));
  }
  if (cateto2 == 0) {
    return Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(cateto1, 2)));
  }
  return 0;
}

console.log(Teorema_de_Pitagoras2(5,3,0));