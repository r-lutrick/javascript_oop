class Ninja {
    constructor(name, health = 10) {
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
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


// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();
module.exports = Ninja;