    import { data } from "../data.js";
    // import { clearTable } from "./table.js";
    import createData from "./table.js";

    const tableBody = document.querySelector(".table-body");

    export default function filter(column, clearTable, createData, currentPage, itemsPerPage, tableBody) {
    const filterSelect = document.createElement("select");
    filterSelect.classList.add("filter-select");

    if (column.textContent === "Price") {
      const filterSelect = document.createElement("select");
      filterSelect.classList.add("filter-select");

      const filterOptions = ["", "0-9", "9-0"];
      filterSelect.innerHTML = filterOptions
        .map((option) => `<option value="${option}">${option}</option>`)
        .join("");

      filterSelect.addEventListener("change", () => {
        const selectedFilter = filterSelect.value;

        let sorted = [...data];
        
        
        switch (selectedFilter) {
          case "":
            //I reload the page to reset the table
            location.reload();
            clearTable();
            createData(data);
            break;
          case "0-9":
            sorted = data.sort((a, b) => a.price - b.price);
            clearTable();
            createData(sorted, currentPage, itemsPerPage, tableBody);
            break;
          case "9-0":
            sorted = data.sort((a, b) => b.price - a.price);
            clearTable();
            createData(sorted, currentPage, itemsPerPage, tableBody);
            break;
            default:
              break;
            }
          });
          
          column.appendChild(filterSelect);
        } else if (column.textContent === "Count") {
          const filterSelect = document.createElement("select");
      filterSelect.classList.add("filter-select");
      
      const filterOptions = ["", "0-9", "9-0"];
      filterSelect.innerHTML = filterOptions
        .map((option) => `<option value="${option}">${option}</option>`)
        .join("");
        
        filterSelect.addEventListener("change", () => {
          const selectedFilter = filterSelect.value;
          
          let sorted = [...data];
          
          switch (selectedFilter) {
            case "":
              location.reload();
              clearTable();
              createData(data);
              break;
              case "0-9":
                sorted = data.sort((a, b) => a.count - b.count);
                clearTable();
                createData(sorted, currentPage, itemsPerPage, tableBody);
            break;
          case "9-0":
            sorted = data.sort((a, b) => b.count - a.count);
            clearTable();
            createData(sorted, currentPage, itemsPerPage, tableBody);
            break;
            default:
              break;
            }
          });

          column.appendChild(filterSelect);
        } else if (column.textContent === "Profit") {
          const filterSelect = document.createElement("select");
          filterSelect.classList.add("filter-select");
          
          const filterOptions = ["", "0-9", "9-0"];
      filterSelect.innerHTML = filterOptions
        .map((option) => `<option value="${option}">${option}</option>`)
        .join("");

      filterSelect.addEventListener("change", () => {
        const selectedFilter = filterSelect.value;

        let sorted = [...data];

        switch (selectedFilter) {
          case "":
            location.reload();
            clearTable();
            createData(data);
            break;
            case "0-9":
            sorted = data.sort((a, b) => a.profit - b.profit);
            clearTable();
            createData(sorted, currentPage, itemsPerPage, tableBody);
            break;
            case "9-0":
              sorted = data.sort((a, b) => b.profit - a.profit);
              clearTable();
              createData(sorted, currentPage, itemsPerPage, tableBody);
              break;
              default:
                break;
              }
            });

            column.appendChild(filterSelect);
    } else if (column.textContent === "Date") {
      const filterSelect = document.createElement("select");
      filterSelect.classList.add("filter-select");
      
      const filterOptions = ["", "0-9", "9-0"];
      filterSelect.innerHTML = filterOptions
      .map((option) => `<option value="${option}">${option}</option>`)
        .join("");

        filterSelect.addEventListener("change", () => {
          const selectedFilter = filterSelect.value;
          let sorted = [...data];
          switch (selectedFilter) {
            case "":
              location.reload();
              clearTable();
              createData(data);
              break;
              case "0-9":
                sorted = data.sort((a, b) => a.date - b.date); //TO FIX THIS SORTING BY DATE
                clearTable();
                createData(sorted, currentPage, itemsPerPage, tableBody);
                break;
                case "9-0":
                  sorted = data.sort((a, b) => b.date - a.date); //TO FIX THIS SORTING BY DATE
                  clearTable();
                  createData(sorted, currentPage, itemsPerPage, tableBody);
                  break;
                  default:
                    break;
        }
      });

      column.appendChild(filterSelect);
    } else if (column.textContent === "Dealer") {
      const filterSelect = document.createElement("select");
      filterSelect.classList.add("filter-select");
      
      const filterOptions = ["", "A-Z", "Z-A"];
      filterSelect.innerHTML = filterOptions
      .map((option) => `<option value="${option}">${option}</option>`)
      .join("");
      
      filterSelect.addEventListener("change", () => {
        const selectedFilter = filterSelect.value;

        let sorted = [...data];
        
        switch (selectedFilter) {
          case "":
            location.reload();
            clearTable();
            createData(data);
            break;
          case "A-Z":
            sorted = data.sort((a, b) => a.dealer.localeCompare(b.dealer));
            clearTable();
            createData(sorted, currentPage, itemsPerPage, tableBody);
            break;
            case "Z-A":
            sorted = data.sort((a, b) => b.dealer.localeCompare(a.dealer));
            clearTable();
            createData(sorted, currentPage, itemsPerPage, tableBody);
            break;
            default:
              break;
            }
      });
      
      column.appendChild(filterSelect);
    } else if (column.textContent === "Product") {
      const filterSelect = document.createElement("select");
      filterSelect.classList.add("filter-select");
      
      const filterOptions = ["", "A-Z", "Z-A"];
      filterSelect.innerHTML = filterOptions
      .map((option) => `<option value="${option}">${option}</option>`)
      .join("");
      
      filterSelect.addEventListener("change", () => {
        const selectedFilter = filterSelect.value;
        
        let sorted = [...data];
        
        switch (selectedFilter) {
          case "":
            location.reload();
            clearTable();
            createData(data);
            break;
            case "A-Z":
              sorted = data.sort((a, b) => a.product.localeCompare(b.product));
              clearTable();
              createData(sorted, currentPage, itemsPerPage, tableBody);
              break;
              case "Z-A":
                sorted = data.sort((a, b) => b.product.localeCompare(a.product));
            clearTable();
            createData(sorted, currentPage, itemsPerPage, tableBody);
            break;
            default:
            break;
        }
      });

      column.appendChild(filterSelect);
    }};




    