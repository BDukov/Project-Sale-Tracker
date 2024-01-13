import { data } from "../data.js";
import isAuth from "../utils/isAuth.js";

document.addEventListener("DOMContentLoaded", function () {
  isAuth();

  let salesByWeek = {};

  data.forEach((item) => {
    const [day, month, year] = item.date.split("-");
    const weekNumber = getWeekNumber(new Date(`${year}-${month}-${day}`));

    if (!salesByWeek[year]) {
      salesByWeek[year] = {};
    }

    if (!salesByWeek[year][weekNumber]) {
      salesByWeek[year][weekNumber] = {};
    }

    if (!salesByWeek[year][weekNumber][item.dealer]) {
      salesByWeek[year][weekNumber][item.dealer] = {
        salesCount: 0,
      };
    }

    salesByWeek[year][weekNumber][item.dealer].salesCount += 1;
  });

  let dataforTable = Object.entries(salesByWeek).map(([year, weeks]) => ({
    year,
    weeks,
  }));

  console.log(dataforTable);

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

  headerCell0.textContent = "Saler";
  headerCell1.textContent = "Sales Count";

  headerRow.appendChild(headerCell0);
  headerRow.appendChild(headerCell1);

  tableHead.appendChild(headerRow);

  const tableBody = document.createElement("tbody");
  table.appendChild(tableBody);

  const yearsForShow = Object.keys(salesByWeek);
  const yearSelect = document.createElement("select");
  yearSelect.classList.add("years-select");

  yearSelect.innerHTML = yearsForShow
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("");

  const weekSelect = document.createElement("select");
  weekSelect.classList.add("weeks-select");

  yearSelect.addEventListener("change", updateWeeks);

  function updateWeeks() {
    const selectedYear = yearSelect.value;
    const weeksForSelectedYear = Object.keys(
      dataforTable.find((entry) => entry.year === selectedYear).weeks
    );

    weekSelect.innerHTML = weeksForSelectedYear
      .map((option) => `<option value="${option}">${option}</option>`)
      .join("");

    clearTable();
    const selectedWeek = parseInt(weekSelect.value);
    const selectedData = dataforTable.find(
      (entry) => entry.year === selectedYear && entry.weeks[selectedWeek]
    );

    if (selectedData) {
      createData(selectedData.weeks[selectedWeek], tableBody);
    }
  }

  weekSelect.addEventListener("change", function () {
    clearTable();
    const selectedYear = yearSelect.value;
    const selectedWeek = parseInt(weekSelect.value);
    const selectedData = dataforTable.find(
      (entry) => entry.year === selectedYear && entry.weeks[selectedWeek]
    );

    if (selectedData) {
      createData(selectedData.weeks[selectedWeek], tableBody);
    }
  });

  function clearTable() {
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
  }

  const filter = document.createElement("div");
  filter.classList.add("average-sales-filter");

  container.appendChild(filter);

  const yearLabel = document.createElement("span");
  yearLabel.textContent = "Select a year: ";
  yearLabel.classList.add("years-label");
  filter.appendChild(yearLabel);
  filter.appendChild(yearSelect);
  

  const weekLabel = document.createElement("span");
  weekLabel.textContent = "Select a week: ";
  weekLabel.classList.add("weeks-label");
  filter.appendChild(weekLabel);
  filter.appendChild(weekSelect);


  window.onload = function () {
    updateWeeks();
  };
});

function createData(weekData, tableBody) {
  Object.entries(weekData).forEach(([dealer, { salesCount }]) => {
    let row = document.createElement("tr");
    let cell0 = document.createElement("td");
    let cell1 = document.createElement("td");

    cell0.textContent = dealer;
    cell1.textContent = salesCount;

    row.appendChild(cell0);
    row.appendChild(cell1);

    tableBody.appendChild(row);
  });
}

function getWeekNumber(date) {
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const day = Math.ceil((date - oneJan) / 86400000);
  const week = Math.ceil(day / 7);
  return week;
}
