angular.module("App", ["ngRoute", "Dashboard"])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "/users/home.html",
            controller: "MainController",
            css: ["https://fonts.googleapis.com/css?family=Roboto:700,400&amp;subset=cyrillic,latin,greek,vietnamese", "../assets/bootstrap/css/bootstrap.min.css",
                "assets/mobirise/css/style.css", "assets/dropdown-menu/style.css",
                "assets/mobirise-slider/style.css", "assets/mobirise/css/mbr-additional.css"
            ]
        }).when("/signup", {
            templateUrl: "/users/signup.html",
            css: ["https://fonts.googleapis.com/css?family=Roboto:700,400&amp;subset=cyrillic,latin,greek,vietnamese", "../assets/bootstrap/css/bootstrap.min.css",
                "assets/mobirise/css/style.css", "assets/dropdown-menu/style.css",
                "assets/mobirise-slider/style.css", "assets/mobirise/css/mbr-additional.css"
            ],controller:"SignUpController"
        }).when("/register", {
            templateUrl: "/users/register.html",
            css: ["https://fonts.googleapis.com/css?family=Roboto:700,400&amp;subset=cyrillic,latin,greek,vietnamese", "../assets/bootstrap/css/bootstrap.min.css",
                "assets/mobirise/css/style.css", "assets/dropdown-menu/style.css",
                "assets/mobirise-slider/style.css", "assets/mobirise/css/mbr-additional.css"
            ],controller:"RegisterController"
        }).when("/login", {
            templateUrl: "/users/login.html",
            controller: "LoginController",
            css: ["https://fonts.googleapis.com/css?family=Roboto:700,400&amp;subset=cyrillic,latin,greek,vietnamese", "../assets/bootstrap/css/bootstrap.min.css",
                "assets/mobirise/css/style.css", "assets/dropdown-menu/style.css",
                "assets/mobirise-slider/style.css", "assets/mobirise/css/mbr-additional.css"
            ]
        }).when("/dashboard", {
            templateUrl: "/users/dashboard.html",
            controller: "DashboardController",
            css: ["../assets/bootstrap/css/bootstrap.min.css", "../assets/dashboard/css/sb-admin.css", "../assets/dashboard/css/morris.css", "../assets/dashboard/css/font-awesome.min.css"]
        }).when("/admin", {
            templateUrl: "/admin/dashboard.html",
            controller: "AdminDashboardController",
            css: ["../assets/bootstrap/css/bootstrap.min.css", "../assets/dashboard/css/sb-admin.css", "../assets/dashboard/css/morris.css", "../assets/dashboard/css/font-awesome.min.css"]
        });
    })
    .controller("MainController", ["$rootScope", "$window", "$location", function ($rootScope, $window, $location) {
        $rootScope.title = "Home";
        $rootScope.hideNavbar = true;
    }]);