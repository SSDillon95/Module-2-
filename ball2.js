<script>


window.onload = function() {
let velocity = 100;
let positionX = 0;
const ball = document.getElementById('ball');
const Xmin = 0;
const Xmax = 300;
setInterval(() => {
  positionX = Math.max(Xmin, Math.min(Xmax, positionX + velocity));
  ball.style.left = positionX + 'px';
  if (positionX === Xmin || positionX === Xmax) velocity *= -1;
}, 100);


};
</script>