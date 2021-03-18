'use strict';

// adding page pagination for gallery page

var numberOfItems = $('#gallery-container .gallery-item').length;
var limitPerPage = 6;
var totalPages = Math.ceil(numberOfItems / limitPerPage);

// add pagination buttons
$(`#gallery-container .gallery-item:gt(${limitPerPage - 1})`).hide();
$('.pagination').append(
  ` <li class="page-item current-page active"><a class="" href="javascript: void(0)">${1}</a></li>`
);
for (let i = 2; i <= totalPages; i++) {
  $('.pagination').append(
    ` <li class="page-item current-page"><a href="javascript: void(0)">${i}</a></li>`
  );
}

$('.pagination').append(
  ` <li id='next-page' class="page-item">
    <a class="" href="javascript: void(0)" aria-label="Next">
        <span aria-hidden="true">&gt;</span>
    </a>
</li>`
);

// add click listner on pagination buttons
$('.pagination li.current-page').on('click', function (e) {
  e.preventDefault();
  if ($(this).hasClass('active')) return false;
  var currentPage = $(this).index();
  $('.pagination li').removeClass('active');
  $(this).addClass('active');

  $('#gallery-container .gallery-item').hide();
  var grandTotal = limitPerPage * currentPage;
  for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
    $(`#gallery-container .gallery-item:eq(${i})`).show();
  }
});

// add listner on pagination next button
$('#next-page').on('click', function (e) {
  e.preventDefault();
  var currentPage = $('.pagination li.active').index();
  if (currentPage == totalPages) return false;
  currentPage++;
  $('.pagination li').removeClass('active');
  $(`.pagination li:eq(${currentPage})`).addClass('active');

  $('#gallery-container .gallery-item').hide();
  var grandTotal = limitPerPage * currentPage;
  for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
    $(`#gallery-container .gallery-item:eq(${i})`).show();
  }
});

// add listner on pagination previous button
$('#prev-page').on('click', function (e) {
  e.preventDefault();
  var currentPage = $('.pagination li.active').index();
  if (currentPage <= 1) return false;
  currentPage--;
  $('.pagination li').removeClass('active');
  $(`.pagination li:eq(${currentPage})`).addClass('active');

  $('#gallery-container .gallery-item').hide();
  var grandTotal = limitPerPage * currentPage;
  for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
    $(`#gallery-container .gallery-item:eq(${i})`).show();
  }
});
