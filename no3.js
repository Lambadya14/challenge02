function checkEmail(email) {
  var RE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (RE.test(email) === true) {
    return "VALID";
  } else {
    return "INVALID";
  }
}

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata")); //INVALID
console.log(checkTypeNumber(checkEmail(3322))); //invalid->3322 bukan email & Error: Bro Where is the parameter? ->tidak berjalan undefine
console.log(checkEmail()); //INVALID
