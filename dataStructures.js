// level {1/2/3}

//1
const array1 = [1,2,3];
for (let i = 0; i < array1.length; i++){
    array1[i] += 1;
}

console.log(array1);


// 2
const array2 = [1,2,3];
let sum = 0;

for (let i = 0; i < array2.length; i++){
    sum += array2[i];
}

console.log(sum);

//3
let officer = {name: 'Elie', rank: 'Pro'};
console.log(JSON.stringify(officer));