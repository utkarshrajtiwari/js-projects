let result = document.querySelector("#result");
let filter = document.querySelector("#filter");
const listItems = [];

filter.addEventListener("input", (e) => {
  filterData(e.target.value);
});

async function getData() {
  try {
    const res = await fetch("https://randomuser.me/api?results=50");
    const { results } = await res.json();

    result.innerHTML = "";
    listItems.length = 0;

    results.forEach((user) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="user-img">
          <img src="${user.picture.large}" alt="${user.name.first}" />
        </div>
        <div class="user-info">
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>${user.location.city}, ${user.location.country}</p>
        </div>
      `;
      listItems.push(li);
      result.appendChild(li);
    });
    filterData(filter.value);
  } catch (error) {
    console.error(error);
  }
}
function filterData(searchTerm) {
  const term = searchTerm.trim().toLowerCase();
  listItems.forEach((item) => {
    const matches = item.innerText.toLowerCase().includes(term);
    item.classList.toggle("hide", !matches);
  });
}

getData();
