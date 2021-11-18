console.log('hello');
const signinForm = document.forms.signinForm;

signinForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('submit ok');
  const dataInput = Object.fromEntries(new FormData(signinForm));
  // console.log(dataInput);
  const response = await fetch('/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataInput),
  });
  if (response.status === 400) {
    alert('Заполните все поля');
  }
  if (response.status === 500) {
    alert('Неверный логин или пароль');
  }
  if (response.status === 200) {
    window.location.pathname = '/'
  }
});
