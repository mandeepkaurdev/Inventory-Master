const mongoose = require('mongoose');

/* --- PHASE 1 - WRITE THE INVENTORY MODEL --- */

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
const InventorySchema = new Schema({

// This creates our model from the above schema, using Mongoose's model method
itemName: {
    type: String,
    unique: true,
    required: "You must include an item count"
  },

  itemCount: {
    type: String,
    required: "You must include an item count"
  },

  itemID: {
    type: String,
    unique: true,
    required: "You must include an item count"
  },

});

const Inventory = mongoose.model("Inventory", InventorySchema);

// Export the Inventory model
module.exports = Inventory;
