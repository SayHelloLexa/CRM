'use strict';

const renderGoods = (objArr) => {
  objArr.forEach(obj => {
    createRow(obj);
  });
}