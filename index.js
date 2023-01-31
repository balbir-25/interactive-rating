const buttons = document.querySelectorAll('.li-btn');
const submitBtn = document.querySelector('.rate-btn');
const rating = document.querySelector('.rating');
const mainRate = document.querySelector('.main-rate');
const thank = document.querySelector('.thank');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('selected'));
    this.classList.add('selected');
  });
});

submitBtn.addEventListener('click', function() {
  mainRate.style.display = 'none';
  thank.classList.remove('hidden');
  let selectedBtn = document.querySelector('.selected');
  rating.innerHTML = selectedBtn.innerHTML;
});