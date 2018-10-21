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

$('[role=closeModal]').on('click', function () {
  $(this).closest('.modal').toggleClass('is-flex');
});

function editChild(src) {
  let childID = $(src).closest('.child').attr('id');
  location.replace('/xblocker/pages/editChild.php?chuid='+childID);
}

function remChild(src) {
  let childID = $(src).closest('.child').attr('id');
  $('[name=chuid]').val(childID);
  $('#removeModal').toggleClass('is-flex');
}

$('body').on('click', '.filterEntryRemove', function () {
  let fid = $(this).closest('tr')[0].id;
  $('#removeFilterModal').toggleClass('is-flex');
  $('[name=fid]').val(fid);
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
  agrmt: $('input[name="agreement"]')
}

var btn = {
  nxt: $('[name="buttonNext"]'),
  bck: $('[name="buttonBack"]'),
  sbmt: $('[name="submit"]')
}

btn.nxt.on('click', function () {
  $('#s1').removeClass('act-slide');
  $('#s2').addClass('act-slide');
});

btn.bck.on('click', function () {
  $('#s2').removeClass('act-slide');
  $('#s1').addClass('act-slide');
});

$('#registerForm').on('keyup', function () {
  if(validateLettersOnly(s1.name.val()) && validateLettersOnly(s1.surname.val()) && validateEmail(s1.email.val())) {
    btn.nxt.removeAttr('disabled');

    if(s2.pwd.val().length > 5) {
      if((s2.pwd.val() == s2.pwd_rep.val())) {
        btn.sbmt.removeAttr('disabled');
      }
      else {
        btn.sbmt.prop('disabled', true);
      }
    }
  }
  else {
    btn.nxt.prop('disabled', true);
  }
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
