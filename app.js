const h1 = document.querySelector("h1");
const button = document.querySelector("button");
button.addEventListener("click", function () {
  const [r, g, b] = makeRandomColor();
  const newColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;

  if (r + g + b < 150) {
    document.body.style.color = "rgb(250, 235, 215)";
  } else {
    document.body.style.color = "rgb(10, 10, 10)";
  }
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return [r, g, b];
};
