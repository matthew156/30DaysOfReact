let arr = ["One", "Two", "Three", "Four", "Five"]
console.log("Number of items: " + arr.length)

console.log("First Item: " + arr[0])
console.log("Middle Item: " + arr[Math.floor(arr.length/2)])
console.log("Last Item: " + arr[arr.length-1] )

let iCompanies = [" Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

console.log(iCompanies.slice(Math.floor(iCompanies.length/2), (Math.floor(iCompanies.length/2) +1)).join() + " are big IT companies")

const dog = {
    name: "Bark",
    legs: 4,
    color: "brown",
    age: 3,
    bark : function (){
        return "woof woof"
    }
}

console.log(dog.bark())


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    // getMERN : function() {
    //     let listOfUsers = []
    //     if(users.this.skills.includes("MongoDB"))
    //     listOfUsers.push(users.this)
    //     return listOfUsers
    // }


}

    console.log(users.Alex.skills.includes("CSS"))