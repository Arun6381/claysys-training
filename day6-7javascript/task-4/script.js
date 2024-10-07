const addButton = document.getElementById("add-product");
const table = document
  .getElementById("myTable")
  .getElementsByTagName("tbody")[0];

addButton.addEventListener("click", () => {
  const itemName = document.getElementById("item_name");
  const itemPrice = document.getElementById("item_price");
  const itemQuantity = document.getElementById("item_quantity");

  if (itemName && itemPrice && itemQuantity) {
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const priceCell = newRow.insertCell(1);
    const quantityCell = newRow.insertCell(2);

    nameCell.textContent = itemName.value;
    priceCell.textContent = itemPrice.value;
    quantityCell.textContent = itemQuantity.value;

    itemName.value = "";
    itemPrice.value = "";
    itemQuantity.value = "";
  } else {
    alert("Please fill in all fields.");
  }
});
