function getAngkaTerbesarKedua(Angka) {
  Angka.sort(function (x, y) {
    return y - x;
  });
  for (var j = 1; j < Angka.length; j++) {
    if (Angka[j - 1] !== Angka[j]) {
      return Angka[j];
    }
  }
}
let Angka = [9, 4, 7, 7, 4, 3, 2, 8];
console.log(getAngkaTerbesarKedua(Angka));
console.log(getAngkaTerbesarKedua(0));// Angka.sort is not a function + krn bukan array
console.log(getAngkaTerbesarKedua());//error: tidak dapat membaca properties of undefined + karena tidak ada isi
