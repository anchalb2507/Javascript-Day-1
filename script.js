// Assignment 1 

let fruits =[];
// Adding three elements in array
  fruits.push("apple");
   fruits.push("banana");
   fruits.push("orange");

//  removing first element from array
       fruits.splice(0,1);
      
 // adding Elementto the last of array

     fruits.push("grape");

// adding pear at the 2nd index 
      fruits.splice(2,0,"pear");
// print the array 
      console.log(fruits);

  
    //  Assignment 2

    let person ={

    }
    person.name="John";
    person.age = 30;
    person.city = "New York";

//  Removing person age 
    delete person["age"];

  // Adding new property 
  person.job ="Engineer";

//   Updating the city
  person.city ="San Francisco";

// Printing the object 
  console.log(person);


// Assignment 3

 let cars =[
    
    {make:"Toyota", model :"Camry", year:2018},
    {make:"Toyota", model :"Camry", year:2018},
    {make:"Toyota", model :"Camry", year:2018},


 ];
//  Remove first object 
  cars.splice(0 ,1);

//   Adding new object 



   cars.splice(0,0,{ make: "Honda",
                     model: "Civic",
                       year: 2020}
               );


//  Print the cars array

    console.log(cars);





