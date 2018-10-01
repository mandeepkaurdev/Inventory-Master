// Require all models
const db = require('../models');

// module.exports exports this function so it can be required by another file (in this case, server.js)
// Must pass in app because it contains the Express application
module.exports = function (app) {

    /* --- PHASE 2 - WRITE THE ROUTES --- */

    // Route for retrieving all Inventory from the database via a GET request
    app.get('/api/inventory', function (req, res) {
        // Find all Inventory
        db.Inventory.find({})
            .then(function (dbInventory) {
                // If all Inventory are successfully found, send them back to the client
                res.json(dbInventory);
            })
            .catch(function (err) {
                // If an error occurs, send the error back to the client
                res.json(err);
            });
    });

  // Route for saving a new Inventory entry to the database via a POST request
  app.post('/api/inventory', function (req, res) {
    // Create a new Inventory entry in the database
    db.Inventory.create(req.body)
        .then(function (dbInventory) {
            // Then send the results to the client
            res.json(dbInventory);
        })
        .catch(function (err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
});


    // Route for saving updates to inventory
    app.put('/api/inventory', function (req, res) {
        // Find an entry by ID and set the item count to the incoming item count
        db.Inventory.findOneAndUpdate({itemID: req.body.itemID}, {$set: {itemCount: req.body.itemCount}})
            .then(function (dbInventory) {
                // Then send the results to the client
                res.json(dbInventory);
            })
            .catch(function(err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    });
};