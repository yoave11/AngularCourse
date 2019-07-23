module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $rootScope.devices = [
        new Mobile({ model: "IPhone X", color: "black", price: 3500 }),
        new Mobile({ model: "Xiaomi", color: "green", price: 1000 }),
        new Mobile({ model: "Samsung Galaxy 11+", color: "black", price: 5500 }),
        new Mobile({ model: "LG V60", color: "White", price: 7500 })
    ]

    $scope.remove = (index) => $rootScope.devices.splice(index, 1)

    $scope.add = ({ model, color, price }) => $rootScope.devices.push(new Mobile({ model, color, price }))
    $scope.update = ({ model, color, price }, index) => {
        if (!index || index > $rootScope.devices.length - 1) {
            alert('out of bounds!')
            return
        }
        $rootScope.devices[index] = new Mobile({ model, color, price })
    }

    $scope.select = index => {
        console.log(index)
        $scope.selected = index
    }
}

module.controller("footerCtrl", ($scope, $rootScope) => {

})