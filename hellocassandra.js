
var cql = require('node-cassandra-cql');

var client = new cql.Client({hosts: ['127.0.0.1:9042'], keyspace: 'test', username: 'testuser', password: 'testuser'});

client.execute('SELECT * FROM test_table', [],

  function(err, result) {

    if (err) {
		console.log('execute failed', err);

    } else {
		for (var i = 0; i < result.rows.length; i++) {
			console.log('id=' + result.rows[i].get('id') + ' test_value=' + result.rows[i].get('test_value'));
		}
		
		process.exit(0);
    }

  }
);