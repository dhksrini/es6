"use strict";

/*destructuring*/
var foo ={
	bar: 1,
	baz: 2
};

var { bar ,baz } = foo;
console.log(baz);

var tense = ['Thirupathi','Mallika','Seema','srinivasan'];

var [father,mother, ...siblings] = tense;

console.log(siblings);
console.log(father);
console.log(mother);



function calcBmi(weight, height, max){
	var bmi = weight / Math.pow(height , 2);
}
var sr = calcBmi(62, 6, 25);
console.log(sr);


/*let variable*/

let myname = 'Srini';
var myage = 29;
for(var i = 1; i < myage; i++){
	//console.log(i);
}




/*class and extends*/
class Parent {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	toString(){
		return `${this.name}, ${this.age}`
	}
}


class Child extends Parent{
	constructor(name, age, status){
		super(name, age);
		this.status = status;		
	}
	toString(){
		return `${super.toString()} in ${this.status}`;
	}
}
var child = new Child('Srinivasan', 29, 'Single');

console.log( child.toString() );

/*car property*/
class Car{
	constructor(fuel, distance, speed){
		this.fuel = 0
		this.distance = 0
		this.speed = 0
	}
	move(){
		if( this.fuel < 1 ){
			throw new RangeError('Fuel tank is dry!!');
		}
		this.fuel--
		this.distance += 2
	}
	addFuel(){
		if( this.fuel >= 60 ){
			throw new RangeError('Oh, Fuel is full');
		}
		this.fuel++
	}
}

class Tesla extends Car{
	constructor(fuel, distance, speed){
		super(fuel, distance, speed)
		this.distance = 4
		this.speed += 4
	}
}

var car = new Tesla(0, 45, 45);
car.addFuel()
car.move()
/*console.log(car.fuel);
console.log(car.distance);
console.log(car.speed);*/

class Foo2 {
	constructor(value1, value2){
		this.value1 = 25
		this.value2 = 35
	}
}


class Foo3 extends Foo2{
	constructor(value1, value2, value3 ){
		super(value1, value2)
		this.value3 = 44
	}
}

var foo1 = new Foo3();
console.log(foo1.value3);
console.log(foo1.value2);




// fetch api
var URL = 'data.js';

function fetchDemo(){
	fetch(URL).then(function(response){
		return response.json();
	}).then(function(json) {
   		// console.log( json );
		$.each(json, function(index, el) {
			var para = document.createElement("div");
			var imgSrc = $('<img >').attr({
				'src': el.avatar,
				'width': 70,
				'height': 70
			});
			$(imgSrc).appendTo(para);
			para.append(`${el.first} ${el.last}`);
			document.body.appendChild(para);
		});
  });
}
fetchDemo();




// friends - an array of objects 
// where object field "books" - list of favorite books 
var friends = [ 
{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 }, 
{ name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
{ name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
]

// allbooks - list which will contain all friends books +  
// additional list contained in initialValue
var allbooks = friends.reduce(function(prev, curr) {
  return [...prev, ...curr.books];
}, ["Alphabet"]);

// allbooks = ["Alphabet", "Bible", "Harry Potter", "War and peace", 
// "Romeo and Juliet", "The Lord of the Rings", "The Shining"]



/*promises*/
$.getJSON('data.js').then(function(response){
	return response;
}).then(function(response){
	console.log('success', response);
})


/*array.from*/
var products2 = Array.from(document.querySelectorAll('.products'));
console.log('products2', products2);

products2.filter( products2 => parseFloat(products2.innerHTML) < 10)
			.forEach( products2 => products2.style.color = 'red');


	

