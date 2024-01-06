import { data } from "../data.js";

export default function addNewSaleModal(container, clearTable, createData, currentPage, itemsPerPage, tableBody) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    const h2 = document.createElement("h2");
    h2.classList.add("modal-title");
    h2.textContent = "Add new Order";
    const form = document.createElement("form");
    form.classList.add("modal-form");
    const label = document.createElement("label");
    label.textContent = "Product";
    const input = document.createElement("input");
    input.classList.add("modal-input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Product");
    input.setAttribute("required", "true");
    const label2 = document.createElement("label");
    label2.textContent = "Price";
    const input2 = document.createElement("input");
    input2.classList.add("modal-input");
    input2.setAttribute("type", "number");
    input2.setAttribute("placeholder", "Price");
    input2.setAttribute("required", "true");
    const label3 = document.createElement("label");
    label3.textContent = "Count";
    const input3 = document.createElement("input");
    input3.classList.add("modal-input");
    input3.setAttribute("type", "number");
    input3.setAttribute("placeholder", "Count");
    input3.setAttribute("required", "true");
    const label4 = document.createElement("label");
    label4.textContent = "Amount";
    const input4 = document.createElement("input");
    input4.classList.add("modal-input");
    input4.setAttribute("type", "number");
    input4.setAttribute("placeholder", "Amount");
    input4.setAttribute("required", "true");
    const label5 = document.createElement("label");
    label5.textContent = "Dealer";
    const input5 = document.createElement("input");
    input5.classList.add("modal-input");
    input5.setAttribute("type", "text");
    input5.setAttribute("placeholder", "Dealer");
    input5.setAttribute("required", "true");
    const label6 = document.createElement("label");
    label6.textContent = "Date";
    const input6 = document.createElement("input");
    input6.classList.add("modal-input");
    input6.setAttribute("type", "date");
    input6.setAttribute("placeholder", "Date");
    input6.setAttribute("required", "true");
    const button = document.createElement("button");
    button.classList.add("modal-btn");
    button.textContent = "Add";
    const button2 = document.createElement("button");
    button2.classList.add("modal-btn");
    button2.textContent = "Close";
    
    button.addEventListener("click", function (e) {
      e.preventDefault();
      if (
        input.value !== "" &&
        input2.value !== "" &&
        input3.value !== "" &&
        input4.value !== "" &&
        input5.value !== "" &&
        input6.value !== ""
        ) {
          let product = input.value;
      let price = input2.value;
      let count = input3.value;
      let amount = input4.value;
      let dealer = input5.value;
      let date = input6.value;

      let [year, month, day ] = date.split('-');
      let newDate = `${day}-${month}-${year}`;
      date = newDate
      
      data.unshift({ product, price, count, amount, dealer, date });

      
      clearTable();
      createData(data, currentPage, itemsPerPage, tableBody);
      modal.style.display = "none";
      
      input.value = "";
      input2.value = "";
      input3.value = "";
      input4.value = "";
      input5.value = "";
      input6.value = "";
    } else {
      alert("Please fill all fields");
    }
  });

  button2.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "none";
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