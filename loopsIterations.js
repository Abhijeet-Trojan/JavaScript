// level {1/2/3}
// function numTriangle(){
//     let rows = 5;
//     let chars= '';
//     for (let i = 1; i <= rows; i++){
//         for (let j = 1; j <= rows - i; j++){
//             chars += " ";
//         }
//         for (let k = i-1; k <= 1; k--){
//             chars += k;
//         }
//         chars += "\n";
//     }
// }

// numTriangle(5);

// function triangle(){
//     let n =5;
//     for (let i = 1; i <= n; i++){
//         for (let j = 1; j <= i; j++)
//         console.log(j);
//         for (let k = i-1; k >= 1; k--)
//         console.log(k);
//         document.write("<br>");
//     }
// }

// triangle(5);


function Tri(n){
    for (let i = 1; i <= n; i++){
        let s = "";
        for (let j = 1; j <= n; j++){
            if (j <= i) {
                s += j + " ";
            }
        }
        console.log(s);
    }
}
 Tri(5);