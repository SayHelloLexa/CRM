'use strict';

const updDelButtons = () => {
    return getDomElements().tableRowDeleteButton; 
}

console.log(updDelButtons());

table.addEventListener('click', e => {
    if (e.target.classList.contains('delete-icon')) {
        const tableRow = e.target.closest('.table__row_good');
        if (tableRow) {
            tableRow.remove();
            printTotalCost();
            console.log('Удаление');
        }
    }
});