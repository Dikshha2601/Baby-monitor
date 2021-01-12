// var status = "";
// var img = "";
// var alarm = null;

// function preload() {
//   alarm = loadSound("alert.mp3");
//   img = loadImage("dog_cat.jpg");
// }

// function setup() {
//   canvas = createCanvas(380, 380);
//   canvas.center();
//   video = createCapture(VIDEO);
//   video.hide();
//   document.getElementById("status").innerHTML = "Status: Detecting objects";

//   objectDetection = ml5.objectDetector("cocossd", function () {
//     console.log("Model loaded");
//     status = true;
//   });
// }

// function draw() {
//   image(video, 0, 0, 380, 380);
//   objectDetection.detect(video, function (error, results) {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log(results);
//       if (results.length > 0) {
//         if (status != "" && results.length > 0) {
//           document.getElementById("status").innerHTML =
//             "Status: Objects Detected";

//           r = random(255);
//           g = random(255);
//           b = random(255);
//           for (i = 0; i < results.length; i++) {
//             if (results[i].label != "person") {
//               document.getElementById("no_of_objects").innerHTML =
//                 "Baby not found";
//               if (alarm.isPlaying() == false) {
//                 alarm.play();
//               }
//             } else {
//               document.getElementById("no_of_objects").innerHTML = "Baby found";

//               alarm.stop();
//             }
//             fill(r, g, b);
//             percent = floor(results[i].confidence * 100);
//             text(
//               results[i].label + " " + percent + "%",
//               results[i].x + 15,
//               results[i].y + 15
//             );
//             noFill();
//             stroke(r, g, b);
//             rect(
//               results[i].x,
//               results[i].y,
//               results[i].width,
//               results[i].height
//             );
//           }
//           if (results.length == 0) {
//             document.getElementById("no_of_objects").innerHTML =
//               "Baby not found";
//             if (alarm.isPlaying() == false) {
//               alarm.play();
//             }
//           } else {
//             document.getElementById("no_of_objects").innerHTML = "Baby found";

//             alarm.stop();
//           }
//         }
//       }
//     }
//   });
// }
