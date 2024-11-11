//Navbar
const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('navlinks');
hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});

//Auto Typing Animation
// Type animation functionality
const textElement = document.getElementById("type-animation");
const roles = ['I am Sumbal Naz', 'I am Frontend Developer', 'I am UX/UI Designer', 'I am Designer'];
let currentRoleIndex = 0;
let currentText = '';
let roleIndex = 0;

function typeText() {
  if (currentText.length < roles[roleIndex].length) {
    currentText += roles[roleIndex].charAt(currentText.length);
    textElement.innerHTML = currentText;
    setTimeout(typeText, 100);
  } else {
    setTimeout(deleteText, 1000);
  }
}

function deleteText() {
  if (currentText.length > 0) {
    currentText = currentText.slice(0, -1);
    textElement.innerHTML = currentText;
    setTimeout(deleteText, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeText, 500);
  }
}

typeText();

// Projects

$(document).on('click', '.project-filter li', function() {
  $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active');
});

$(document).ready(function(){
  $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if(value == 'all'){
          $('.project-box').show('1000');
      }
      else{
          $('.project-box').not('.'+value).hide('1000');
          $('.project-box').filter('.'+value).show('1000');
      }
  })
})

