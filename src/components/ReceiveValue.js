import Serie from "./Serie";


/* 
function that prints the result in the visual
*/

function ReceiveValue(e) {
  e.preventDefault();
  const inputValue = parseInt(document.querySelector(".inputValue").value);
  let result = Serie(inputValue);
  if (result) {
    const heading = document.createElement("h2");
    const node = document.createTextNode(result);
    heading.appendChild(node);
    const element = document.querySelector(".serieResult");
    element.appendChild(heading);
  }
}

export default ReceiveValue;