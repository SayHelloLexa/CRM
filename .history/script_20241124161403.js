'use strict';

const modalFormTitle = document.querySelectorAll('.form__title');
const productId = document.querySelectorAll('.form__product-id');
const modalForm = document.querySelectorAll('.form');
const checkbox = document.querySelectorAll('.form__input_checkbox');
const disabledInput = document.querySelectorAll('.form__input_disabled');
const totalCost = document.querySelectorAll('.total-cost__count');

const createRow = (obj) => {
  const tr = document.createElement('tr');

  // tr.insertAdjacentHTML('beforeend', `
  //   <td class="table__data table__data_id">${obj.id}</td>
  //   <td class="table__data table__data_name">${obj.name}</td>
  //   <td class="table__data table__data_category">${obj.category}</td>
  //   <td class="table__data table__data_unit">${obj.unit}</td>
  //   <td class="table__data table__data_discount">${obj.discount}</td>
  //   <td class="table__data table__data_price">${obj.price}</td>
  //   <td class="table__data table__data_sum">${obj.sum}</td>
}