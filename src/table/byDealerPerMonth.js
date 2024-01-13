import { data } from "../data.js";
import isAuth from "../utils/isAuth.js";

document.addEventListener("DOMContentLoaded", function () {

  isAuth();

  let salesByMonth = {};

  data.forEach((item) => {
    const [day, month, year] = item.date.split("-");
    const key = `${month}-${year}`;

    if (!salesByMonth[key]) {
      salesByMonth[key] = {};
    }

    if (!salesByMonth[key][item.dealer]) {
      salesByMonth[key][item.dealer] = 0;
    }

    salesByMonth[key][item.dealer] += item.count;
  });

  let dataforTable = Object.entries(salesByMonth).map(([month, dealerData]) => ({
    month,
    dealerData: dealerData,
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

  headerCell0.textContent = "Dealer";
  headerCell1.textContent = "Total Sales";

  headerRow.appendChild(headerCell0);
  headerRow.appendChild(headerCell1);

  tableHead.appendChild(headerRow);

  const tableBody = document.createElement("tbody");
  table.appendChild(tableBody);

  const monthsForShow = Object.keys(salesByMonth);
  const monthSelect = document.createElement("select");
  monthSelect.classList.add("months-select");

  monthSelect.innerHTML = monthsForShow
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("");

  monthSelect.addEventListener("change", function () {
    clearTable();
    const selectedMonth = monthSelect.value;
    const selectedData = dataforTable.find(
      (entry) => entry.month === selectedMonth
    );

    if (selectedData) {
      createData(selectedData.dealerData, tableBody);
    }
  });

  function clearTable() {
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
  }
  
  const monthLabel = document.createElement("span");
  monthLabel.textContent = "Select a month: ";
  monthLabel.classList.add("months-label");
  container.appendChild(monthLabel);
  container.appendChild(monthSelect);

  window.onload = function () {
    clearTable();
    createData(dataforTable[0].dealerData, tableBody);
  }; 
});

function createData(dealerData, tableBody) {
  Object.entries(dealerData).forEach(([dealer, totalSales]) => {
    let row = document.createElement("tr");
    let cell0 = document.createElement("td");
    let cell1 = document.createElement("td");

    cell0.textContent = dealer;
    cell1.textContent = totalSales;

    row.appendChild(cell0);
    row.appendChild(cell1);

    tableBody.appendChild(row);
  });
}
