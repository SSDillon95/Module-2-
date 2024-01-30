window.onload = function() {
  var velocity = 5;
  var positionX = 0;
  var positionY = 0;
  
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;



  const ball = document.getElementById('ball');
  const ball1 = document.getElementById('ball1');
  let reverseX = false;
  let reverseY = false;

  function moveBall() {
    positionX = Math.max(Xmin, Math.min(Xmax, positionX + (reverseX ? -velocity : velocity)));
    ball.style.left = positionX + 'px';

    positionY = Math.max(Ymin, Math.min(Ymax, positionY + (reverseY ? -velocity : velocity)));
    ball.style.top = positionY + 'px';

    // ball 1

    positionX = Math.max(Xmin, Math.min(Xmax, positionX + (reverseX ? -velocity : velocity)));
    ball1.style.left = positionX + 'px';

    positionY = Math.max(Ymin, Math.min(Ymax, positionY + (reverseY ? -velocity : velocity)));
    ball1.style.top = positionY + 'px';


    // Reverse direction when reaching X boundaries
    if (positionX <= Xmin || positionX >= Xmax) {
      reverseX = !reverseX;
    }

    // Reverse direction when reaching Y boundaries
    if (positionY <= Ymin || positionY >= Ymax) {
      reverseY = !reverseY;
    }
  }

  

  setInterval(moveBall, 100);
};