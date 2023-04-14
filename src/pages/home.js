function createHome() {
  const home = document.createElement('p');
  home.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut maxime, nisi quaerat ut ducimus excepturi magnam reiciendis illo quasi unde eius eveniet voluptatem repellendus possimus. Sint ex reiciendis natus officia. Est aliquid modi unde sapiente eaque maiores distinctio incidunt repudiandae possimus officiis earum iste, quasi vel facere cupiditate. Aspernatur consequuntur tenetur aut. Quod fugit perspiciatis officiis earum quia exercitationem maiores repellat cum? Laborum assumenda illum reiciendis quidem nobis recusandae quis? Quia minus cumque voluptatibus.";
  return home;
}

function loadHome() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;