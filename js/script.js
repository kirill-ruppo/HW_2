let N = +prompt("Enter number N: ");
if (!Number.isInteger(N)){
    console.log("Введене число N не є цілим");
}
let M = +prompt("Введіть число М: ");
if (!Number.isInteger(M)){
    console.log("Введене число M не є цілим");
}
const check = confirm("чи потрібно пропускати парні числа. (TRUE – потрібно, FALSE – не потрібно.)?");
let sum = 0;
for(let i = N; i <= M ;i++){
    if(check && i % 2 === 0 ){
    continue;
    }
    else {
        sum += i;
    }
}
console.log(sum);
