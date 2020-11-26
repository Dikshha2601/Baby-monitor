var objects = [];
var status = "";
var img = "";
var alarm = null;

function preload() {
  alarm = loadSound("alert.mp3");
  img = loadImage("dog_cat.jpg");
}

function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  document.getElementById("status").innerHTML = "Status: Detecting objects";

  objectDetection = ml5.objectDetector("cocossd", function () {
    console.log("Model loaded");
    status = true;
  });
}

function draw() {
  image(video, 0, 0, 380, 380);
  objectDetection.detect(video, function (error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      objects = results;
    }
  });
  if (status != "") {
    document.getElementById("status").innerHTML = "Status: Objects Detected";

    r = random(255);
    g = random(255);
    b = random(255);
    for (i = 0; i < objects.length; i++) {
      if (objects[i].label != "person") {
        document.getElementById("no_of_objects").innerHTML = "Baby not found";
        if (alarm.isPlaying() == false) {
          alarm.play();
        }
      } else {
        document.getElementById("no_of_objects").innerHTML = "Baby found";

        alarm.stop();
      }
      fill(r, g, b);
      percent = floor(objects[i].confidence * 100);
      text(
        objects[i].label + " " + percent + "%",
        objects[i].x + 15,
        objects[i].y + 15
      );
      noFill();
      stroke(r, g, b);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
    if (objects[i].length == 0) {
      document.getElementById("no_of_objects").innerHTML = "Baby not found";
      if (alarm.isPlaying() == false) {
        alarm.play();
      }
    } else {
      document.getElementById("no_of_objects").innerHTML = "Baby found";

      alarm.stop();
    }
  }
}
