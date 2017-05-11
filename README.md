# Handlebars and Cupcakes - Yum!

## Goals
* Load a json file with data
* Display items on page utilizing browserify and handlebars


### Get Started
1. Setup basic files and folder structure: index.html, sass/main.scss, css, dist, images, javascripts/main.js
2. Install Browserify and Handlebars
3. Setup Gruntfile - include path to hbsfy
4. link app.js to the index.html
4. Start server and run grunt - make sure everything is working.


### Show me the Cakes!
1. Review json file
2. Goal: Display each item in a card with click functionality.
3. Start `index.html` 
4. `main.js`: Add require `Handlebars` and `cakeInventory`
5. `main.js`: Create method to load inventory
6. `bakery.js`: Handles data. Create promise for load data and parse.
7. `bakery.js`: Export methods `module.exports = bakery;`
8. `main.js`: Create method to populate page - **how about a template**
9. `templates/cake-grid.hbs`: Add to `main.js` require items
10. **Be sure** to create a helper for increment `registerHelper`
11. Include welcome header - template and data.