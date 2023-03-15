function changeWord(selectedText, changedText, text) {
  let hasil = text.replace(selectedText, changedText);
  return hasil;
}
let kalimat1 = "Andini sangat mencintai kamu selamanya";
let kalimat2 =
  "Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu";
console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
