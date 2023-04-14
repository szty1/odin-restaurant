import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import '../styles/style.css';

function createHeader() {
  const header = document.createElement("div");
  header.classList.add('header');

  const h1 = document.createElement('h1');
  h1.textContent = "Fancy Pizzaplace";

  header.appendChild(h1);

  return header;
}

function createNav() {
  const nav = document.createElement("div");
  nav.classList.add('nav');

  const ul = document.createElement("ul");

  ul.appendChild(createNavItem("HOME", loadHome));
  ul.appendChild(createNavItem("MENU", loadMenu));
  ul.appendChild(createNavItem("CONTACT", loadContact));
  
  nav.appendChild(ul);

  return nav;
}

function createNavItem(caption, loadfunction) {
  const listitem = document.createElement("li");
  const link = document.createElement("a");
  
  link.innerHTML = caption;

  link.addEventListener("click", (e) => {
    e.preventDefault();
    loadfunction();
  });

  listitem.appendChild(link);

  return listitem;
}

function createMain() {
  const main = document.createElement("div");
  main.classList.add('main');
  return main;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add('footer');

  const footertext = document.createElement('span');
  footertext.textContent = "Odin Project: Restaurant Page - 2023 szty1";

  footer.appendChild(footertext);

  return footer;
}

function createSite() {
  const content = document.querySelector('.content');

  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createMain());
  content.appendChild(createFooter()); 

  loadHome();
}

export default createSite;