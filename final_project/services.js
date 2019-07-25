var shuffle = function (array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

};

const createRandomDuplicates = a => {
    var list = [];
    for (var i = 1; i <= a; i++) {
        list.push(i);
        list.push(i);
    }
    console.log(shuffle(list))
    return shuffle(list);
}

app.value('cardValues', {
    data: {
        guesses: 0,
        allCards: [],
        found: []
    }
})

app.service('cardService', function (cardValues) {

    this.makeGuess = (i, j) => {
        cardValues.data.guesses++
        console.log(cardValues.data.allCards[i] === cardValues.data.allCards[j])
        console.log(cardValues.data.allCards[i], cardValues.data.allCards[j])

        if (cardValues.data.allCards[i] === cardValues.data.allCards[j]) {
            cardValues.data.found.push(cardValues.data.allCards[i])
            console.log(cardValues.data)
            return true
        }
        return false
    }

    this.reset = () => {
        cardValues.data = {
            guesses: 0,
            allCards: [],
            found: []
        }
    }

    this.startGame = (i) => {
        console.log(i)
        cardValues.data = {
            guesses: 0,
            allCards: createRandomDuplicates(i),
            found: []
        }
    }
})