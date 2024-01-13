import { createTable, toggleTable } from './src/table/table.js';

document.addEventListener("DOMContentLoaded", function () {

  createTable();

  toggleTable();
  window.toggleTable = toggleTable;

});


