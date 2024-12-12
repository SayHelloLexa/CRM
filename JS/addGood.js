'use strict';

const table = getDomElements().crmTable;
const addGoodBtn = getDomElements().callModal;
const overlay = getDomElements().overlay;
const modalWindow = getDomElements().modalWindow; 
const addGoodOverlay = getDomElements().addGoodOverlay;
const exitButton = getDomElements().modalExitButton;
const checkbox = getDomElements().checkbox[0];
const submitButton = getDomElements().submitButton[0];
let totalCostMod = getDomElements().totalCostModal[0];
const modalForm = getDomElements().modalForm[0];
const productName = modalForm.elements[0];
const category = modalForm.elements[1];
const units = modalForm.elements[2];
const count = modalForm.elements[6];
const price = modalForm.elements[7];
const file = modalForm.elements[8];

file.removeAttribute('required');

// Изменение состояния поля "Дисконт"
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    checkbox.nextElementSibling.removeAttribute('disabled');
    checkbox.nextElementSibling.classList.remove('form__input_disabled');
  } else {
    checkbox.nextElementSibling.setAttribute('disabled', 'disabled');
    checkbox.nextElementSibling.classList.add('form__input_disabled');
    checkbox.nextElementSibling.value = ''; 
  }
});


// Обновление итоговой стоимости
const updTotalCostModal = () => {
  totalCostMod.textContent = '$ ' +price.value * count.value;
}

price.addEventListener('input', updTotalCostModal);
count.addEventListener('input', updTotalCostModal);

// Cброс полей модального окна
const resetModalFormAndExit = () => {
  modalForm.reset();
  checkbox.nextElementSibling.setAttribute('disabled', 'disabled');
  checkbox.nextElementSibling.classList.add('form__input_disabled');
  totalCostMod.textContent = '';
  addGoodOverlay.classList.remove('overlay_display_flex');
}

// Добавление нового товара
submitButton.addEventListener('click', e => {
  e.preventDefault();

  if (!modalForm.reportValidity()) {
    return; 
  }

  const tr = document.createElement('tr');
  tr.classList.add('table__row_good');

  tr.insertAdjacentHTML('beforeend', `
    <td class="table__data table__data_id">${Math.floor(Math.random() * 1000000000)}</td>
    <td class="table__data table__data_name">${productName.value}</td>
    <td class="table__data table__data_category">${category.value}</td>
    <td class="table__data table__data_unit">${units.value}</td>
    <td class="table__data table__data_unit-count">${count.value}</td>
    <td class="table__data table__data_price">${price.value}</td>
    <td class="table__data table__data_sum">${price.value * count.value}</td>
    <td class="table__data table__data_btn">
      <button type="button">
        <img src="img/clarity_picture-line.svg" alt="иконка изображения товара">
      </button>

      <button type="button">
        <img src="img/akar-icons_edit.svg" alt="иконка редактирования товара">
      </button>

      <button type="button">
        <img class="delete-icon" src="img/ant-design_delete-outlined.svg" alt="иконка удаления">
      </button>
    </td>
  `);

  table.insertAdjacentElement('beforeend', tr);
  printTotalCost();
  resetModalFormAndExit();
});

// Закрытие/открытие модального окна
addGoodBtn.addEventListener('click', () => {
  addGoodOverlay.classList.add('overlay_display_flex');
  console.log(addGoodOverlay.classList);
});

overlay.addEventListener('click', e => {
  const target = e.target;
  if (target === overlay || target.classList.contains('modal__exit-icon')) {
    addGoodOverlay.classList.remove('overlay_display_flex');
  }
});
