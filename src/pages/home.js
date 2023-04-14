function createSite() {
  const content = document.querySelector('.content');

  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createMain());
  
}