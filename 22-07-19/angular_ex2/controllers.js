module.controller('timeController', TimeController)

function TimeController($scope) {
    $scope.time = new Date();
    $scope.currentTime = () => $scope.time = new Date()
}

module.controller('nameController', NameController)

function NameController($scope) {
    $scope.name = 'yoav'
    $scope.reverseName = () => $scope.name = $scope.name.split("").reverse().join("");
}