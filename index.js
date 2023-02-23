function nameIs(name) {
  console.log("my name is " + name);
}
function surnameIs(name) {
  console.log("my surname is " + name);
}

nameIs("Nazmi");
surnameIs("Tursunbekova");

//functionName(height, radius)
function getConeVolume(h, r) {
  let V = 0;
  let pi = 3.14;
  console.log((V = (h * pi * (r * 2)) / 3));
}
getConeVolume(10, 5);

// 3// Длина строки равна ...

function strLength(text) {
  console.log(text.length);
}
strLength("This is another");

// 4// functionName(num) // Число - четное || Число - нечетное
function isEven(num) {
  if (num % 2 === 0) {
    console.log("even - " + num);
  } else if (num % 2 === 1) {
    console.log("odd - " + num);
  } else {
    console.log("error - " + num);
  }
}
isEven(2);
isEven(5);
isEven("gfhgf");

// // positive(num) // проверка на положительное число (true || false)
function isPositive(num) {
  return num >= 0;
}

// // вернуть положительное число
 function toPositive(num) {
  if (num >= 0) {
   return num;
  } else {
   return num * -1;
   }
 }


 // //5 // //5 квадрат числа
function square(num){
  return num** 2
 }
console.log(square(5))



// // 6// functionName(num) // Корень этого числа равен
function root(a) {
  return Math.sqrt(a)
}
console.log(root(25))


 // 7  functionName(a, b, c, d, e) // Периметр - ...
function triangle(a, b, c, d, e) {
  return a + b + c + d + e;
}
console.log(triangle(5,3,6,9,5));

// 8// 0 3 6 9 ...

 for ( i = 0; i < 35; i +=3) {
   console.log(i);
 }
