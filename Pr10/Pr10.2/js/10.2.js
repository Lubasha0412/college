let input = document.querySelector('input');
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    alert("Вы ввели:" + input.value);
  }
});