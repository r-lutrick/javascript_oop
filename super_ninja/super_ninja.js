const Ninja = require("../ninja/ninja")

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10)
        this.wisdom = wisdom
    }
    speakWisdom() {
        this.drinkSake()
        console.log("Never put passion in front of principle, even if you win, you will lose")
    }
    showStats() {
        super.showStats()
        console.log(`Wisdom: ${this.wisdom}`)
    }
}

const greatSensai = new Sensei("Mr. Miyagi")
greatSensai.speakWisdom()
greatSensai.showStats()