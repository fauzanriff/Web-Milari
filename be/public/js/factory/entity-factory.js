angular.module('milari').factory('entity', [function() {
        var entity_object = {
            rooms : [
                {
                    name : "7602",
                    capacity : 55
                },
                {
                    name : "7603",
                    capacity : 35
                },
                {
                    name : "7604",
                    capacity : 60
                },
                {
                    name : "7609",
                    capacity : 80
                }
            ],
            kuliahs: { 
                "7602": {
                    7: "Pemrograman berorientasi objek",
                    8: "PPL",
                    9: "PPL",
                    10: "IMK",
                    11: "Grafika"
                },
                "7603": {
                    7: "Facebook Internship",
                    8: "Facebook Internship",
                    9: "SEMINAR",
                    10: "Sistem Operasi",
                    11: "Sistem Operasi"
                },
                "7604": {
                    7: "MPPL",
                    8: "MPPL",
                    9: "Game Design",
                    10: "SI",
                    11: "SI"
                }    
            }    
        };
        return entity_object;
}]);
