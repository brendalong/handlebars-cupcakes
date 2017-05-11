"use strict";
var inventory = [];
var bakery = {};

var fillInventory = (data) => {
  data.cakes.forEach(function(element){
    inventory.push(element);
  });
};

bakery.getInventory =  () => {
  return inventory;
};

bakery.loadInventory =  () => {
  return new Promise( function (resolve, reject) {
    var inventoryLoader = new XMLHttpRequest();
    inventoryLoader.open("GET", "inventory.json");
    inventoryLoader.send();

    inventoryLoader.addEventListener("load", function() {
      var data = JSON.parse(this.responseText);
      resolve(data); // No longer responsible for calling populatePage function
    });
  });
};

module.exports = bakery;
