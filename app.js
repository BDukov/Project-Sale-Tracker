import { createTable, toggleTable } from './table.js';

document.addEventListener("DOMContentLoaded", function () {

  createTable();

  toggleTable();
  window.toggleTable = toggleTable;

});


