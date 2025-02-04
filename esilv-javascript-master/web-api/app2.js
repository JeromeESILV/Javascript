const root = document.getElementById("root");

const structure = {
  type: "table",
  children: [
    {
      type: "tr",
      children: [
        {
          type: "td",
          text: "Hello",
        },
        {
          type: "td",
          text: "Hello",
        },
        {
          type: "td",
          text: "Hello",
        },
      ],
    },
    {
      type: "tr",
      children: [
        {
          type: "td",
          text: "Hello",
        },
        {
          type: "td",
          text: "Hello",
        },
        {
          type: "td",
          text: "Hello",
        },
      ],
    },
  ],
};

function generateElement(conf) {
  const elem = document.createElement(conf.type);
  if (conf.children) {
    for (let subStructure of conf.children) {
      const subElem = generateElement(subStructure);
      elem.appendChild(subElem);
    }
  }
  if (conf.text) {
    const text = document.createTextNode(conf.text);
    elem.appendChild(text);
  }
  if (["td"].includes(conf.type)) {
    elem.addEventListener("click", function (event) {
      if (event.target.tagName === "INPUT") return;
      const box = event.target;
      const text = box.childNodes[0];
      const input = document.createElement("input");
      input.value = box.textContent;
      box.replaceChild(input, text);
      input.focus();

      input.addEventListener("blur", function (event) {
        const input = event.target;
        const text = document.createTextNode(input.value);
        input.parentNode.replaceChild(text, input);
      });
    });
  }
  return elem;
}

const elem = generateElement(structure);
root.appendChild(elem);
