import { data } from "../data.js";
import isAuth from "../utils/isAuth.js";

document.addEventListener("DOMContentLoaded", function () {

  isAuth();
  
  let monthlyCounts = {};

  data.forEach((item) => {
    const [day, month, year] = item.date.split("-");
    const key = `${month}-${year}`;

    if (!monthlyCounts[key]) {
      monthlyCounts[key] = {};
    }

    if (!monthlyCounts[key][item.product]) {
      monthlyCounts[key][item.product] = 0;
    }

    monthlyCounts[key][item.product] += item.count;
  });

  let dataforTable = Object.entries(monthlyCounts).map(([date, products]) => ({
    date,
    products,
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

  const currentDate = new Date();
  const lastMonth = getLastMonth(currentDate);

  const monthsForShow = Object.keys(monthlyCounts);
  const monthsSelect = document.createElement("select");
  monthsSelect.classList.add("months-select");

  monthsSelect.innerHTML = monthsForShow
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("");

  // Set the default selected value to the last month
  monthsSelect.value = lastMonth;

  monthsSelect.addEventListener("change", function () {
    clearTable();
    const selectedMonth = monthsSelect.value;
    const selectedData = dataforTable.find(
      (entry) => entry.date === selectedMonth
    );

    if (selectedData) {
      createData(selectedData.products, tableBody);
    }
  });

  const monthsLabel = document.createElement("span");
  monthsLabel.textContent = "Select a month: ";
  monthsLabel.classList.add("months-label");
  container.appendChild(monthsLabel);

  container.appendChild(monthsSelect);

  window.onload = function () {
    clearTable();
    const defaultSelectedData = dataforTable.find(
      (entry) => entry.date === lastMonth
    );

    if (defaultSelectedData) {
      createData(defaultSelectedData.products, tableBody);
    }
  };

  function clearTable() {
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
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

  function getLastMonth(date) {
    const lastMonthDate = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
    return `${lastMonthDate.getMonth() + 1}-${lastMonthDate.getFullYear()}`;
  }
});
