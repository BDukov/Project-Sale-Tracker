import {data} from './data.js';
import recreateTable from './recreateTable.js';

export default function filterColumns(array) {
    array.forEach((column) => {
        console.log(column.textContent);
        const filterSelect = document.createElement('select');
        filterSelect.classList.add('filter-select');

        if(column.textContent ==="Price"){
            const filterSelect = document.createElement('select');
            filterSelect.classList.add('filter-select');
            
            // Опции за филтриране
            const filterOptions = ['','0-9', '9-0'];
            filterSelect.innerHTML = filterOptions.map((option) => `<option value="${option}">${option}</option>`).join('');
            
            // Слушател за събития при промяна в падащото меню
            filterSelect.addEventListener('change', () => {
              const selectedFilter = filterSelect.value;
              // Тук може да извикате функция за филтриране на данните по избраната стойност
              let sorted = [...data];
              const tableBody = document.querySelector(".custom-table tbody");
              switch (selectedFilter) {
                case '':
                  clearTable();
                  recreateTable(data);
                case '0-9':
                sorted = data.sort((a,b) => a.price - b.price);
                clearTable();
                recreateTable(sorted);
                  break;
                case '9-0':
               sorted = data.sort((a, b) => b.price - a.price);
                clearTable();
                recreateTable(sorted);
                  break;
                default:
                  console.log('Default');
                  break;
              }

              return sorted;
            
            });

            column.appendChild(filterSelect);
        } else if (column.textContent === "Count") {
            const filterSelect = document.createElement('select');
            filterSelect.classList.add('filter-select');
            
            // Опции за филтриране
            const filterOptions = ['','0-9', '9-0'];
            filterSelect.innerHTML = filterOptions.map((option) => `<option value="${option}">${option}</option>`).join('');
            
            // Слушател за събития при промяна в падащото меню
            filterSelect.addEventListener('change', () => {
              const selectedFilter = filterSelect.value;
              // Тук може да извикате функция за филтриране на данните по избраната стойност
              let sorted = [...data];
              const tableBody = document.querySelector(".custom-table tbody");
              switch (selectedFilter) {
                case '':
                  clearTable();
                  recreateTable(data);
                case '0-9':
                sorted = data.sort((a,b) => a.count - b.count);
                clearTable();
                recreateTable(sorted);
                  break;
                case '9-0':
               sorted = data.sort((a, b) => b.count - a.count);
                clearTable();
                recreateTable(sorted);
                  break;
                default:
                  console.log('Default');
                  break;
              }

            
            });
            column.appendChild(filterSelect);
        }
   
});
}
