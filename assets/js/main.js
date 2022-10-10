window.addEventListener("load", (e) => {
  var form = document.querySelector("#form");
  var textInput = document.querySelector("#note");
  var listArea = document.querySelector(".list-area");

  //get form element from DOM
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    var notes = textInput.value;

    //check if the input element is empty
    if (!notes) {
      alert("Please add your note first");
    }

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
  });

    
    var allNotes = document.querySelector(".list-area");
console.log(allNotes.lastChild);
    
  //delete unnessecery list from DOM
  var note = document.querySelector('span');
  note.addEventListener("click", (e) => {
    // var allNotes = document.querySelector(".list-area");
    // allNotes.removeChild(allNotes.firstElementChild);
      
      alert('dfadsf')
  });
});
