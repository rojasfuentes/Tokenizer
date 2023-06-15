document.addEventListener('DOMContentLoaded', function() {
  var backButton = document.querySelector('.buttons_back');
  var starIcon = document.getElementById('star-icon');
  const container = document.querySelector('.container');
  const documentator = document.querySelector('.documentator');

  backButton.addEventListener('click', function() {
    container.classList.remove('off');
    documentator.classList.add('off');
  });

  starIcon.addEventListener('click', function() {
    container.classList.add('off');
    documentator.classList.remove('off');
  });
});

