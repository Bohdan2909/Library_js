import $ from './lib/lib';

$('#first').on('click', () => {
  $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
  $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
  $('.w-500').fadeToggle(800);
});
$('.wrap').html(
  `
       <div class="dropdown">
         <button class="btn btn-primary dropdown-toggle" id="dropDownMenuButton">Drop down</button>

         <div class="dropdown-menu" data-toggle-id="dropDownMenuButton">
             <a class="dropdown-item" href="#">Action</a>
             <a class="dropdown-item" href="#">Action#2</a>
             <a class="dropdown-item" href="#">Action#3</a>
         </div>
       </div> 
  `
);
$('.dropdown-toggle').dropdown();

 $('#trigger').click(() => $('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolore iusto deleniticonsequatur hic praesentium soluta est doloremque quam'
  },
  btns: {
    count: 2,
    settings: [
      [
        'Close',
        ['btn-danger', 'mr-10'],
        true
      ],
      [
        'Save',
        ['btn-success'],
        false,
        () => {
          alert('Дані збережено');
        }
      ]
    ]
  }
 }));