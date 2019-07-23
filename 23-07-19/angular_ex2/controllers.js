module.controller("calcCtrl", CalcCtrl)


function CalcCtrl($scope) {
    $scope.name=''
    $scope.$watch('name', (newName, oldName) => {
        if(newName === 'yoav' ){
            alert("That's me!")
        }
    })
}

