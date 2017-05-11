"use strict";

let cardStyle = {};

cardStyle.highlightCard = function(event) {
  // grab all the "is-clicked" elements and remove the class
  // before adding it to the latest clicked card
  var cakeCards = document.getElementsByClassName("is-clicked");
  if (cakeCards.length > 0) {
    for (var i = 0; i < cakeCards.length; i++ ) {
      $(cakeCards[i]).removeClass("is-clicked");
    }
  }
  // ".closest" find the nearest ancestor. Not EI compatible
  var card = event.target.closest(".card-wrapper");
  $("#editInput").focus();
  // toggle the "is-clicked" class to change border and backgd in CSS
  card.classList.add("is-clicked");
  // console.log("className", card.className);
};

// cardStyle.editCard = function() {
//   let $copy = $(".card-copy");
//   $(".is-clicked").find(".card-copy").text($("#editInput").val());
// };

module.exports = cardStyle;