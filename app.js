/*
let , var , const




*/

// for (let i = 0; i<=10 ; i++)  {

// if (i%2==0){

//     console.log(i)
// } else if(i==5){   
// continue;
// }


// else{
//     console.log("sorry" + i)
// }


// }

// let theusername = prompt("Name")

//  function oddnum(Fnumber , Lasnumber) {

//     for (let i = Fnumber; i < Lasnumber ; i++) {

//          if (i%2==1) {
//           console.log("odd" +i + theusername)

//       }


//  }

//  }
//  oddnum(200,220)
// // name (10,18)


let sutudant = ["majd", "ali", "anas", "omar"]

let mark = [60, 84, 33, 88]

function markCal(params) {

    for (let i = 0; i < sutudant.length; i++) {

        console.log(sutudant[i]);
    }
    for (let k = 0; k < mark.length; k++) {
        console.log(mark[k]);

    }
}
markCal()