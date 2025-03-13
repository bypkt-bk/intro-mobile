document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById('container');
  const toggleButton = document.getElementById('toggle');
  let isBlack = false;

  toggleButton.addEventListener('click', function() {
    isBlack = !isBlack;
    
    // Toggle background color
    if (isBlack) {
      container.style.backgroundColor = 'black';
      container.style.color = 'white';
      toggleButton.style.backgroundColor = 'white';
      toggleButton.style.color = 'black';
      toggleButton.style.boxShadow = '0px 0px 28px 10px rgba(255, 255, 255, 0.25)';
    } else {
      container.style.backgroundColor = 'white';
      container.style.color = 'black';
      toggleButton.style.backgroundColor = 'black';
      toggleButton.style.color = 'white';
      toggleButton.style.boxShadow = '0px 0px 28px 10px rgba(0, 0, 0, 0.25)';
    }
  });
});
