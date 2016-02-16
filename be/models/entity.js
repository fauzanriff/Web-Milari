(function() {
        var Database = require("./database-connection.js");
        var conn = Database.createConnection();

        function dateChanger(key, value) {
            if (value.toString().indexOf("00:00") > -1) {
                var newVal = value.replace("T17:00:00.000Z",'');
                return newVal;
            }
            return value;
        }

        function Entity(database, primaryColumn, data) {
            this.database = database;
            this.primaryColumn = primaryColumn;
            this.data = data;

            /* CREATE */
this.create = function(callback) {
    var queryString = 'INSERT INTO ' + database + ' SET ?';
    conn.query(queryString, data, function(err, res) {
        if(err) {
            console.log(err);
            callback(err);
        }
        callback(null, JSON.stringify(res));
    });
};

/* READ */
this.read = function(callback) {
    var queryString = 'SELECT * FROM ' + database + ' WHERE ' + primaryColumn + ' = ? ';
    console.log(queryString);
    conn.query(queryString, [data[primaryColumn]],function(err,rows){
        if(err) {
            console.log(err);
            callback(err);
        }
        var resJson = JSON.stringify(rows, dateChanger);
        console.log(resJson);
        callback(null, resJson);
    });
};

/* UPDATE */
this.update = function(callback) {
    var queryString = 'UPDATE ' + database + ' SET ? WHERE ' + primaryColumn + ' = ' + data[primaryColumn];
    conn.query(queryString, data, function(err, res) {
        if(err) {
            console.log(err);
            callback(err);
        }

        callback(null, JSON.stringify(res));
    });
    };


    /* DELETE */
this.delete_ = function(callback) {
    var queryString = 'DELETE FROM ' + database + ' WHERE ' + primaryColumn + ' = ?';
    conn.query(queryString, data[primaryColumn], function(err, res) {
        if(err) {
            console.log(err);
            callback(err);
        }
        callback(null, JSON.stringify(res));
    });
};

        }

        module.exports = Entity;
})();
