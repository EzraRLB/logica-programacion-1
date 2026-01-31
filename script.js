let n1 = prompt("Ingrese el número 1:");
let n2 = prompt("Ingrese el número 2:");
let n3 = prompt("Ingrese el número 3:");

function ascendingOrder(n1, n2, n3) {
    let arr = Array.of(n1, n2, n3);
    arr.sort((a, b) => (a - b));
    if ( arr[0] == arr[1] || arr[1] == arr[2] ) {
        console.log("Posee números iguales.");
    } return arr
}

function descendingOrder(n1, n2, n3) {
    let arr = Array.of(n1, n2, n3);
    arr.sort((a, b) => (b - a));
    if ( arr[0] == arr[1] || arr[1] == arr[2] ) {
        console.log("Posee números iguales");
    } return arr
}

console.log("Números en orden ascendente: " + ascendingOrder(n1, n2, n3));
console.log("Números en orden descendente: " + descendingOrder(n1, n2, n3));