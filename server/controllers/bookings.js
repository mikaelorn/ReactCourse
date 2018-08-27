var MongoClient = require("mongodb").MongoClient;

var uri =
	"mongodb://reactCourse:00%21DU%2ASNs%25Yy@cluster0-shard-00-00-xcl8m.mongodb.net:27017,cluster0-shard-00-01-xcl8m.mongodb.net:27017,cluster0-shard-00-02-xcl8m.mongodb.net:27017/react?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

var bookings = () => {
	function create(req, res) {
		const promise = new Promise((resolve, reject) => {
			return MongoClient.connect(uri)
				.then(db => {
					return db
						.collection("bookings")
						.insertOne(req.body)
						.then(result => {
							res.send(result);
							resolve(result);
						});
				})
				.catch(err => {
					console.log("ERROR----->", err);
				});
		});

		return promise;
	}
	function read(req, res) {
		const promise = new Promise((resolve, reject) => {
			return MongoClient.connect(uri).then(db => {
				return db
					.collection("bookings")
					.find({})
					.toArray((err, result) => {
						if (err) {
							res.send(err);
							reject(err);
							return;
						}
						res.send(result);
						resolve(result);
						return;
					});
			});
		});

		return promise;
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
