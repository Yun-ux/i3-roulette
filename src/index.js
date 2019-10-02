import $ from 'jquery';
import { randNumber } from './app/rand';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/droppable';


// ------- BUTTON CLICK + ROULETTE SPIN------
$('.btn').on('click', () => {
  const ball = $('.ball2');
  ball.css({
    transform: 'rotate(360deg)',
  }, 1000);
});
// --- TOKEN DRAG -------
$(function () {
  $('.token').draggable();
});

// ------- CHIBI ANIMATION-----
$('.chibi').on('mouseover', () => {
  const chibi = $('.chibi');
  chibi.css({
    transform: 'rotate(50deg)',
  }, 1000);
  $('.chibi').on('mouseout', () => {
    chibi.css({
      transform: 'rotate(0deg)',
    }, 1000);
  });
});

// --- lines numbers ---

const lines = $('#lines');
for (let i = 1; i <= 36; i++) {
  const nb = $(`<div id="n${i}">${i}</div>`);
  lines.append(nb);
}

//

$('#lines').on('click', function () {
  // pour récuperer le texte de la div, ici le numero
  const clickedNb = $(this).text();
  $(this).append('<div class="jeton">1€</div>');
});

// ---- random number ----
$('.btn').on('click', function () {
  const rand = randNumber(0, 36);
  console.log(rand);
});
