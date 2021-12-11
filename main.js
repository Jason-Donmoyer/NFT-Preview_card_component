const eyeImg = document.getElementById('eye-icon');
const imgContainer = document.getElementById('main-image-container');


imgContainer.addEventListener('mouseover', () => {
  eyeImg.style.display = 'block';
});

imgContainer.addEventListener('mouseout', () => {
  eyeImg.style.display = 'none';
});