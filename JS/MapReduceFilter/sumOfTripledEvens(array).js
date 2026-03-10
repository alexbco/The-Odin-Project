function sumOfTripledEvens(array){
    return array
    .filter(n => n % 2 === 0)
    .map(n => n * 3)
    .reduce((total, n) => total + n, 0);
}

array = [1,2,3,4,5,6,7,8,9,10];
array_pares = sumOfTripledEvens(array);
console.log(array_pares);