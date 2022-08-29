// import './lib/lib';
import $ from './lib/lib';

$('button').on('click', function(){
  $(this).toggleClass('active');
});

$('button').fadeIn(4800);