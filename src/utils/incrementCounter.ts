const incrementCounter = (number: number): number => {
  number++;
  const counter = document.querySelector("p")!;
  counter.innerText = `${number}`;
  return number;
};

export default incrementCounter;
