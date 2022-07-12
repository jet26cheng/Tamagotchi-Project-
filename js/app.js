
// make a tamagotchi class
class Tamagotchi {
    constructor(hunger,sleepiness, boredom, age) {
        this.age = 0;
        this.boredom = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        
    }

// make a game object 
// class Game { 
//     constructor() {
//         this.tamagotchi = new Tamagotchi(0, 0, 0, 0, "");
        


//     }
    // let tamagotchi = new Tamagotchi(0,0,0,0, "")
    clickPlay() {
        if(tamagotchi.boredom >= 0) {
            tamagotchi.boredom-= 1;  
        }
    }

    clickFeed() {
        if(tamagotchi.hunger >= 0) {
            tamagotchi.hunger-= 1;  
        }
    }
    

    clickSleep() {
        if(tamagotchi.sleepiness >= 0) {
            tamagotchi.sleepiness-= 1;  
            

        }
    }
}


  
 const tamagotchi = new Tamagotchi;
//  tamogachi.clickPlay();

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

//select each buttons and save them to a variable


//add event listeners to the buttons 


//look up set interval to start timer 
const getHungry = () => {
    let hungerLevel = document.querySelector("#hungerLevel")
    tamagotchi.hunger += 1 
    hungerLevel.innerText = tamagotchi.hunger

    tamagotchiIsDead()
   
}
setInterval(getHungry,10000);

const getBored = () => {
    let boredomLevel = document.querySelector('#boredomLevel')
    tamagotchi.boredom += 1
    boredomLevel.innerText = tamagotchi.boredom

    tamagotchiIsDead()
}
setInterval(getBored, 10000);

const getSleepy = () => {
    let sleepyLevel = document.querySelector('#sleepyLevel')
    tamagotchi.sleepiness += 1 
    sleepyLevel.innerText = tamagotchi.sleepiness

    tamagotchiIsDead()
}
setInterval(getSleepy, 10000);



const timeAge = () => {
    let petAge = document.querySelector('#petAge')
    tamagotchi.age += 1
    petAge.innerText = tamagotchi.age

    if (tamagotchi.age == 5) {
        alert ("Your pet is evolving!");
        
        
        document.body.querySelector("img").setAttribute("src", "./images/catbug-smile.gif")

    
    }
}
setInterval(timeAge, 5000);

console.log("tamagotchi-image")

const tamagotchiIsDead = () => {
    if(tamagotchi.hunger >= 10 || tamagotchi.sleepiness >= 10 || tamagotchi.boredom >= 10){
        alert(`Your pet has died`)
      
        document.body.querySelector("img").setAttribute("src", "./images/catbug-sad.gif")

    }
}


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

const clickFeed = () => {
    tamagotchi.clickFeed()
    document.querySelector('#hungerLevel').innerText = tamagotchi.hunger
}

const clickSleep = () => {
    tamagotchi.clickSleep()
    document.querySelector('#sleepyLevel').innerText = tamagotchi.sleepiness
}

const clickPlay = () => {
    tamagotchi.clickPlay()
    document.querySelector('#boredomLevel').innerText = tamagotchi.boredom
}

// these are the event listeners for the buttons I created 
console.log(document.getElementById('feed'))
document.getElementById('feed').addEventListener('click', clickFeed)
document.getElementById('light').addEventListener('click',clickSleep)
document.getElementById('play').addEventListener('click', clickPlay)
