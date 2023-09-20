const dob = document.querySelector("#DOB");
const num = document.querySelector("#luckyNumber");
const btn = document.querySelector("#btn");

function isLucky() {
  const birthDate = dob.value;
  const sum = calSum(birthDate);
  if (sum && birthDate) {
    compare(sum, num.value);
  } else {
    Response.innerText = "Enter the fields";
  }
}
function calSum(birthDate) {
  birthDate = birthDate.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < birthDate.length; i++) {
    sum = sum + Number(birthDate.charAt(i));
  }
  return sum;
}

function compare(sum, luckyNumber) {
  if (luckyNumber > 0) {
    if (sum % luckyNumber === 0) {
      response.innerText = "Awesome! Your Birthday is Lucky 😍";
    } else {
      response.innerText = "Sorry! Your Birthday is not Lucky";
    }
  } else {
    response.innerText = "LuckyNumber can't be Negative";
  }
}
btn.addEventListener("click", isLucky);
