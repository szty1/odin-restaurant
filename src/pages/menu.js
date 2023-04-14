function createMenu() {
  const home = document.createElement('p');
  home.innerText = "insert menu info here";
  return home;
}

function loadMenu() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;