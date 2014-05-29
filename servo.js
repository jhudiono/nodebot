var five = require("johnny-five");
var Spark = require("spark-io");
var board = new five.Board({
});

board.on("ready", function() {
  var joystick = new five.Joystick({
      pins : ["A4", "A5"],
      freq: 500	
  });
  var led = new five.Led(13);
  led.strobe();

  var servo1 = new five.Servo({
     startAt: 100,
     pin : 5, 
     type : "continuous"
  }); 

  var servo2 = new five.Servo({
     startAt: 50,
     pin : 6,
     type : "continuous"
  });

  this.repl.inject({
    servo1: servo1,
    servo2: servo2,
    joystick : joystick
  });

/*
  joystick.on("axismove", function(err, timestamp) {
     console.log("LR:", this.fixed.x);
     console.log("UD:", this.fixed.y);
     console.log("MAG:", this.magnitude);
  }); */
});
