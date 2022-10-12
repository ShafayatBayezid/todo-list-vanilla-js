window.addEventListener("load", () => {
  var form = document.querySelector("#form");
  var textInput = document.querySelector("#note");
  var listArea = document.querySelector(".list-area");

  var toggleBtn = document.querySelector(".toggleBtn");
  var body = document.querySelector('body');

  
  toggleBtn.onclick = () => {
    body.classList.toggle('dark');
  }

  //get form element from DOM
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    var notes = textInput.value;

    //check if the input element is empty
    if (!notes) {
      alert("Please add your note first");
    } else {
      //create elements for note list
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

      textInput.value = "";

      // delete unnessecery list from DOM
      span_el.addEventListener("click", () => {
        listArea.removeChild(list_el);
      });
    }
  });
});
