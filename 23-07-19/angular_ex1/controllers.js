module.controller("calcCtrl", CalcCtrl)


function CalcCtrl($scope, $rootScope) {
    $scope.action = '+'
    $scope.res = 0
    $scope.n1 = 0
    $scope.n2 = 0

    $scope.calc = function (newAction) {
        $scope.action = newAction
        const { n1, n2 } = $scope

        switch ($scope.action) {
            case '+':
                $scope.res = n1 + n2
                break
            case '-':
                $scope.res = n1 - n2
                break
            case '*':
                $scope.res = n1 * n2
                break
            case '/':
                $scope.res = n1 / n2
                break
        }
        $rootScope.res = $scope.res
    }
}

module.controller("showCtrl", ShowCtrl)


function ShowCtrl($scope, $rootScope) {
    $scope.res = 0
    $scope.update = function () {
        $scope.res = $rootScope.res
    }
}

module.controller("resCtrl", ResCtrl)


function ResCtrl($scope, $rootScope) {
}
