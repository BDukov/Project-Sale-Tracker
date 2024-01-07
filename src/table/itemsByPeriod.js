import { data } from "../data.js";

document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("table-container");
  let table = document.createElement("table");
  table.classList.add("custom-table");
  table.classList.add("sortable");

  const tableHead = document.createElement("thead");
  table.appendChild(tableHead);

  const headerRow = document.createElement("tr");
  headerRow.classList.add("custom-table-header");

  const headerCell0 = document.createElement("th");
  const headerCell1 = document.createElement("th");
  const headerCell2 = document.createElement("th");

  headerCell0.textContent = "No.";
  headerCell1.textContent = "Product";
  headerCell2.textContent = "Total Amount";

  headerRow.appendChild(headerCell0);
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);

  tableHead.appendChild(headerRow);

  const tableBody = document.createElement("tbody");
  table.appendChild(tableBody);
  table.style.display = "none";

  container.appendChild(table);

  const dateFromTo = document.createElement("div");
    dateFromTo.classList.add("date-from-to");
    container.appendChild(dateFromTo);

  const dateFromInput = document.createElement("input");
  dateFromInput.setAttribute("type", "date");
  dateFromInput.classList.add("date-from-input");

  const dateToInput = document.createElement("input");
  dateToInput.setAttribute("type", "date");
  dateToInput.classList.add("date-to-input");

  const dateSubmitButton = document.createElement("button");
    dateSubmitButton.classList.add("date-submit-button");
  dateSubmitButton.textContent = "Submit";

  dateFromTo.appendChild(dateFromInput);
  dateFromTo.appendChild(dateToInput);
  dateFromTo.appendChild(dateSubmitButton);

  dateSubmitButton.addEventListener("click", function () {
    let dateFrom = dateFromInput.value;
    let [yearFrom, monthFrom, dayFrom] = dateFrom.split("-");
    let reversedDateFrom = `${dayFrom}-${monthFrom}-${yearFrom}`;
    let dateTo = dateToInput.value;
    let [yearTo, monthTo, dayTo] = dateTo.split("-");
    let reversedDateTo = `${dayTo}-${monthTo}-${yearTo}`;

    if (
      reversedDateFrom === "undefined-undefined-" ||
      reversedDateTo === "undefined-undefined-"
    ) {
      alert("Please, choose dates");
      return;
    }

    const productsData = search(reversedDateFrom, reversedDateTo);

    function clearTable() {
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
      }
    }

    clearTable();
    createData(productsData, tableBody);

    table.style.display = "table";
  });
});

function search(from, to) {
  const products = {};
  data.forEach((item) => {
    const currentDate = new Date(item.date);
    const fromDate = new Date(from);
    const toDate = new Date(to);
    if (currentDate >= fromDate && currentDate <= toDate) {
      if (!products[item.product]) {
        products[item.product] = 0;
      }
      products[item.product] += item.count;
    }
  });
  return products;
}

function createData(products, tableBody) {
  const sortedProducts = Object.entries(products)
    .sort(([, countA], [, countB]) => countB - countA)
    .reduce((sorted, [product, count], index) => {
      sorted[product] = count;
      return sorted;
    }, {});

  Object.entries(sortedProducts).forEach(([product, count], index) => {
    let row = document.createElement("tr");
    let cell0 = document.createElement("td");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");

    if (cell0) cell0.textContent = index + 1;
    cell1.textContent = product;
    cell2.textContent = count;

    row.appendChild(cell0);
    row.appendChild(cell1);
    row.appendChild(cell2);

    tableBody.appendChild(row);
  });
}
