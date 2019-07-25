app.controller("postsCtrl", ($scope, postsService, httpService) => {
    $scope.data = postsService.data
    $scope.error = postsService.error
    httpService.getPosts()
    $scope.fetchPost = () => httpService.getPost($scope.id)
})

