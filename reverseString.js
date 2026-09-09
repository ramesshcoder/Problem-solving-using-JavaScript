// functions  to  return reversed string of provided input
function reverString(input) {
  let rev = "";
  for (let i = input.length - 1; i >= 0; i--) {
    rev += input[i];
  }
  return rev;
}
let result  =reverString("Dog");
console.log(result,'reversed of Dog')