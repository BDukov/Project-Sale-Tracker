import { data } from "../data.js";
import isAuth from "../utils/isAuth.js";

document.addEventListener("DOMContentLoaded", function () {
  isAuth();

  let salesByWeek = {};

  data.forEach((item) => {
    const [day, month, year] = item.date.split("-");

    let sales = 0;
    if (!salesByWeek[year]) {
      salesByWeek[year] = {};
    }

    if (!salesByWeek[year][sales]) {
      salesByWeek[year][sales] = 1;
    }

    salesByWeek[year][sales] += 1;
  });

  let dataforTable = Object.entries(salesByWeek).map(([year, sales]) => ({
    year,
    sales,
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

  headerCell0.textContent = "Year";
  headerCell1.textContent = "Average Sales Per Week";

  headerRow.appendChild(headerCell0);
  headerRow.appendChild(headerCell1);

  tableHead.appendChild(headerRow);

  const tableBody = document.createElement("tbody");
  table.appendChild(tableBody);

  createData(dataforTable, tableBody);
});

function createData(weekData, tableBody) {
  Object.entries(weekData).forEach(([dealer, salesCount]) => {
    let row = document.createElement("tr");
    let cell0 = document.createElement("td");
    let cell1 = document.createElement("td");

    cell0.textContent = salesCount.year;
    cell1.textContent = (salesCount.sales[0] / 52).toFixed(2);

    row.appendChild(cell0);
    row.appendChild(cell1);

    tableBody.appendChild(row);
  });
}
