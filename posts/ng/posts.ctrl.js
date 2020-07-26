angular.module('app')

.controller('PostsCtrl', function ($scope, PostsSvc, UserSvc) {

    $scope.isLogged = false;

    $scope.close = function (){
        $scope.isLogged = false;
    }

    PostsSvc.fetch().then(function (posts) {
            $scope.posts = posts.data
    }, function (error) {
            console.log("Error saving data")
        })


    $scope.addPost = function() {
        if($scope.postBody) {
       PostsSvc.create({
            username: 'donaldDuck',
            body: $scope.postBody
        }).then(function (post) {
            console.log(post)
            $scope.posts.unshift(post.data)
            $scope.postBody = null
        }, function (error) {
            $scope.isLogged = true
            console.log("Error saving data")
        })
        $scope.isLogged = false
    }

    }

    $scope.$on('login', function(_, user) {
        $scope.currentUser = user
    })
    
})