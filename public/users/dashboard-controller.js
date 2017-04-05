angular.module("Dashboard",[])
.controller("DashboardController",
["$rootScope", "$scope","$window","$location", function ($rootScope,$scope,$window,$location) {
    if (sessionStorage.getItem("user") == null) {
        $location.path("/login");
    }
    $rootScope.title = "Dashboard";
    $rootScope.hideNavbar = false;
    $scope.user = JSON.parse(sessionStorage.getItem("user"));
    $scope.logout = function () {
        sessionStorage.removeItem("user");
        $location.path("/");
    }
}]);