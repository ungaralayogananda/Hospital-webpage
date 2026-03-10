console.log("Yoganandas input/output operations");
console.log("Break statements:");

for(let i=1; i<=10; i++){
    if(i==5){
        break;
    }
    console.log("value of i:", i);
    for(let j=1;j<=10;j++){
        if(j==5){
            continue;
        }
        console.log("value of j:", j);
    }
}