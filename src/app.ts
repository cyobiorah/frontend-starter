const startApp = async () => {
  let page = 1;
  let info;
  let results;
  let url = `https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=`;

  //   const data = await {
  //     results: [
  //       {
  //         "1": [
  //           {
  //             id: "c4ca4238a0b923820dcc509a6f75849b",
  //             row: 1,
  //             age: 65,
  //             gender: "male",
  //           },
  //           {
  //             id: "c81e728d9d4c2f636f067f89cc14862c",
  //             row: 2,
  //             age: 18,
  //             gender: "male",
  //           },
  //           {
  //             id: "eccbc87e4b5ce2fe28308fd9f2a7baf3",
  //             row: 3,
  //             age: 52,
  //             gender: "male",
  //           },
  //           {
  //             id: "a87ff679a2f3e71d9181a67b7542122c",
  //             row: 4,
  //             age: 61,
  //             gender: "male",
  //           },
  //           {
  //             id: "e4da3b7fbbce2345d7772b0674a318d5",
  //             row: 5,
  //             age: 40,
  //             gender: "female",
  //           },
  //         ],
  //         "2": [
  //           {
  //             id: "1679091c5a880faf6fb5e6087eb1b2dc",
  //             row: 6,
  //             age: 33,
  //             gender: "female",
  //           },
  //           {
  //             id: "8f14e45fceea167a5a36dedd4bea2543",
  //             row: 7,
  //             age: 35,
  //             gender: "female",
  //           },
  //           {
  //             id: "c9f0f895fb98ab9159f51fd0297e236d",
  //             row: 8,
  //             age: 32,
  //             gender: "male",
  //           },
  //           {
  //             id: "45c48cce2e2d7fbdea1afc51c7c6ad26",
  //             row: 9,
  //             age: 23,
  //             gender: "male",
  //           },
  //           {
  //             id: "d3d9446802a44259755d38e6d163e820",
  //             row: 10,
  //             age: 34,
  //             gender: "female",
  //           },
  //         ],
  //         paging: {
  //           next: "https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=3",
  //         },
  //       },
  //     ],
  //     info: {
  //       seed: "085801539dbc810e",
  //       results: "1",
  //       page: "1",
  //       version: "0.1",
  //       time: { instruct: 7, generate: 6 },
  //       user: {
  //         username: "chalu",
  //         tier: "Premium [3]",
  //         results: "673 / unlimited",
  //         remaining: "unlimited",
  //       },
  //     },
  //   };

  let table = document.getElementById("table-body") as HTMLTableElement;
  const previousBtn = document.getElementById("previous") as HTMLButtonElement;
  const nextBtn = document.getElementById("next") as HTMLButtonElement;

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
      let row = table.insertRow();
      row.id = res.id;
      addCell(row, res.row);
      addCell(row, res.gender);
      addCell(row, res.age);
    });
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
