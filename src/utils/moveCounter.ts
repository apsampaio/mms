const moveCounter = (number: number) => {
  const counter = document.querySelector("p")!;
  counter.innerText = `${number}`;
};

export default moveCounter;
