function max(a, b) {
    console.log('Running the function max with values', a, b);
    return a > b ? a : b;
}

var b2 = max(10, 20);
var b3 = max(30);
var b4 = max(30, 40, 50);
var s2 = max('hello', {x: 100, y: 200});

max.a = 42;



var min = function(a, b) {
    return a < b ? a : b;
}

var z = (a, b) => a < b ? a : b;

var double = i => i * 2;



var x = max(10, 20);
var c = max;

var y = c(30, 40);

// first order function - returns numeric value
var threeTimes = i => (3 * i);

// second order function - returns a function
var multiplier = i => (j => i * j);

var doTwice = (f, x) => {
    return f(f(x));
}

var res = doTwice(threeTimes, 10);


var tenTimes = multiplier(10);

var z = tenTimes(50);
var w = tenTimes(20);



// Constructors

function Person(name, age) {
    console.log('Inside Person, this = ', this);
    if (this === window) {
        console.error('Person must be called with new');
        return;
    }

    this.name = name;
    this.age = age;
    var d = new Date();
    var thisYear = d.getFullYear();
    this.birthYear = thisYear - age;
}

function Dog() {
    this.name = 'Rover';
}

Dog.prototype.bark = () => {
    console.log('Woof! Woof!');
}

Person.prototype.log = function() {
    console.log('Name:', this.name, 'Age:', this.age);
}

var p = new Person('John', 30);
var p2 = new Person('Jane', 25);
var p3 = Person('Jack', 35);

var d = new Dog();


Person.prototype.pi = 3.14159;


String.prototype.reverse = function() {
    var letters = this.split('');
    var reversed = letters.reverse();
    return reversed.join('');
}