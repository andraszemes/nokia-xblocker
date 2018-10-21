//menu handler
$('.burger.navbar-burger').on('click', function () {
  if(!$('.navbar-menu').hasClass('is-flex')) {
    if($('.navbar-menu').hasClass('is-none'))
      $('.navbar-menu').removeClass('is-none');
    $('.navbar-menu').addClass('is-flex');
  }
  else {
    $('.navbar-menu').removeClass('is-flex');
    $('.navbar-menu').addClass('is-none');
  }
});

//children controls
$('[name=editChild]').on('click', function () {

});

$('[name=removeChild]').on('click', function () {
  let childID = $(this).closest('.child').attr('id');
  $('#removeModal').toggleClass('is-flex');
  console.log(childID);
});

$('[role=closeModal]').on('click', function () {
  $(this).closest('.modal').toggleClass('is-flex');
});

//registration

var s1 = {
  name: $('input[name="name"]'),
  surname: $('input[name="surname"]'),
  email: $('input[name="email"]')
};

var s2 = {
  pwd: $('input[name="password"]'),
  pwd_rep: $('input[name="password_rep"]'),
  agreement: $('input[name="agreement"]')
}

var btn = {
  nxt: $('[name="buttonNext"]'),
  bck: $('[name="buttonBack"]')
}

btn.nxt.on('click', function () {
  $('#s1').removeClass('act-slide');
  $('#s2').addClass('act-slide');
});

btn.bck.on('click', function () {
  $('#s2').removeClass('act-slide');
  $('#s1').addClass('act-slide');
});

//validation
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateLettersOnly(str) {
  var letters = /^[A-Za-z]+$/;
  return letters.test(str);
}
