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

    //Keuntungan
    keuntungan = hargaJual - hargaBeli;
    totalKeuntungan += keuntungan;

    //totalModal
    let prive = 0;
    let beban = 0;
    modalAwal = (totalTerjual + sisaStok) * hargaBeli;
    pendapatan = totalTerjual * hargaJual;
    modalAkhir = modalAwal + pendapatan + beban + prive;
    totalModal = modalAkhir + modalAwal;

    //persentaseKeuntungan
    persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;
  }
  function buku(a, b) {
    if (a.totalTerjual < b.totalTerjual) {
      return 1;
    }
    if (a.totalTerjual > b.totalTerjual) {
      return -1;
    }
    return 0;
  }

  return {
    totalKeuntungan: formatter.format(totalKeuntungan),
    totalModal: formatter.format(totalModal),
    persentaseKeuntungan: persentaseKeuntungan.toFixed(2) + "%",
    bukuTerlaris: dataPenjualanBuku.sort(buku)[0].namaProduk,
    penulisTerlaris: dataPenjualanBuku.sort(buku)[0].penulis,
  };
}
console.log(getInfoPenjualan(dataPenjualanNovel));
