(function(){
  "use strict";

  var Moosipurk = function() {

    // SINGLETON PATTERN
    if(Moosipurk.instance) {
      return Moosipurk.instance;
    }

    Moosipurk.instance = this; // this viitab moosipurgile

    console.log(this);
    //console.log('moosipurgi sees');
    this.init(); // Panen rakenduse tööle
    };

    //Kõik moosipurgi fn tulevad siia sisse
    Moosipurk.prototype = {
      init: function() {
        console.log('Rakendus OK');
        //Siia tuleb esialgne loogika
        //Hakka kuulama hiireklõpse
        this.bindMouseEvents();
      },
      bindMouseEvents: function() {
        document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));
      },
      addNewClick: function(event) {
        console.log(event);

      }



    };


    window.onload = function() {
      var app = new Moosipurk();

    };



}) ();
