/*let cats=["Milo", "Otis", "Garfield"]
//add function to code
function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}
function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}
function destructivelyRemoveLastCat(name){
    cats.pop();
    return cats
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
    return cats
}
function appendCat(name){
    const copyCat=[...cats, name]
    return copyCat
}
function prependCat(name){
    const copyCat=[name, ...cats]
    return copyCat
}
function removeLastCat(){
    const cat=cats.slice(0, cats.length-1);
    return cat
}
function removeFirstCat(){
    const caat=cats.slice(1)
    return caat
}*/
const cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    return cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    return [...cats,name] 
}
function prependCat(name){
    return [name, ...cats]
}
function removeLastCat(){
    return cats.slice(0,-1)

}
function removeFirstCat(){
    return cats.slice(1)
}
/*
const address = {
    street: {
      line1: "11 Broadway",
      line2: "2nd Floor",
    },
    city: "New York",
    state: "NY",
    zipCode: "10004",
  };
  console.log()

const meals = {
    breakfast: "Oatmeal",
    lunch: "Caesar salad",
    dinner: "Chimichangas",
  };
  
  let mealName = "lunch";
  
  console.log(meals.mealName);
  //=> "Caesar salad"

const morningMeal='breakfast'
const middaymeal='lunch'
const meals={
    [morningMeal]:"French toast",
    [middaymeal]:"Personal pizza"
}
console.log(meals)
const address = {
    street: {
      line1: "11 Broadway",
      line2: "2nd Floor",
    },
    city: "New York",
    state: "NY",
    zipCode: "10004",
  };
  console.log(address['city'])
  
  const wednesdayMenu = {
    cheesePlate: {
      soft: "Brie",
      semiSoft: "Fontina",
      hard: "Provolone",
    },
    fries: "Sweet potato",
    salad: "Southwestern",
  };
  console.log(Object.values(wednesdayMenu))
  
  const number = 10;

  function addTwoNumbers(a, b) {
      a + b;
  }
  
  function multiplyByTwo(n) {
     r number * 2;
  }
  console.log(addTwoNumbers(1, 3))*/
  function countDown(){
      let firstNumber=11;
      while(firstNumber >0){
          console.log(firstNumber--)
      }
  }
  countDown()
  