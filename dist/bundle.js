"use strict";

/*destructuring*/

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var foo = {
	bar: 1,
	baz: 2
};

var bar = foo.bar,
    baz = foo.baz;

console.log(baz);

var tense = ['Thirupathi', 'Mallika', 'Seema', 'srinivasan'];

var father = tense[0],
    mother = tense[1],
    siblings = tense.slice(2);


console.log(siblings);
console.log(father);
console.log(mother);

function calcBmi(weight, height, max) {
	var bmi = weight / Math.pow(height, 2);
}
var sr = calcBmi(62, 6, 25);
console.log(sr);

/*let variable*/

var myname = 'Srini';
var myage = 29;
for (var i = 1; i < myage; i++) {}
//console.log(i);


/*class and extends*/

var Parent = function () {
	function Parent(name, age) {
		_classCallCheck(this, Parent);

		this.name = name;
		this.age = age;
	}

	_createClass(Parent, [{
		key: 'toString',
		value: function toString() {
			return this.name + ', ' + this.age;
		}
	}]);

	return Parent;
}();

var Child = function (_Parent) {
	_inherits(Child, _Parent);

	function Child(name, age, status) {
		_classCallCheck(this, Child);

		var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name, age));

		_this.status = status;
		return _this;
	}

	_createClass(Child, [{
		key: 'toString',
		value: function toString() {
			return _get(Child.prototype.__proto__ || Object.getPrototypeOf(Child.prototype), 'toString', this).call(this) + ' in ' + this.status;
		}
	}]);

	return Child;
}(Parent);

var child = new Child('Srinivasan', 29, 'Single');

console.log(child.toString());

/*car property*/

var Car = function () {
	function Car(fuel, distance, speed) {
		_classCallCheck(this, Car);

		this.fuel = 0;
		this.distance = 0;
		this.speed = 0;
	}

	_createClass(Car, [{
		key: 'move',
		value: function move() {
			if (this.fuel < 1) {
				throw new RangeError('Fuel tank is dry!!');
			}
			this.fuel--;
			this.distance += 2;
		}
	}, {
		key: 'addFuel',
		value: function addFuel() {
			if (this.fuel >= 60) {
				throw new RangeError('Oh, Fuel is full');
			}
			this.fuel++;
		}
	}]);

	return Car;
}();

var Tesla = function (_Car) {
	_inherits(Tesla, _Car);

	function Tesla(fuel, distance, speed) {
		_classCallCheck(this, Tesla);

		var _this2 = _possibleConstructorReturn(this, (Tesla.__proto__ || Object.getPrototypeOf(Tesla)).call(this, fuel, distance, speed));

		_this2.distance = 4;
		_this2.speed += 4;
		return _this2;
	}

	return Tesla;
}(Car);

var car = new Tesla(0, 45, 45);
car.addFuel();
car.move();
/*console.log(car.fuel);
console.log(car.distance);
console.log(car.speed);*/

var Foo2 = function Foo2(value1, value2) {
	_classCallCheck(this, Foo2);

	this.value1 = 25;
	this.value2 = 35;
};

var Foo3 = function (_Foo) {
	_inherits(Foo3, _Foo);

	function Foo3(value1, value2, value3) {
		_classCallCheck(this, Foo3);

		var _this3 = _possibleConstructorReturn(this, (Foo3.__proto__ || Object.getPrototypeOf(Foo3)).call(this, value1, value2));

		_this3.value3 = 44;
		return _this3;
	}

	return Foo3;
}(Foo2);

var foo1 = new Foo3();
console.log(foo1.value3);
console.log(foo1.value2);

// fetch api
var URL = 'data.js';

function fetchDemo() {
	fetch(URL).then(function (response) {
		return response.json();
	}).then(function (json) {
		// console.log( json );
		$.each(json, function (index, el) {
			var para = document.createElement("div");
			var imgSrc = $('<img >').attr({
				'src': el.avatar,
				'width': 70,
				'height': 70
			});
			$(imgSrc).appendTo(para);
			para.append(el.first + ' ' + el.last);
			document.body.appendChild(para);
		});
	});
}
fetchDemo();

// friends - an array of objects 
// where object field "books" - list of favorite books 
var friends = [{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 }, { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 }, { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }];

// allbooks - list which will contain all friends books +  
// additional list contained in initialValue
var allbooks = friends.reduce(function (prev, curr) {
	return [].concat(_toConsumableArray(prev), _toConsumableArray(curr.books));
}, ["Alphabet"]);

// allbooks = ["Alphabet", "Bible", "Harry Potter", "War and peace", 
// "Romeo and Juliet", "The Lord of the Rings", "The Shining"]


/*promises*/
$.getJSON('data.js').then(function (response) {
	return response;
}).then(function (response) {
	console.log('success', response);
});

/*array.from*/
var products2 = Array.from(document.querySelectorAll('.products'));
console.log('products2', products2);

products2.filter(function (products2) {
	return parseFloat(products2.innerHTML) < 10;
}).forEach(function (products2) {
	return products2.style.color = 'red';
});