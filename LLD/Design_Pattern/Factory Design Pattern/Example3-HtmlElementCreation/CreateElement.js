function createElement(type, text, color) {
  const el = document.createElement(type);
  el.innerText = text;
  el.style.color = color;
  document.body.append(el);
  return {
    el,
    setText(newText) {
      el.innerText = newText;
    },
    setColor(newColor) {
      el.style.color = newColor;
    },
  };
}

// Heading : h1
const heading = createElement("h1", "This is a Heading", "Blue");
console.log("Heading : ", heading);
heading.setColor("Green");
heading.setText("This is new Text");

// Paragraph : p
const paragraph = createElement("p", "This is a description.", "red");
console.log("Para : ", paragraph);
