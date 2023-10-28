let arr = [-5,3,2,-8,10,4,-1];

let sum = 0;

for ( let i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
        sum += arr[i];
    }
}
alert("Сумма положительных чисел массива равна: " + sum)