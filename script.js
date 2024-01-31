const menu = document.querySelector('.menu');
const imgMenu = document.querySelector('.header_img_menu');
const btnPromos = document.querySelectorAll('.btn__promo');
const decaProdutos = document.querySelector('.deca__produtos');
const tigreProdutos = document.querySelector('.tigre__produtos');
const btnDeca = document.querySelector('.btn__deca')
const btnTigre = document.querySelector('.btn__tigre')
const btnFechaDeca = document.getElementById('fecha__deca')
const btnFechaTigre = document.getElementById('fecha__tigre')



imgMenu.addEventListener('click', carregaMenu);
menu.addEventListener('click', function () {
  if (window.innerWidth <= 700) {
    menu.style.display = 'none';
  }
});

function carregaMenu(event) {
  if (menu.style.display === 'none') {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
}

btnDeca.addEventListener('click', carregaDeca)
btnFechaDeca.addEventListener('click', function() {
  decaProdutos.style.display = 'none';
});
function carregaDeca() {

  if (decaProdutos.style.display === 'none') {
    decaProdutos.style.display = 'flex';
  } else {
    decaProdutos.style.display = 'none';
  }
}
btnTigre.addEventListener('click', carregaTigre)
btnFechaTigre.addEventListener('click', function() {
  tigreProdutos.style.display = 'none';
});
function carregaTigre() {

  if (tigreProdutos.style.display === 'none') {
    tigreProdutos.style.display = 'flex';
  } else {
    tigreProdutos.style.display = 'none';
  }
}
document.addEventListener('DOMContentLoaded', function() {
  btnPromos.forEach(function(btnPromo) {
    moveBtnPromo(btnPromo);
  });

  setInterval(function() {
    btnPromos.forEach(function(btnPromo) {
      moveBtnPromo(btnPromo);
    });
  }, 500);
});

function moveBtnPromo(btnPromo) {
  btnPromo.style.transform = 'translateY(10px)';

  setTimeout(function() {
    btnPromo.style.transform = 'translateY(0)';
  }, 100);
}
