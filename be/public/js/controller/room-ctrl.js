angular.module('milari').controller('roomCtrl', ['$scope', '$log', 'entity', function($scope, $log, entity) {
        $scope.test = 'Hello World';
        $scope.rooms = entity.rooms;
        $log.log("room :" + $scope.rooms);

        $scope.addRoom = function(name, capacity) {
            $log.log("Added room");
            $scope.rooms.push({"name": name, "capacity" : capacity});
        };
}]);
