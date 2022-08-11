var table = document.querySelector("tbody[data-sink") as HTMLTableElement;
var label = document.querySelector("label[data-pageview]") as HTMLElement;
var previousBtn = document.querySelector(
  "button[data-prevbtn]"
) as HTMLButtonElement;
var nextBtn = document.querySelector(
  "button[data-nextbtn]"
) as HTMLButtonElement;

let page = 1;
let info;
let results;
let url = `https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=`;

async function getData() {
  await fetch(url + page)
    .then((res) => res.json())
    .then((result) => {
      // console.log(result);
      info = result.info;
      results = result.results[0];
      populateTable(results);
      checkPrev();
    })
    .catch((err) => {
      console.log(err);
    });
}

function populateTable(data) {
  data[page].forEach((res, index) => {
    table.rows[index].setAttribute("data-entryid", res.id);
    table.rows[index].cells[0].innerHTML = res.row;
    table.rows[index].cells[1].innerHTML = res.gender;
    table.rows[index].cells[2].innerHTML = res.age;
  });
  label.innerHTML = `Showing Page ${page}`;
  label.setAttribute("data-pageview", `Showing Page ${page}`);
}

function checkPrev() {
  if (page === 1) {
    previousBtn.setAttribute("disabled", "disabled");
  } else previousBtn.removeAttribute("disabled");
}

getData();

const startApp = () => {
  label.innerHTML = `Showing Page ${page}`;

  nextBtn.addEventListener("click", nextClicked);
  previousBtn.addEventListener("click", previousClicked);

  function nextClicked() {
    page = page + 1;
    getData();
  }

  function previousClicked() {
    page = page - 1;
    getData();
  }
};

// document.addEventListener("DOMContentLoaded", startApp);

window.onload = () => {
  startApp();
};
