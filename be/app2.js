(function() {
        var Database = require("./database-connection.js");
        var Entity = require("./entity.js");
        var conn = Database.createConnection();

        var e = new Entity("t_pengguna", "nomor_identitas", {
                nomor_identitas : 13513001,
        });

        // e.create(function(err, result) {
        //     console.log("Result create : " + result);
        // });

        // e.read(function(err, result) {
        //     console.log("Result Read : " + result);
        // });

        // e.update(function(err, result) {
        //        console.log("Result update : " + result);
        // });
        //

        e.delete_(function(err, result) {
            console.log("Result delete : " + result);
        });
})();
