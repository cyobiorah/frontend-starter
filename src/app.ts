const startApp = async () => {
  let page = 1;
  let info;
  let results;
  let url = `https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=`;

  let table = document.querySelector("tbody[data-sink") as HTMLTableElement;
  const previousBtn = document.querySelector(
    "button[data-prevbtn]"
  ) as HTMLButtonElement;
  const nextBtn = document.querySelector(
    "button[data-nextbtn]"
  ) as HTMLButtonElement;
  const label = document.querySelector("label[data-pageview]") as HTMLElement;

  nextBtn.addEventListener("click", nextClicked);
  previousBtn.addEventListener("click", previousClicked);

  getData();

  function populateTable(data) {
    function addCell(tr, text) {
      var td = tr.insertCell();
      td.textContent = text;
      return td;
    }

    table.innerHTML = "";

    data[page]?.forEach((res) => {
      //   console.log(res);
      let row = table.insertRow();
      row.id = res.id;
      row.setAttribute("data-entryid", res.id);
      addCell(row, res.row);
      addCell(row, res.gender);
      addCell(row, res.age);
    });
    label.innerHTML = `Showing Page ${page}`;
  }

  function nextClicked() {
    page = page + 1;
    getData();
  }

  function previousClicked() {
    page = page - 1;
    getData();
  }

  function checkPrev() {
    if (page === 1) {
      previousBtn.setAttribute("disabled", "disabled");
    } else previousBtn.removeAttribute("disabled");
  }

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
};

document.addEventListener("DOMContentLoaded", startApp);
