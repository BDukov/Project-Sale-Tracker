import { data } from "../data.js";
import isAuth from "../utils/isAuth.js";

document.addEventListener("DOMContentLoaded", function () {

  isAuth();

  let dealers = {};

  data.forEach((item) => {
    const [day, month, year] = item.date.split("-");
    const key = `${month}-${year}`;
    const dealer = item.dealer;

    if (!dealers[dealer]) {
      dealers[dealer] = {};
    }

    if (!dealers[dealer][key]) {
      dealers[dealer][key] = {};
    }

    if (!dealers[dealer][key][item.product]) {
      dealers[dealer][key][item.product] = 0;
    }

    dealers[dealer][key][item.product] += item.count;
  });

  let dataforTable = Object.entries(dealers).map(([dealer, monthlyData]) => ({
    dealer,
    monthlyData: Object.entries(monthlyData).map(([date, products]) => ({
      date,
      products,
    })),
  }));

  const container = document.getElementById("table-container");
  const table = document.createElement("table");
  table.classList.add("custom-table");
  table.classList.add("sortable");

  container.appendChild(table);

  const tableHead = document.createElement("thead");
  table.appendChild(tableHead);

  const headerRow = document.createElement("tr");
  headerRow.classList.add("custom-table-header");

  const headerCell0 = document.createElement("th");
  const headerCell1 = document.createElement("th");

  headerCell0.textContent = "Month";
  headerCell1.textContent = "Total Sales";

  headerRow.appendChild(headerCell0);
  headerRow.appendChild(headerCell1);

  tableHead.appendChild(headerRow);

  const tableBody = document.createElement("tbody");
  table.appendChild(tableBody);

  const dealersForShow = Object.keys(dealers);
  const dealerSelect = document.createElement("select");
  dealerSelect.classList.add("dealer-select");

  dealerSelect.innerHTML = dealersForShow
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("");

  dealerSelect.addEventListener("change", function () {
    clearTable();
    const selectedDealer = dealerSelect.value;
    const selectedData = dataforTable.find(
      (entry) => entry.dealer === selectedDealer
    );

    if (selectedData) {
      createData(selectedData.monthlyData, tableBody);
    }
  });

  function clearTable() {
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
  }
  const dealerLabel = document.createElement("span");
  dealerLabel.textContent = "Select Dealer: ";
  dealerLabel.classList.add("dealer-label");
  container.appendChild(dealerLabel);
  container.appendChild(dealerSelect);
  

  window.onload = function () {
    clearTable();
    createData(dataforTable[0].monthlyData, tableBody);
  }; 
});


function createData(monthlyData, tableBody) {
  monthlyData.forEach(({ date, products }) => {
    let row = document.createElement("tr");
    let cell0 = document.createElement("td");
    let cell1 = document.createElement("td");

    cell0.textContent = date;
    cell1.textContent = calculateTotalSales(products);

    row.appendChild(cell0);
    row.appendChild(cell1);

    tableBody.appendChild(row);
  });
}

function calculateTotalSales(products) {
  return Object.values(products).reduce((total, count) => total + count, 0);
}