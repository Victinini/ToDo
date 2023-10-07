let input = document.querySelector(".Add");
input.onkeypress = (event) => {
  if (event.keyCode == 13) {
    let Ul = document.querySelector(".UnLi");
    let li = document.createElement("li");
    li.innerHTML = input.value;
    Ul.appendChild(li);
    input.value=""
  }
};
