var MongoClient = require("mongodb").MongoClient;

var uri =
	"mongodb://reactCourse:00%21DU%2ASNs%25Yy@cluster0-shard-00-00-xcl8m.mongodb.net:27017,cluster0-shard-00-01-xcl8m.mongodb.net:27017,cluster0-shard-00-02-xcl8m.mongodb.net:27017/react?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

var bookings = () => {

	function create(req, res) {

	}
	function read(req, res) {
		
	}
	function update() {}
	function remove() {}

	return {
		create,
		read,
		update,
		remove
	};
};

module.exports = bookings();
