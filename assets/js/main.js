window.addEventListener("load", (e) => {
  var form = document.querySelector("#form");
  var textInput = document.querySelector("#note");
  var listArea = document.querySelector(".list-area");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    var notes = textInput.value;

    if (!notes) {
      alert("Please add your note first");
    }

    var list_el = document.createElement("div");
    list_el.classList.add("list");
    var p_el = document.createElement("p");
    var span_el = document.createElement("span");
    span_el.classList.add("material-icons-outlined");
    span_el.innerText = "clear";

    p_el.innerText = notes;

    list_el.appendChild(p_el);
    list_el.appendChild(span_el);
    listArea.appendChild(list_el);
  });
});
