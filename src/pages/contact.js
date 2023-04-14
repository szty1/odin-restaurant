function createContact() {
  const home = document.createElement('p');
  home.innerText = "insert contact info here";
  return home;
}

function loadContact() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;