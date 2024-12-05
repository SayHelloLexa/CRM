'use strict';

const getDomElements = () => {
  return {
    overlay: document.querySelector('.overlay'),
    modalWindow: document.querySelector('.modal'),
    modalFormTitle: document.querySelectorAll('.form__title'),
    productId: document.querySelectorAll('.form__product-id'),
    modalForm: document.querySelectorAll('.form'),
    checkbox: document.querySelectorAll('.form__input_checkbox'),
    disabledInput: document.querySelectorAll('.form__input_disabled'),
    totalCost: document.querySelectorAll('.total-cost__count'),
    crmTable: document.querySelector('.crm__table .tbody'),
    tableRow: document.querySelectorAll('.table__row_good'),
    tableRowDeleteButton: document.querySelectorAll('.delete-icon'),
    callModal: document.querySelector('.call-modal'),
    modalExitButton: document.querySelector('.modal__exit-button'),
    addGoodOverlay: document.querySelector('.overlay_add-goods'),
  }
};