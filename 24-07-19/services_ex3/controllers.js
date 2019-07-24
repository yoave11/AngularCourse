
app.controller("inputCtrl", ($scope, inputService) => {
    console.log(inputService)
    $scope.inputs = inputService.inputs
})

app.controller("divCtrl", ($scope, inputService, errorService) => {
    $scope.calculate = () => {
        if (inputService.inputs.b == 0) {
            return errorService.divError
        }
        return inputService.inputs.a / inputService.inputs.b
    }

})

app.controller("sumCtrl", ($scope, inputService, errorService) => {
    $scope.calculate = () => inputService.inputs.a + inputService.inputs.b
    $scope.getClass = () => {
        const resType = inputService.inputs.resType
        const res = inputService.inputs.a + inputService.inputs.b
        console.log(`${resType}_${res > 0 ? 'pos' : 'neg'}`)
        return `${resType}_${res > 0 ? 'pos' : 'neg'}`
    }

})

app.controller("aCtrl", ($scope, aService) => {
    console.log(aService)
    $scope.calculate = () => aService.get()
})

app.controller("bCtrl", ($scope, bService) => {
    $scope.calculate = () => bService.get()
})

