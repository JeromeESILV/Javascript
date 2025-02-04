const root = document.getElementById("root");
const table = document.createElement("table");
const dataAsText = localStorage.getItem("backup");
const data = JSON.parse(dataAsText || "{}");

for (let i = 0; i < 5; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 5; j++) {
    const column = document.createElement("td");
    const value = data[`${i}-${j}`] || "Default";
    const text = document.createTextNode(value);
    column.appendChild(text);

    column.addEventListener("click", function (event) {
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
        data[`${i}-${j}`] = input.value;
        localStorage.setItem("backup", JSON.stringify(data));
      });
    });

    row.appendChild(column);
  }
  table.appendChild(row);
}

root.appendChild(table);

/**
 * {
 *  "0-1": "Hello"
 *  "1-3": "Hello"
 * }
 */
