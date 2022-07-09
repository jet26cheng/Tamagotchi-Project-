
// make a tamagotchi class
class Tamagotchi {
    constructor(hunger,sleepiness, boredom, age, name) {
        this.age = age
        this.boredom = boredom
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.name = name
    }
}
// make a game object 
class Game { 
    constructor() {
        this.tamagotchi = newTamagotchi(0, 0, 0, 0, "");


    }
}
    let tamagotchi = new Tamagotchi(0,0,0,0, "")
function clickPlay() {
    tamagotchi.boredom-=1  
}
console.log(tamagotchi)

function clickFeed() {
    tamagotchi.hunger-=1
}

function clickSleep() {
    tamagotchi.sleepiness-=1
}

// petTamagotchi() {

    // }
    //this.tamagotchi.boredom-=1 

//     thistamogachiname = 
// nameTamogachi()
// nameTamogachi(name) {
// this.tamiogachi.name = name;
// }

// x = new Game()
// x.nameTamogachi(Jeddy);
// }

// const nameSpace = document.querySelector("#nameSpace")
//select each buttons and save them to a variable


//add event listeners to the buttons 


//look up set interval to start timer 
function getHungry() {
    

    // return the hunger
    let petHunger = Tamagotchi.hunger+=1;

    console.log(getHungry)
}

setInterval(getHungry, 5000);
//look up how to stop timer 

function timeAge() {
    let timer = tamagotchi.age+=1;
    console.log(timeAge)
}

setInterval(timeAge,5000,);

//css animations 



//game object creat functions for the game object to interact with the tamagotchi object. 
// game object will control hunger sleep boredom etc. 

// i want a live function() to start the timers of boredom, hunger, etc. - run function 

//getHungry()
//getSleepy()
//getBored()

// setinterval() functions that will call the game object functions that will make the tamagotchi bore, hungry tired, etc. 

// these functions are controling the buttons that will help you pet, feed, sleep your tmaamgotchi 
// pet()
// lightsOff()
// feed()

// live functions is what is controling the buttons 
// live ()

// on
// onClick={nameTamocachi(input)}

// run clock()
// const runClock = () => {
//     let timers = setInterval(() => {
//         tamagotchi.
//     })
// }

