app.controller("cardCtrl", ($scope, cardService, cardValues) => {
    $scope.gameStarted = false;
    $scope.cardData = cardValues
    $scope.numberOfCards = 1
    $scope.cardGuesses = []

    $scope.reset = () => {
        cardService.reset()
        $scope.numberOfCards = 1
        $scope.gameStarted = false
        $scope.cardGuesses = []
    }

    $scope.startGame = () => {
        $scope.gameStarted = true
        cardService.startGame($scope.numberOfCards)
        console.log(cardValues)
        console.log($scope.cardData)
    }

    $scope.select = i => {
        if ($scope.cardGuesses.length == 2) {
            $scope.cardGuesses = []
        }

        $scope.cardGuesses.push(i)
        console.log($scope.cardGuesses)
        if ($scope.cardGuesses.length === 1) {
            return
        }

        const res = cardService.makeGuess($scope.cardGuesses[0], $scope.cardGuesses[1])

    }

    $scope.getCardClass = (index, card) => {
        if ($scope.cardData.data.found.includes(card)) {
            return 'correct'
        }
        if ($scope.cardGuesses.includes(index)) {

            return 'selected'
        }
        return 'normal'
    }
})

app.controller('scoreCtrl', ($scope, cardValues) => {
    $scope.score = cardValues
})