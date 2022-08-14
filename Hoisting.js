// ============================ 1 ============================
console.log(hello); //logs undefined                                   
var hello = 'world';
// After HOISTING
var hello;
console.log(hello);
hello = "world";
// output
// undefined

// ============================ 2 ============================
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// After HOISTING
var needle = 'haystack';
function test() {
    var needle = 'magnet';
    console.log(needle);
}
test();
// output
// magnet

// ============================ 3 ============================
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// After HOISTING
var brendan = 'super cool';
// no function call
console.log(brendan); //logs global var
// output
// super cool

// ============================ 4 ============================
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// After HOISTING
var food = 'chicken';
console.log(food);
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
eat();
// output
// chicken
// half-chicken

// ============================ 5 ============================
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// After HOISTING
// no log fires because no function to call;

// ============================ 6 ============================
console.log(genre); //undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// After HOISTING
console.log(genre); //logs undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); //logs rock
    var genre = "r&b";
    console.log(genre); //logs r&b
}
console.log(genre); //logs disco, global var
// output
// undefined
// rock
// r&b
// disco

// ============================ 7 ============================
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// After HOISTING
var dojo;
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo); //first one
learn();
console.log(dojo); // second one
// output
// san jose
// seattle
// burbank
// san jose

// ============================ 8 ============================
// After HOISTING
console.log(makeDojo("Chicago", 65)); // logs { name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
    dojo.hiring = true;
}
    else if(dojo.students <= 0){
    dojo = "closed for now";  // error can not reassign to const var
    }
    return dojo;
}
// output 
// { name: 'Chicago', students: 65, hiring: true }
