'use strict';

const deleteButton = getDomElements().tableRowDeleteButton;  

console.log(deleteButton);

deleteButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        const tableRow = button.closest('.table__row_good');

        if (tableRow) {
            tableRow.remove();
            delete obj[index];
            console.log(obj);
        }
    })
});
