
export class Bottles {
    constructor() { }

    verse(qty) {
        const describe = new BottleDescribe(qty)
        const consume = new BottleConsume(qty)
        return `${describe.verse()}${consume.verse()}`
    }

    verses(startQty, endQty) {
        const verses = []

        while (startQty >= endQty) {
            verses.push(this.verse(startQty))
            startQty--
        }

        return verses.join('\n')
    }

    song() {
        return this.verses(99, 0)
    }

    static name(qty) {
        return qty > 1 ? 'bottles' : 'bottle'
    }
}

class BottleDescribe {
    constructor(bottles) {
        this.bottles = bottles
    }

    verse() {
        return `${this.description()} on the wall, ${this.description().toLocaleLowerCase()}.\n`
    }

    description() {
        if (this.bottles <= 0) {
            return `${this.noBottles()} of milk`
        }

        return `${this.someBottles()} of milk`
    }

    someBottles() {
        return `${this.bottles} ${Bottles.name(this.bottles)}`
    }

    noBottles() {
        return 'No more bottles'
    }
}


class BottleConsume {
    constructor(bottles) {
        this.bottles = bottles
    }

    verse() {
        switch (this.bottles) {
            case 1:
                return this.takeLastBottle()
            case 0:
                return this.buyMore()
            default:
                return this.takeOneBottle()
        }
    }

    takeOneBottle() {
        const remainingBottles = this.bottles - 1
        return `Take one down and pass it around, ${remainingBottles} ${Bottles.name(remainingBottles)} of milk on the wall.\n`;
    }

    takeLastBottle() {
        return 'Take it down and pass it around, no more bottles of milk on the wall.\n'
    }

    buyMore() {
        return 'Go to the store and buy some more, 99 bottles of milk on the wall.\n';
    }
}