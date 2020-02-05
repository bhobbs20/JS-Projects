// document.write(typeof "word");

// document.write(typeof 3);

function my_function() {
    // document.getElementById("test").innerHTML = 0/0;
    // document.getElementById("test").innerHTML = isNaN('this a string');
    document.getElementById("test").innerHTML = isNaN('007');
}

// document.write(2E310);
// document.write(-3E310);

// document.write(10 < 2);
// document.write(100 > 87);

// console.log(10 * 42)

// document.write("10" + 5);

// console.log( 10 > 5);

// document.write(10 == 10);
// document.write(3 == 11);

// x = 10;
// y = 10;
// document.write(x === y);

// x = 82;
// y = "82";
// document.write(x === y);

// a = "magnus";
// b = "magnus";
// document.write(a === b);

// t = 78;
// h = 67;
// document.write(t === h);

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 && 10 > 4);

document.write( 5 > 10 || 10 > 4);

document.write(5 > 10 || 10 > 20);

// function not_fucntion() {
//     document.getElementById("not").innerHTML = !(5 > 10);
// }

function not_function() {
    document.getElementById("not").innerHTML = !(20 > 10);
}