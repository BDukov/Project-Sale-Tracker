import filter from "../table/filter.js";
import { data } from "../data.js";
import addNewSaleModal from "../table/addNewSaleModal.js";

export function createTable() {
  let container = document.getElementById("table-container");

  let addNew = document.createElement("button");
  addNew.textContent = "Add New Order";
  addNew.classList.add("add-new-btn");
  container.appendChild(addNew);

  addNew.addEventListener("click", addNewOrder);

  let table = document.createElement("table");
  table.classList.add("custom-table");
  table.classList.add("sortable");

  container.appendChild(table);

  //Create Table HEAD

  const tableHead = document.createElement("thead");
  table.appendChild(tableHead);

  const headerRow = document.createElement("tr");
  headerRow.classList.add("custom-table-header");

  const headerCell0 = document.createElement("th");
  const headerCell1 = document.createElement("th");
  const headerCell2 = document.createElement("th");
  const headerCell3 = document.createElement("th");
  const headerCell4 = document.createElement("th");
  const headerCell5 = document.createElement("th");
  const headerCell6 = document.createElement("th");
  const headerCell7 = document.createElement("th");

  headerCell0.textContent = "ID";
  headerCell1.textContent = "Product";
  headerCell2.textContent = "Price";
  headerCell3.textContent = "Count";
  headerCell4.textContent = "Amount";
  headerCell5.textContent = "Dealer";
  headerCell6.textContent = "Date";
  headerCell7.textContent = "Actions";

  const columns = [
    headerCell0,
    headerCell1,
    headerCell2,
    headerCell3,
    headerCell4,
    headerCell5,
    headerCell6,
  ];

  headerRow.appendChild(headerCell0);
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);
  headerRow.appendChild(headerCell4);
  headerRow.appendChild(headerCell5);
  headerRow.appendChild(headerCell6);
  headerRow.appendChild(headerCell7);

  tableHead.appendChild(headerRow);

  //Create TABLE BODY

  const tableBody = document.createElement("tbody");
  table.appendChild(tableBody);

  // Add SEARCH input field
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Search...");
  searchInput.classList.add("search-input");
  // container.appendChild(searchInput);

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = data.filter((item) =>
      Object.values(item).some((value) => {
        const resultSearchTerm = value
          .toString()
          .toLowerCase()
          .includes(searchTerm);
        return resultSearchTerm;
      })
    );
    clearTable();
    createData(filteredData, currentPage, itemsPerPage, tableBody);
  });

  //PAGINATION

  let itemsPerPage = 5;
  let currentPage = 1;

  const resultsPerPageSelect = document.createElement("select");
  resultsPerPageSelect.classList.add("results-per-page-select");

  const resultsPerPageOptions = [5, 10, 20];
  resultsPerPageSelect.innerHTML = resultsPerPageOptions
    .map((option) => `<option value="${option}">${option} per page</option>`)
    .join("");

  resultsPerPageSelect.addEventListener("change", function () {
    itemsPerPage = parseInt(resultsPerPageSelect.value, 10);
    currentPage = 1; // Reset current page when changing the number of results per page
    clearTable();
    createData(data, currentPage, itemsPerPage, tableBody);
    updateActivePageButton();
    paginationButtons(data);
  });

  container.appendChild(resultsPerPageSelect);

  //Създавам редове и популирам данните
  createData(data, currentPage, itemsPerPage, tableBody);

  //PAGINATION BUTTONS

  //previous button
  const previousBtn = document.createElement("button");
  previousBtn.textContent = "Prev";
  previousBtn.classList.add("pagination-btn");

  previousBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      clearTable();
      createData(data);
      updateActivePageButton();
    }
  });

  //next button

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.classList.add("pagination-btn");

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      clearTable();
      createData(data);
      updateActivePageButton();
    }
  });

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageButtonsContainer = document.createElement("div");
  pageButtonsContainer.classList.add("pagination-buttons-container");

  paginationButtons(data);
  function paginationButtons(param) {
    const totalPages = Math.ceil(param.length / itemsPerPage);
    pageButtonsContainer.innerHTML = "";

    if (param.length > itemsPerPage) {
      pageButtonsContainer.appendChild(previousBtn);
    }

    //When Load table for the first time, hide previous button
    if ((currentPage = 1)) {
      previousBtn.style.display = "none";
    } else {
      previousBtn.style.display = "block";
    }

    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.textContent = i;
      pageBtn.classList.add("pagination-btn");

      if (i === 1) {
        pageBtn.classList.add("clicked");
      }

      pageBtn.addEventListener("click", () => {
        currentPage = i;
        clearTable();
        createData(param, currentPage, itemsPerPage, tableBody);
        updateActivePageButton();

        //When click on page button, hide previous button if current page is 1
        if (currentPage == 1) {
          previousBtn.style.display = "none";
        } else {
          previousBtn.style.display = "block";
        }

        //When click on page button, hide next button if current page is last
        if (currentPage == totalPages) {
          nextBtn.style.display = "none";
        } else {
          nextBtn.style.display = "block";
        }
      });
      pageButtonsContainer.appendChild(pageBtn);
    }

    if (param.length > itemsPerPage) {
      pageButtonsContainer.appendChild(nextBtn);
    }

    container.appendChild(pageButtonsContainer);

    const tableContainer = document.getElementById("table-container");

    tableContainer.appendChild(searchInput);
  }

  function updateActivePageButton() {
    const pageButtons = document.querySelectorAll(".pagination-btn");
    pageButtons.forEach((button, index) => {
      button.classList.remove("clicked");
    });

    const currentPageButton = document.querySelector(
      `.pagination-btn:nth-child(${currentPage + 1})`
    );
    if (currentPageButton) {
      currentPageButton.classList.add("clicked");
    }
  }

  //Създавам модално прозорче за добавяне на нова продажба
  addNewSaleModal(
    container,
    clearTable,
    createData,
    currentPage,
    itemsPerPage,
    tableBody
  );

  const topComands = document.createElement("div");
  topComands.classList.add("top-comands");
  topComands.appendChild(resultsPerPageSelect);
  topComands.appendChild(searchInput);
  container.appendChild(topComands);

  //Добавям събитие на всеки един от филтър бутоните
  columns.forEach((column) => {
    filter(
      column,
      clearTable,
      createData,
      currentPage,
      itemsPerPage,
      tableBody
    );
  });

  function clearTable() {
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
  }
}

//Функция за показване/скриване на таблицата
export function toggleTable() {
  const tableContainer = document.getElementById("table-container");
  if (
    tableContainer.style.display === "none" ||
    tableContainer.style.display === ""
  ) {
    tableContainer.style.display = "flex";
  } else {
    tableContainer.style.display = "none";
  }
}

//Функция за добавяне на нов ред
export function addNewOrder() {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";
}

//Функция за създаване на редове и популиране на данните
export default function createData(
  param,
  currentPage,
  itemsPerPage,
  tableBody
) {
  let container = document.getElementById("table-container");
  //Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = param.slice(startIndex, endIndex);

  currentPageData.forEach((item) => {
    let row = document.createElement("tr");
    row.classList.add("custom-table-row");

    const cell0 = document.createElement("td");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const cell5 = document.createElement("td");
    const cell6 = document.createElement("td");
    const cell7row = document.createElement("td");
    cell7row.classList.add("action-btns-row");

    const cell7 = document.createElement("div");
    cell7row.appendChild(cell7);
    cell7.classList.add("action-btns");
    const buttonDelete = document.createElement("button");
    const buttonEdit = document.createElement("button");

    buttonDelete.textContent = "Delete";
    buttonDelete.classList.add("delete-btn");
    buttonEdit.textContent = "Edit";
    buttonEdit.classList.add("edit-btn");

    cell7.appendChild(buttonEdit);
    cell7.appendChild(buttonDelete);

    //EDIT ROW FUNCTION
    buttonEdit.addEventListener("click", function (event) {
      const parentElement = event.target.parentElement;
      const row = parentElement.parentElement;

      const index = data.findIndex(
        (item) => String(item.orderId) === row.children[0].textContent
      );

      const rowData = {
        orderId: row.children[0].textContent,
        product: row.children[1].textContent,
        price: row.children[2].textContent,
        count: row.children[3].textContent,
        amount: row.children[4].textContent,
        dealer: row.children[5].textContent,
        date: row.children[6].textContent,
      };

      let orderId = rowData.orderId;
      let product = rowData.product;
      let price = rowData.price;
      let count = rowData.count;
      let amount = rowData.amount;
      let dealer = rowData.dealer;
      let date = rowData.date;

      const editModal = document.createElement("div");
      editModal.classList.add("edit-modal");
      editModal.style.display = "flex";

      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
      const h2 = document.createElement("h2");
      h2.classList.add("modal-title");
      h2.textContent = "Edit Order";
      const form = document.createElement("form");
      form.classList.add("modal-form");
      const label = document.createElement("label");
      label.textContent = "Product";
      const input = document.createElement("input");
      input.value = product;
      input.classList.add("modal-input");
      const label2 = document.createElement("label");
      label2.textContent = "Price";
      const input2 = document.createElement("input");
      input2.value = price;
      input2.classList.add("modal-input");
      const label3 = document.createElement("label");
      label3.textContent = "Count";
      const input3 = document.createElement("input");
      input3.value = count;
      input3.classList.add("modal-input");
      const label4 = document.createElement("label");
      label4.textContent = "Amount";
      const input4 = document.createElement("input");
      input4.value = amount;
      input4.classList.add("modal-input");
      const label5 = document.createElement("label");
      label5.textContent = "Dealer";
      const input5 = document.createElement("input");
      input5.value = dealer;
      input5.classList.add("modal-input");
      const label6 = document.createElement("label");
      label6.textContent = "Date";
      const input6 = document.createElement("input");
      input6.value = date;
      input6.classList.add("modal-input");
      const button = document.createElement("button");
      button.classList.add("modal-btn");
      button.textContent = "Save";
      const button2 = document.createElement("button");
      button2.classList.add("modal-btn");
      button2.textContent = "Close";

      button.addEventListener("click", function (e) {
        e.preventDefault();
        if (
          input.value !== "" ||
          input2.value !== "" ||
          input3.value !== "" ||
          input4.value !== "" ||
          input5.value !== "" ||
          input6.value !== ""
        ) {
          const product = input.value;
          const price = input2.value;
          const count = input3.value;
          const amount = input4.value;
          const dealer = input5.value;
          const date = input6.value;

          data.splice(index, 1, {
            orderId,
            product,
            price,
            count,
            amount,
            dealer,
            date,
          });

          clearTable();
          createData(data, currentPage, itemsPerPage, tableBody);
          editModal.style.display = "none";
        } else {
          alert("Please fill all fields");
        }
      });

      button2.addEventListener("click", function (e) {
        e.preventDefault();
        editModal.style.display = "none";
      });

      form.appendChild(label);
      form.appendChild(input);
      form.appendChild(label2);
      form.appendChild(input2);
      form.appendChild(label3);
      form.appendChild(input3);
      form.appendChild(label4);
      form.appendChild(input4);
      form.appendChild(label5);
      form.appendChild(input5);
      form.appendChild(label6);
      form.appendChild(input6);
      form.appendChild(button);
      form.appendChild(button2);
      modalContent.appendChild(h2);
      modalContent.appendChild(form);
      editModal.appendChild(modalContent);
      container.appendChild(editModal);
    });

    //DELETE ROW FUNCTION
    buttonDelete.addEventListener("click", function (event) {
      const parentElement = event.target.parentElement;
      const row = parentElement.parentElement;

      row.remove();
    });

    cell0.textContent = item.orderId;
    cell1.textContent = item.product;
    cell2.textContent = item.price;
    cell3.textContent = item.count;
    cell4.textContent = item.amount;
    cell5.textContent = item.dealer;
    cell6.textContent = item.date;

    row.appendChild(cell0);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    row.appendChild(cell7);

    tableBody.appendChild(row);
  });

  function clearTable() {
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
  }
  // DATA CREATION END
}
