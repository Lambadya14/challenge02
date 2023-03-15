function getSplitName(personName) {
  let fullName = personName.split(" ");
  let firstName = personName.split(" ");
  let middleName = personName.split(" ");
  let lastName = personName.split(" ");

  // console.log(fullName);

  if (fullName.length == 1) {
    return {
      "firsName": firstName[0],
      "middleName": null,
      "lastName": null,
    };
  } else if (fullName.length == 2) {
    return {
      "firstName": firstName[0],
      "middleName": null,
      "lastName": lastName[1],
    };
  } else if (fullName.length == 3) {
    return {
      "firstName": firstName[0],
      "middleName": middleName[1],
      "lastName": lastName[2],
    };
  } else {
    return "This function is only for 3 character name!";
  }
}
console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0)); // personName.split bukan fungsi + krn tidak bisa mendefinisikan number(split() hanya bisa digunakan string)
