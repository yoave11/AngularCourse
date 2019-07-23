module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.devices = [
        new Mobile({ model: "IPhone X", color: "black", price: 3500 }),
        new Mobile({ model: "Xiaomi", color: "green", price: 1000 }),
        new Mobile({ model: "Samsung Galaxy 11+", color: "black", price: 5500 }),
        new Mobile({ model: "LG V60", color: "White", price: 7500 })
    ]

    $scope.remove = (index) => $scope.devices.splice(index, 1)

    $scope.add = ({ model, color, price }) => $scope.devices.push(new Mobile({ model, color, price }))
    $scope.update = ({ model, color, price }, index) => {
        if (!index || index > $scope.devices.length - 1) {
            alert('out of bounds!')
            return
        }
        $scope.devices[index] = new Mobile({ model, color, price })
    }

}