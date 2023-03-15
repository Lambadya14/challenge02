//////////////////////////// 1 ChangeWord/////////////////////////////////
function changeWord(selectedText, changedText, text) {
  let hasil = text.replace(selectedText, changedText);
  console.log(hasil);
}

// let kalimat1 = "Andini sangat mencintai kamu selamanya";
// let kalimat2 = "Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu";
// changeWord("mencintai", "membenci", kalimat1);
// changeWord("Bromo", "Semeru", kalimat2);

/////////////////////////// 2 Even or Odd///////////////////////////////////
function checkTypeNumber(givenNumber) {
  if (givenNumber % 2 == 0 && typeof givenNumber == "number") {
    console.log("Genap");
  } else if (givenNumber % 2 !== 0 && typeof givenNumber == "number") {
    console.log("Ganjil");
  } else if (givenNumber == null) {
    console.log("Error: Bro Where is the parameter?");
  } else {
    console.log("Error: Invalid Data Type");
  }
}
// checkTypeNumber(10);
// checkTypeNumber(3);
// checkTypeNumber("3");
// checkTypeNumber({});
// checkTypeNumber([]);
// checkTypeNumber();
///////////////////////////// 3 Email Validation////////////////////////////////
function checkEmail(email) {
  //test() melakukan kecocokan dan akan menghasilkan true/false
  var RE =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (RE.test(email) == true) {
    console.log("VALID");
  } else if (RE.test(email) == false) {
    console.log("INVALID");
  } else if (RE.test(email) == null) {
    console.error;
  }
  return;
}

// checkEmail('apranata@binar.co.id');
// checkEmail('apranata@binar.com');
// checkEmail('apranata@binar');
// checkEmail('apranata');  //???
// checkTypeNumber(checkEmail(3322));
// checkEmail();
////////////////////////// 4 Password Validation/////////////////////////////////
function isValidPassword(email) {
  //match() melakukan kecocokan dan akan menghasilkannya dengan array, dan null jika tidak cocok
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var email;

  if (
    email.match(lowerCaseLetters) &&
    email.match(upperCaseLetters) &&
    email.match(numbers) &&
    email.length >= 8
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
}
// isValidPassword("Meong2021");
// isValidPassword("meong2021");
// isValidPassword("@eong");
// isValidPassword("Meong2"); 
// isValidPassword(0);
// isValidPassword(); 
///////////////////////////////////// 5 Split Name////////////////////////////
function getSplitName(personName) {
  let fullName = personName.split(" ");
  let firstName = personName.split(" ");
  let middleName = personName.split(" ");
  let lastName = personName.split(" ");

  console.log(fullName);

  if (fullName.length == 1) {
    console.log("First Name = " + firstName[0]);
    console.log("Middle Name = " + null);
    console.log("Last Name = " + null);
  } else if (fullName.length == 2) {
    console.log("First Name = " + firstName[0]);
    console.log("Middle Name = " + null);
    console.log("Last Name = " + lastName[1]);
  } else if (fullName.length == 3) {
    console.log("First Name = " + firstName[0]);
    console.log("Middle Name = " + middleName[1]);
    console.log("Last Name = " + lastName[2]);
  } else {
    console.log("This function is only for 3 character name!");
  }

  return;
}
// getSplitName("Aldi Daniela Pranata");
// getSplitName("Dwi Kuncoro");
// getSplitName("Aurora");
// getSplitName("Aurora Aureliya Sukma Darma");
// getSplitName(0);
///////////////////////////// 6 Angka Terbesar Ke-2//////////////////////////
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
// console.log(getAngkaTerbesarKedua(Angka));
// console.log(getAngkaTerbesarKedua(0);
// console.log(getAngkaTerbesarKedua());

////////////////////////// 7 Total Penjualan////////////////////////////////
const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High - Original",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];
function hitungTotalPenjualan(dataPenjualan) {
  let totalSepatu = 0;
  for (let i = 0; i < dataPenjualan.length; i++) {
    Hasil = dataPenjualan[i].totalTerjual;
    totalSepatu += Hasil;
  }
  console.log("Total Sepatu yang terjual = " + totalSepatu + " item");
}
// hitungTotalPenjualan(dataPenjualanPakAldi);
/////////////////////////////////// 8 TK&TM&ProdukBT&PenulisBT&PK//////////////
const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },

  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];
function getInfoPenjualan(dataPenjualanBuku) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  let totalKeuntungan = 0;
  let totalModal = 0;

  for (let i = 0; i < dataPenjualanBuku.length; i++) {
    hargaJual = dataPenjualanBuku[i].hargaJual;
    hargaBeli = dataPenjualanBuku[i].hargaBeli;
    totalTerjual = dataPenjualanBuku[i].totalTerjual;
    sisaStok = dataPenjualanBuku[i].sisaStok;
    namaProduk = dataPenjualanBuku[i].namaProduk;
    namaPenulis = dataPenjualanBuku[i].penulis;

    /////////////////Keuntungan////////////////////////////
    keuntungan = hargaJual - hargaBeli;
    totalKeuntungan += keuntungan;

    ///////////////////totalModal///////////////////////
    let prive = 0;
    let beban = 0;
    modalAwal = (totalTerjual + sisaStok) * hargaBeli;
    pendapatan = totalTerjual * hargaJual;
    modalAkhir = modalAwal + pendapatan + beban + prive;
    totalModal = modalAkhir + modalAwal;

    ///////////////////persentaseKeuntungan///////////////////
    persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;
  }
  ///////////////////namaProduk//////////////////////////
  function buku(a, b) {
    //sort
    if (a.totalTerjual < b.totalTerjual) {
      return 1;
    }
    if (a.totalTerjual > b.totalTerjual) {
      return -1;
    }
    return 0;
  }

  const tampil = {};
  tampil.totalKeuntungan = formatter.format(totalKeuntungan);
  tampil.totalModal = formatter.format(totalModal);
  tampil.persentaseKeuntungan = persentaseKeuntungan.toFixed(2) + "%";
  tampil.bukuTerlaris = dataPenjualanBuku.sort(buku)[0].namaProduk;
  tampil.penulisTerlaris = dataPenjualanBuku.sort(buku)[0].penulis;
  console.log(tampil);
}
// getInfoPenjualan(dataPenjualanNovel);
