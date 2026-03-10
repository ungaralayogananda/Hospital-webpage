//While Loop
console.log("Yoganandas input/output operations");
console.log("While Loop:");
let i = 1;
while (i <= 3) {
    console.log("Value of i:", i);
    i++;
}

// Do-While Loop
console.log("Do-While Loop:");
let j = 1;
do {
    console.log("Value of j:", j);
    j++;
} while (j <= 3);

//Nested While Loop
console.log("Nested While Loop:");
let a = 1;
while (a <= 2) {
    let b = 1;
    while (b <= 2) {
        console.log("a =", a, "b =", b);
        b++;
    }
    a++;
}

//For Loop
console.log("For Loop:");
for (let k = 1; k <= 3; k++) {
    console.log("Value of k:", k);
}

//Nested For Loop
console.log("Nested For Loop:");
for (let x = 1; x <= 2; x++) {
    for (let y = 1; y <= 2; y++) {
        console.log("x =", x, "y =", y);
    }
}