module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) return false;

  while (str.length) {
    let inputString = str;
    bracketsConfig.forEach(listItem => {
      const bracketCouple = listItem.join("");
      while (str.includes(bracketCouple)) {
        str = str.replace(bracketCouple, "");
      }
    })
    if (inputString === str) return false;
  }
  return true;
  // console.log("{}}][]}[]}".replace("[]", "-"))

}

// function check(str, bracketsConfig) {
//   if (str.length % 2) return false;

//   while (str.length) {
//     let inputString = str;
//     bracketsConfig.forEach(listItem => {
//       const bracketCouple = listItem.join("");
//       while (str.includes(bracketCouple)) {
//         str = str.replace(bracketCouple, "");
//       }
//     })
//     if (inputString === str) return false;
//   }
//   return true;
//   // console.log("{}}][]}[]}".replace("[]", "-"))

// }


// console.log(check('[]()(', [['(', ')'], ['[', ']']]))
