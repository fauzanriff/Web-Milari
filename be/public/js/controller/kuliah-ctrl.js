angular.module('milari').controller('kuliahCtrl', ['$scope', '$log', 'entity', function($scope, $log, entity) {
        $scope.test = 'Hello World';
        $scope.kuliahs = entity.kuliahs;
        $log.log($scope.rooms);
}]);
