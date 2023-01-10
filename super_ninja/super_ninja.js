class Ninja {
    constructor(name, health = 10, speed = 3, strength = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName() {
        console.log(`Hai! My name is ${this.name}`)
    }
    showStats() {
        console.log(`Name: ${this.name}`)
        console.log(`strength: ${this.strength}`)
        console.log(`speed: ${this.speed}`)
        console.log(`health: ${this.health}`)
    }
    drinkSake() {
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10)
        this.wisdom = wisdom
    }
    speakWisdom() {
        this.drinkSake()
        console.log("Never put passion in front of principle, even if you win, you will lose")
    }
}

// const greatSensai = new Sensei("Mr. Miyagi")
// greatSensai.speakWisdom()
// greatSensai.showStats()

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
