angular.module("App").controller("RegisterController",
    ["$rootScope", "$routeParams", "$scope", "$http", "$location", "$timeout",
function ($rootScope, $routeParams, $scope, $http, $location, $timeout) {
    $rootScope.title = "Registration";

    $rootScope.hideNavbar = true;


    $scope.package = $routeParams.package;

    if ($scope.package == "Bronze") {
        $scope.price = "5,000";
    } else if ($scope.package == "Silver") {
        $scope.price = "10,000";
    } else if ($scope.package == "Gold") {
        $scope.price = "20,000";
    } else if ($scope.package == "Diamond") {
        $scope.price = "50,000";
    }

    $scope.captchaAns = 10;

    $scope.register = function () {
        if ($scope.signupForm.$valid) {
            if ($scope.usernameExists) {
                $scope.usernameErr = true;
                $scope.showUsernameErr = true;
            } else if ($scope.passwordDoNotMatch) {
            } else if ($scope.userAns != $scope.captchaAns) {
            } else {
                $http({
                    url: "/user/register",
                    method: "post",
                    data: {
                        referral: $scope.referral,
                        fullname: $scope.fullname,
                        gender: $scope.gender,
                        state: $scope.state,
                        mobile: $scope.mobile,
                        email: $scope.email,
                        username: $scope.username,
                        password: $scope.password
                    }
                }).then(function (res) {
                    if (res.data.username) {
                        sessionStorage.setItem("user", JSON.stringify(res.data));
                        $location.search("");
                        $location.path("/dashboard");
                        //$scope.time = 5;
                        //$scope.suc = true;
                        //function timing() {
                        //    if ($scope.time > 0) {
                        //        $timeout(timing, 1000);
                        //    }
                        //    $scope.time--;
                        //}
                        //$timeout(timing, 1000);
                        //$timeout(function () {
                        //}, 5000);
                    }
                })
            }
        } else {
            if ($scope.signupForm.$error.required) {
                var len = $scope.signupForm.$error.required.length;
                for (var i = 0; i < len; i++) {
                    $scope[$scope.signupForm.$error.required[i].$name] = true;
                }
            }
        }
    }
}])