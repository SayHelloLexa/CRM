'use strict'

let totalCost = getDomElements().totalCost;
console.log(totalCost);

const updTotalCost = () => {
    return getDomElements().tableDataSum;
};

const printTotalCost = () => {
    updTotalCost().forEach(item => {
        const tableDataSum = updTotalCost();
        let sum = 0;

        tableDataSum.forEach(item => {
            sum += parseFloat(item.textContent); 
        });

        totalCost.textContent = '$ ' + sum;
    })
};

printTotalCost();