"use strict";

let Handlebars = require('hbsfy/runtime'),
  cakeInventory = require('./bakery.js'),
  cakeTemplate = require('../templates/cake-grid.hbs'),
  eventStuff = require('./events.js'),
  welcomeTemplate = require('../templates/welcome.hbs'),
  welcomeData = require('../templates/welcome-data.js');


  // Handlebars.registerPartial("navbar", require('../templates/partials/nav-bar.hbs'));
  // Handlebars.registerPartial("footer", require('../templates/partials/footer.hbs'));
  Handlebars.registerHelper("increment", (value) => parseInt(value) + 1);

  $("#welcome").append(welcomeTemplate(welcomeData));


  function populatePage(stuff){
    //make a div to put the rendered html
    let newDiv = document.createElement("div");
    newDiv.innerHTML = cakeTemplate(stuff);
    $("#cake-cards").append(newDiv);
    eventStuff();
  }


  cakeInventory.loadInventory()
  .then(
    (inventoryFromLoadInventoryResolve) => {
      console.log("cakePromise", inventoryFromLoadInventoryResolve);
      populatePage(inventoryFromLoadInventoryResolve);
    },
    (reason) => {
      console.log("something went really wrong.");
    });

 