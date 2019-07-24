
app.controller("inputCtrl", ($scope, inputService, historyService) => {
    $scope.inputs = inputService.inputs
    $scope.$watch('inputs.a', (a) => historyService.updateA(a)) 
    $scope.$watch('inputs.b', (b) => historyService.updateB(b)) 
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
        return `${resType}_${res > 0 ? 'pos' : 'neg'}`
    }

})

app.controller("aCtrl", ($scope, aService) => {
    $scope.calculate = () => aService.get()
})

app.controller("bCtrl", ($scope, bService) => {
    $scope.calculate = () => bService.get()
})

app.controller("historyCtrl", ($scope, historyService) => {
    $scope.aChanges = historyService.aChanges
    $scope.bChanges = historyService.bChanges

})

