angular.module('app')

.controller('ApplicationCtrl', function($scope, UserSvc) {
    $scope.$on('login', function(_, user) {
        $scope.currentUser = user
        console.log($scope.currentUser + "FROM MAIN CONTROLLER")
    })

    $scope.logOut = function () {
        $scope.currentUser = null;
        UserSvc.clearToken();
        console.log("LOGGED OUT")
    }
})