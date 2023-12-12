const  data = [
  { orderId: 1231, product: "Bolt", price: 24, count: 1, amount: 10, date:'10-12-2023', dealer:'John' },
  { orderId: 2231, product: "Hinge", price: 33, count: 3, amount: 5, date:'9-11-2023', dealer:'Peter' },
  { orderId: 3231, product: "Suspension", price: 48, count: 2, amount: 5, date:'15-12-2023', dealer:'Susan' },
];

  export function createTable(){
  
  //Създавам контейнер за таблицата
  let container = document.getElementById("table-container");

  //Създавам таблица

  let addNew = document.createElement('button');
  addNew.textContent = 'Add New Order';
  addNew.classList.add('add-new-btn');
  container.appendChild(addNew);

  
    //тук трябва да създам нова таблица с инпут полета
  addNew.addEventListener('click', addNewOrder)
 


  let table = document.createElement("table");
  table.classList.add("custom-table");
  table.classList.add("sortable");

  container.appendChild(table);


  const tableHead = document.createElement("thead");
  table.appendChild(tableHead);
  //Създавам редове и клетки
  

  const headerRow = document.createElement("tr");
  headerRow.classList.add("custom-table-header");
  
  
  
  const headerCell0 = document.createElement("th");
  const headerCell1 = document.createElement("th");
  const headerCell2 = document.createElement("th");
  const headerCell3 = document.createElement('th');
  const headerCell4 = document.createElement('th');
  const headerCell5 = document.createElement('th');
  const headerCell6 = document.createElement('th');
  const headerCell7 = document.createElement('th');
  
  headerCell0.textContent = "ID";
  headerCell1.textContent = "Product";
  headerCell2.textContent = "Price";
  headerCell3.textContent = "Count";
  headerCell4.textContent = "Amount";
  headerCell5.textContent = "Dealer";
  headerCell6.textContent = "Date";
  headerCell7.textContent = "Actions";
  
    //FILtER 

  const columns = [headerCell0, headerCell1, headerCell2, headerCell3, headerCell4, headerCell5, headerCell6]
  
  //ADD FILTERS TO EACH COLUMN
  columns.forEach((column) => {
    const filterSelect = document.createElement('select');
    filterSelect.classList.add('filter-select');

    if(column.textContent ==="Price"){
        const filterSelect = document.createElement('select');
        filterSelect.classList.add('filter-select');
        
        const filterOptions = ['','0-9', '9-0'];
        filterSelect.innerHTML = filterOptions.map((option) => `<option value="${option}">${option}</option>`).join('');
        
        filterSelect.addEventListener('change', () => {
          const selectedFilter = filterSelect.value;

          let sorted = [...data];

          switch (selectedFilter) {
            case '':
              clearTable();
              createData(data);
            case '0-9':
            sorted = data.sort((a,b) => a.price - b.price);
            console.log(sorted);
            clearTable();
            createData(sorted);
              break;
            case '9-0':
           sorted = data.sort((a, b) => b.price - a.price);
            clearTable();
            createData(sorted);
              break;
            default:
              break;
          }        
        });

        column.appendChild(filterSelect);
    } else if (column.textContent === "Count") {
      const filterSelect = document.createElement('select');
      filterSelect.classList.add('filter-select');
      
      const filterOptions = ['','0-9', '9-0'];
      filterSelect.innerHTML = filterOptions.map((option) => `<option value="${option}">${option}</option>`).join('');
      
      filterSelect.addEventListener('change', () => {
        const selectedFilter = filterSelect.value;

        let sorted = [...data];

        switch (selectedFilter) {
          case '':
            clearTable();
            createData(data);
          case '0-9':
          sorted = data.sort((a,b) => a.count - b.count);
          console.log(sorted);
          clearTable();
          createData(sorted);
            break;
          case '9-0':
         sorted = data.sort((a, b) => b.count - a.count);
          clearTable();
          createData(sorted);
            break;
          default:
            break;
        }        
      });

      column.appendChild(filterSelect);
    } else if (column.textContent === "Amount") {
      const filterSelect = document.createElement('select');
      filterSelect.classList.add('filter-select');
      
      const filterOptions = ['','0-9', '9-0'];
      filterSelect.innerHTML = filterOptions.map((option) => `<option value="${option}">${option}</option>`).join('');
      
      filterSelect.addEventListener('change', () => {
        const selectedFilter = filterSelect.value;

        let sorted = [...data];

        switch (selectedFilter) {
          case '':
            clearTable();
            createData(data);
          case '0-9':
          sorted = data.sort((a,b) => a.amount - b.amount);
          console.log(sorted);
          clearTable();
          createData(sorted);
            break;
          case '9-0':
         sorted = data.sort((a, b) => b.amount - a.amount);
          clearTable();
          createData(sorted);
            break;
          default:
            break;
        }        
      });

      column.appendChild(filterSelect);
    } else if (column.textContent === "Date") {
      const filterSelect = document.createElement('select');
      filterSelect.classList.add('filter-select');
      
      const filterOptions = ['','0-9', '9-0'];
      filterSelect.innerHTML = filterOptions.map((option) => `<option value="${option}">${option}</option>`).join('');
      
      filterSelect.addEventListener('change', () => {
        const selectedFilter = filterSelect.value;
        let sorted = [...data];
        switch (selectedFilter) {
          case '':
            clearTable();
            createData(data);
          case '0-9':
        sorted = data.sort((a,b) => a.date - b.date); //TO FIX THIS SORTING BY DATE
          console.log(sorted);
          clearTable();
          createData(sorted);
            break;
          case '9-0':
         sorted = data.sort((a, b) => b.date - a.date); //TO FIX THIS SORTING BY DATE
          clearTable();
          createData(sorted);
            break;
          default:
            break;
        }        
      });

      column.appendChild(filterSelect);
    } else if (column.textContent === "Dealer") {
      const filterSelect = document.createElement('select');
      filterSelect.classList.add('filter-select');
      
      const filterOptions = ['','A-Z', 'Z-A'];
      filterSelect.innerHTML = filterOptions.map((option) => `<option value="${option}">${option}</option>`).join('');
      
      filterSelect.addEventListener('change', () => {
        const selectedFilter = filterSelect.value;

        let sorted = [...data];

        switch (selectedFilter) {
          case '':
            clearTable();
            createData(data);
          case 'A-Z':
          sorted = data.sort((a, b) => a.dealer.localeCompare(b.dealer));
          console.log(sorted);
          clearTable();
          createData(sorted);
            break;
          case 'Z-A':
         sorted = data.sort((a, b) => b.dealer.localeCompare(a.dealer));
          clearTable();
          createData(sorted);
            break;
          default:
            break;
        }        
      });

      column.appendChild(filterSelect);
    } else if (column.textContent === "Product") {
      const filterSelect = document.createElement('select');
      filterSelect.classList.add('filter-select');
      
      const filterOptions = ['','A-Z', 'Z-A'];
      filterSelect.innerHTML = filterOptions.map((option) => `<option value="${option}">${option}</option>`).join('');
      
      filterSelect.addEventListener('change', () => {
        const selectedFilter = filterSelect.value;

        let sorted = [...data];

        switch (selectedFilter) {
          case '':
            clearTable();
            createData(data);
          case 'A-Z':
          sorted = data.sort((a, b) => a.product.localeCompare(b.product));
          console.log(sorted);
          clearTable();
          createData(sorted);
            break;
          case 'Z-A':
         sorted = data.sort((a, b) => b.product.localeCompare(a.product));
          clearTable();
          createData(sorted);
            break;
          default:
            break;
        }        
      });

      column.appendChild(filterSelect);
    }

    // function clearTable() {
    //   while (tableBody.firstChild) {
    //     tableBody.removeChild(tableBody.firstChild);
    //   }

      
    // }
  });
  function clearTable() {
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
  }


  
  headerRow.appendChild(headerCell0);
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);
  headerRow.appendChild(headerCell4);
  headerRow.appendChild(headerCell5);
  headerRow.appendChild(headerCell6);
  headerRow.appendChild(headerCell7);
  
  tableHead.appendChild(headerRow)
  
  const tableBody = document.createElement("tbody");
  table.appendChild(tableBody);

  createData(data);
  //Създавам редове и популирам данните
  function createData(data){

    data.forEach((item) => {
      let row = document.createElement("tr");
      row.classList.add("custom-table-row");
      
      const cell0 = document.createElement("td");
      const cell1 = document.createElement("td");
      const cell2 = document.createElement("td");
      const cell3 = document.createElement('td');
      const cell4 = document.createElement('td');
      const cell5 = document.createElement('td');
      const cell6 = document.createElement('td');
      const cell7row = document.createElement('td');
      cell7row.classList.add('action-btns-row');
      
      const cell7 = document.createElement('div');
      cell7row.appendChild(cell7);
      cell7.classList.add('action-btns');
      const buttonDelete = document.createElement('button');
      const buttonEdit = document.createElement('button');
      
      buttonDelete.textContent = 'Delete';
      buttonDelete.classList.add('delete-btn');
      buttonEdit.textContent = 'Edit';
      buttonEdit.classList.add('edit-btn');
      
      cell7.appendChild(buttonEdit);
      cell7.appendChild(buttonDelete);
      
      //EDIT ROW FUNCTION
      buttonEdit.addEventListener('click', function (event) {
        
        const parentElement = event.target.parentElement;
        const row = parentElement.parentElement;

        const index = data.findIndex((item) => String(item.orderId) === row.children[0].textContent);
        console.log(index);



        const rowData = {
          orderId: row.children[0].textContent,
          product: row.children[1].textContent,
          price: row.children[2].textContent,
          count: row.children[3].textContent,
          amount: row.children[4].textContent,
          dealer: row.children[5].textContent,
          date: row.children[6].textContent,
        }

        console.log(rowData);

        let orderId = rowData.orderId;
        let product = rowData.product;
        let price = rowData.price;
        let count = rowData.count;
        let amount = rowData.amount;
        let dealer = rowData.dealer;
        let date = rowData.date;
        
        const modal = document.createElement('div');
        modal.classList.add('edit-modal');
        modal.style.display = 'flex';
    
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        const h2 = document.createElement('h2');
        h2.classList.add('modal-title');
        h2.textContent = 'Edit Order';
        const form = document.createElement('form');
        form.classList.add('modal-form');
        const label = document.createElement('label');
        label.textContent = "Product";
        const input = document.createElement('input');
        input.value = product;
        input.classList.add('modal-input');
        const label2 = document.createElement('label');
        label2.textContent = "Price";
        const input2 = document.createElement('input');
        input2.value = price;
        input2.classList.add('modal-input');
        const label3 = document.createElement('label');
        label3.textContent = "Count";
        const input3 = document.createElement('input');
        input3.value = count;
        input3.classList.add('modal-input');
        const label4 = document.createElement('label');
        label4.textContent = "Amount";
        const input4 = document.createElement('input');
        input4.value = amount;
        input4.classList.add('modal-input');
        const label5 = document.createElement('label');
        label5.textContent = "Dealer";
        const input5 = document.createElement('input');
        input5.value = dealer;
        input5.classList.add('modal-input');
        const label6 = document.createElement('label');
        label6.textContent = "Date";
        const input6 = document.createElement('input');
        input6.value = date;
        input6.classList.add('modal-input');
        const button = document.createElement('button');
        button.classList.add('modal-btn');
        button.textContent = 'Save';
        const button2 = document.createElement('button');
        button2.classList.add('modal-btn');
        button2.textContent = 'Close';
    
        button.addEventListener('click', function(e) {
          e.preventDefault();
          if (input.value !== '' || input2.value !== '' || input3.value !== '' || input4.value !== '' || input5.value !== '' || input6.value !== '') {
            const product = input.value;
            const price = input2.value;
            const count = input3.value;
            const amount = input4.value;
            const dealer = input5.value;
            const date = input6.value;
      
            data.splice(index, 1 , {orderId, product, price, count, amount, dealer, date});
      
            clearTable();
            createData(data);
            modal.style.display = 'none';
          } else {
            alert('Please fill all fields');
          }
         });
    
          button2.addEventListener('click', function(e) {
          e.preventDefault();
          modal.style.display = 'none';
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
        modal.appendChild(modalContent);
        container.appendChild(modal);
        
      }
      );
      
      
      //DELETE ROW FUNCTION
      buttonDelete.addEventListener('click', function (event) {
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
  }

  //Създавам модално прозорче за добавяне на нова продажба
    createModal();
  function createModal(){
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const h2 = document.createElement('h2');
    h2.classList.add('modal-title');
    h2.textContent = 'Add new Order';
    const form = document.createElement('form');
    form.classList.add('modal-form');
    const label = document.createElement('label');
    label.textContent = 'Product';
    const input = document.createElement('input');
    input.classList.add('modal-input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Product');
    input.setAttribute('required', 'true');
    const label2 = document.createElement('label');
    label2.textContent = 'Price';
    const input2 = document.createElement('input');
    input2.classList.add('modal-input');
    const label3 = document.createElement('label');
    label3.textContent = 'Count';
    const input3 = document.createElement('input');
    input3.classList.add('modal-input');
    const label4 = document.createElement('label');
    label4.textContent = 'Amount';
    const input4 = document.createElement('input');
    input4.classList.add('modal-input');
    const label5 = document.createElement('label');
    label5.textContent = 'Dealer';
    const input5 = document.createElement('input');
    input5.classList.add('modal-input');
    const label6 = document.createElement('label');
    label6.textContent = 'Date';
    const input6 = document.createElement('input');
    input6.classList.add('modal-input');
    const button = document.createElement('button');
    button.classList.add('modal-btn');
    button.textContent = 'Add';
    const button2 = document.createElement('button');
    button2.classList.add('modal-btn');
    button2.textContent = 'Close';

    button.addEventListener('click', function(e) {
      e.preventDefault();
      if (input.value !== '' && input2.value !== '' && input3.value !== '' && input4.value !== '' && input5.value !== '' && input6.value !== '') {
        const product = input.value;
        const price = input2.value;
        const count = input3.value;
        const amount = input4.value;
        const dealer = input5.value;
        const date = input6.value;
  
        data.unshift({product, price, count, amount, dealer, date});
  
        clearTable();
        createData(data);
        modal.style.display = 'none';
      } else {
        alert('Please fill all fields');
      }
     });

      button2.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'none';
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
    modal.appendChild(modalContent);
    container.appendChild(modal);
  }

  

};

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
  const modal = document.querySelector('.modal');
  modal.style.display = 'flex';
   
  
}

