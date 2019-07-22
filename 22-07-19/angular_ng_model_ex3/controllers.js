module.controller("formCtrl", FormCtrl)


function FormCtrl($scope) {
    console.log('fuck')
    $scope.person = new Person()
}

class Person {
    constructor({ name, age, password, gender, car, hasBike } = {}) {
        this.name = name
        this.age = age
        this.password = password
        this.gender = gender
        this.car = car
        this.hasBike = hasBike
    }
}