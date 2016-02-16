(function() {
        var mysql = require('mysql');

        function Database() {
            var conn;

            var _createConnection = function() {
                var conn = mysql.createConnection({
                        host : "localhost",
                        user : "milari",
                        password : "milari",
                        database : "milari"
                });
                return conn;
            };

            this.close = function() {
                conn.end(function(err) {
                    if(err) {
                        console.log("Connection cannot be Closed");
                        console.log(err);
                        return;
                    }
                    console.log("Connection closed successfully");
                });
            };

            this.createConnection = function() {
                if(!conn) {
                    conn = _createConnection();
                    conn.connect(function(err) {
                        if(err) {
                            console.log("Error connecting to Database");
                            return;
                        }
                        console.log("Connection established");
                    });
                    return conn;
                } else {
                    console.log("Using existing connection");
                    return conn;
                }
            };
        }
        
        var db_instance;

        if(!db_instance) {
            db_instance = new Database();
        }
       
        module.exports = db_instance;
})();

