const number = document.querySelector("#number");
const plus = document.querySelector("#plus");
const reset = document.querySelector("#reset");
const minus = document.querySelector("#minus");

plus.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

minus.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};

reset.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = 0;
};
