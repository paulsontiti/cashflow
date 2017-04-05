angular.module("App").service("reloadService", function ($window) {
    $window.location.reload();
    return;
});