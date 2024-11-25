'use strict';

const createRow = (obj) => {
  const tr = document.createElement('tr');
  const table = getDomElements().crmTable;

  tr.insertAdjacentHTML('beforeend', `
    <td class="table__data table__data_id">${obj.id}</td>
    <td class="table__data table__data_name">${obj.title}</td>
    <td class="table__data table__data_category">${obj.category}</td>
    <td class="table__data table__data_unit">${obj.units}</td>
    <td class="table__data table__data_unit-count">${obj.count}</td>
    <td class="table__data table__data_price">${obj.price}</td>
    <td class="table__data table__data_sum">${obj.price * obj.count}</td>
    <td class="table__data table__data_btn">
      <button type="button">
        <img src="img/clarity_picture-line.svg" alt="иконка изображения товара">
      </button>

      <button type="button">
        <img src="img/akar-icons_edit.svg" alt="иконка редактирования товара">
      </button>

      <button type="button">
        <img src="img/ant-design_delete-outlined.svg" alt="иконка удаления">
      </button>
    </td>
  `);

  table.insertAdjacentElement('beforeend', tr);
}