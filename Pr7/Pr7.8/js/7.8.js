let arr = [10,20,30,50,235,3000];

for (let i = 0; i < arr.length; i++){
    let firstDigit = String (arr[i])[0];
    if (firstDigit === '1' || firstDigit === '2' || firstDigit === '5'){
        console.log(arr[i])
    }
}