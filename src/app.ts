const startApp = () => {
  let page = 1;
  let info;
  let results;
  let url = `https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=`;

  //   get HTML elements
  const table = document.querySelector("tbody[data-sink") as HTMLTableElement;
  const previousBtn = document.querySelector(
    "button[data-prevbtn]"
  ) as HTMLButtonElement;
  const nextBtn = document.querySelector(
    "button[data-nextbtn]"
  ) as HTMLButtonElement;
  const label = document.querySelector("label[data-pageview]") as HTMLElement;

  //   set label text to display initial page
  label.innerText = `Showing Page ${page}`;

  //   add call function to btn event handler
  nextBtn.addEventListener("click", nextClicked);
  previousBtn.addEventListener("click", previousClicked);

  //   populate table rows with data using current page
  function populateTable(data) {
    data[page].forEach((res, index) => {
      table.rows[index].setAttribute("data-entryid", res.id);
      table.rows[index].cells[0].innerText = res.row;
      table.rows[index].cells[1].innerText = res.gender;
      table.rows[index].cells[2].innerText = res.age;
    });
    // set new label text to display current page
    label.innerText = `Showing Page ${page}`;
    label.setAttribute("data-pageview", `Showing Page ${page}`);
  }

  //   next btn click function
  function nextClicked() {
    page = page + 1;
    if (page % 2 === 0) {
      populateTable(results);
    } else getData();
  }

  //   previous btn click function
  function previousClicked() {
    page = page - 1;
    if (page % 2 === 0) {
      populateTable(results);
    } else getData();
  }

  //   check page to disable previous btn
  function checkPrev() {
    if (page === 1) {
      previousBtn.setAttribute("disabled", "disabled");
    } else previousBtn.removeAttribute("disabled");
  }

  //   api call function
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

  getData();
};

document.addEventListener("DOMContentLoaded", startApp);
