// Thanks http://stackoverflow.com/questions/1141302/is-there-a-sleep-function-in-javascript
// this is probably not that useful, but meh I'm in the christmas spirit.
var turkey = function (delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }

// Don't judge : http://www.w3schools.com/js/js_popup.asp
var jingle = function (message){
      window.alert(message);
      } 
// I mean it http://www.w3schools.com/js/js_obj_array.asp
var wish = new Array();
