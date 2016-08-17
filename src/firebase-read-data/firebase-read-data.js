(function() {
  'use strict';

  Polymer({

    is: 'firebase-read-data',
    properties: {
        /**
         *  data object
         */
        data: {
          type: Object,
          notify:true,
          observer:"_syncFirebase"
        },
        /*
        * Id clave for search 
        */
        uid: {
          type: Number,
          notify: true
        },
        /*
        * Path where you send de firebase db consult("table db about to consult")
        */
        path: {
          type: String,
          value:"/"
        },
        /*
        * Name of firebase app, this name must be similar to firebase-app name
        */
        appName: {
          type: String,
          value:""
        },
        /*
        *Response from  firebase
        */
        response:{
          type: Object,
          notify: true
        },
        /*
        *Array with the object mapped from firebase
        */
        listData:{
          type:Array,
          value: [],
          notify:true
        },
        uidSearch:{
          type:String,
          value:"",
          observer: "exist"
        }
      
      },
      /*
      *return tru if exist te uid in firebase database.
      */
      exist: function(){
        var self = this;
        var query = this.$.query;
        if(this.$.query.ref && this.uidSearch){
          this.$.query.ref.once("value")
          .then(function(snapshot) {
            self.fire("exist-item", snapshot.child(self.uidSearch).exists()); // true       
      });
    }
    }
  });
}());
