function dog_years(human_age) {
    let dog_age = parseInt(human_age * 7);
    return dog_age;
}
let dogs = [
    {
        "name": "Sushi",
        "age": dog_years(1),
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA39wvrYq5Lpvao847zSbPsoDZ1qwsaWuF_w&usqp=CAU",
        "toys": "bone, water bottle",
    },
    {
        "name": "Dosan",
        "age": dog_years(2),
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixtxrgRDHPvsiIAZ5XHBNXP-xFi_Q8rQ-Rw&usqp=CAU",
        "toys": "Ball, Shoes",
    },
    {
        "name": "Moonchin",
        "age": dog_years(2),
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIxTFD0gQKESKXBMNpMXArGy56H2VKUpplqVWtGuQTnxG-mSy3IKC-OC9wAId-4kFoh08&usqp=CAU",
        "toys": "Ducklings, Tabo",
    },

]

const container = document.getElementById("container")
// for loops
for (let dog of dogs) {
    console.log(dog)
    
    const template = `
            <p>Name: ${dog.name}</p>
            <p>Age: Your doggie is ${dog.age} years old in dog years!</p>
            <img src= "${dog.src}"> 
            <p>fave toys: ${dog.toys}</p>
        
    `
    const div = document.createElement("div")
    div.classList.add("dog")
    div.innerHTML = template
    container.appendChild(div)
    
    // console.log(template)
}


// document.getElementById("dog_one_name").innerHTML = "Name: " + dogs[0].name;
// document.getElementById("dog_one_age").innerHTML = "Age: Your doggie is " + dogs[0].age + " years old in dog years!";
// document.getElementById("dog_one_toys").innerHTML = "fave toys: " + dogs [0].toys;
// document.getElementById("dog_two_name").innerHTML = "Name: " + dogs[1].name;
// document.getElementById("dog_two_age").innerHTML = "Age: Your doggie is " + dogs[1].age + " years old in dog years!";
// document.getElementById("dog_two_toys").innerHTML = "fave toys: " + dogs [1].toys;
// document.getElementById("dog_three_name").innerHTML = "Name: " + dogs[2].name;
// document.getElementById("dog_three_age").innerHTML = "Age: Your doggie is " + dogs[2].age + " years old in dog years!";
// document.getElementById("dog_three_toys").innerHTML = "fave toys: " + dogs [2].toys;