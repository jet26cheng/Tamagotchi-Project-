
// make a tamagotchi class
class Tamagotchi {
    constructor(hunger,sleepiness, boredom, age, name) {
        this.age = 0;
        this.boredom = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        this.name = name;
    }

// make a game object 
// class Game { 
//     constructor() {
//         this.tamagotchi = new Tamagotchi(0, 0, 0, 0, "");
        


//     }
    // let tamagotchi = new Tamagotchi(0,0,0,0, "")
    clickPlay() {
        if(this.boredom >= 0) {
            this.boredom-= 1;  
        }
    }

    clickFeed() {
        if(this.hunger >= 0) {
            this.hunger-= 1;  
        }
    }
    

    clickSleep() {
        if(this.sleepiness >= 0) {
            this.sleepiness-= 1;  
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
    this.hunger += 1 
    hungerLevel.innerText = this.hunger

    
   
}
setInterval(getHungry,10000);

const getBored = () => {
    let boredomLevel = document.querySelector('#boredomLevel')
    this.boredom += 1
    boredomLevel.innerText = this.boredom
}
setInterval(getBored, 10000);

const getSleepy = () => {
    let sleepyLevel = document.querySelector('#sleepyLevel')
    this.sleepiness += 1 
    sleepyLevel.innerText = this.sleepiness
}
setInterval(getSleepy, 10000);



const timeAge = () => {
    let petAge = document.querySelector('#petAge')
    this.age += 1
    petAge.innerText = this.age


}
setInterval(timeAge, 10000);
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
    this.clickFeed()
    document.querySelector('#hungerLevel').innerText = this.hunger
}

const clickSleep = () => {
    this.clickSleep()
    document.querySelector('#sleepyLevel').innerText = this.sleepiness
}

const clickPlay = () => {
    this.clickPlay()
    document.querySelector('#boredomLevel').innerText = this.boredom
}

// these are the event listeners for the buttons I created 
document.getElementById('feed').addEventListener('click', clickFeed)
document.getElementById('light').addEventListener('click',clickSleep)
document.getElementById('play').addEventListener('click', clickPlay)
