/*The for principles of "this";
// in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding- look to the left of the dot at call time
* 2  Explicit Binding- call, apply, bind
* 3. new Binding- 
* 4. window Binding- last Option, unless in strict mode.
*
* write out a code example of each explanation above
*/


// Principle 1

// code example for Window Binding

let sayAge = function() {
    console.log(this.age);
};

let me = {
    age: 25
};

sayAge();
window.age = 35;
sayAge();

// Principle 2

// code example for Implicit Binding

let Person = function(name, age) {
    return {
        name: name,
        age: age,
        sayName: function() {
            console.log(this.name);
        },
        mother: {
            name: "TRD",
            sayName: function() {
                console.log(this.name);
            }
        }
    };
};

let Marques = Person('Marques', 37);
Marques.SayName();
Marques.mother.sayName();



// Principle 3

// code example for New Binding
let Animal = function(color, name, type){
    this.color = color;
    this.name = name;
    this.type = type;
};

let zebra = new Animal('black and white', 'Zorro', 'Zebra');


// Principle 4

// code example for Explicit Binding

let sayName = function(things1, things2, things3) {
    console.log("My name is " + this.name + ' and I know ' + things1 + ', ' + things2 + ', and ' + things3);
};

let trd = function() {
    name: "TRD"
    age: 5000
};


let things = ["Files", "People", "keys"];

sayName.call(trd,things[0], things[1], things[2]);