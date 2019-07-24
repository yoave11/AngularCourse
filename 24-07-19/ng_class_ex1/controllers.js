const isEmpty = s => !s || s === ''

module.controller("colorCtrl", ($scope) => {

    $scope.getClass = () => {
        var { name, age, email } = $scope
        if (isEmpty(name) && isEmpty(age) && isEmpty(email))
            return 'empty'
        if (isEmpty(name) || isEmpty(age) || isEmpty(email))
            return 'partial'
        if (age < 18)
            return 'underage'
        else
            return 'filled'
    }
})

