import {data} from './data.js';

export default function recreateTable(data) {

  let container = document.getElementById("table-container");

  //Създавам таблица

 


  let table = document.createElement("table");
  table.classList.add("custom-table");
  table.classList.add("sortable");

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

    const columns = [headerCell0, headerCell1, headerCell2, headerCell3, headerCell4, headerCell5, headerCell6, headerCell7];

  
  
  // headerCell0.appendChild(filterSelect);
  // headerCell1.appendChild(filterSelect);
  
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
  
          console.log(row);
        
          console.log('Clicked button in parent:', parentElement);
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
      container.appendChild(table);
    });
  
    container.appendChild(table);
  };