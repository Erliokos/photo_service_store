console.log('hello');
const signupForm = document.forms.signupForm;

signupForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('submit ok')
  const dataInput = Object.fromEntries(new FormData(signupForm))
  // console.log(dataInput);
  const response = await fetch('/signup', { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataInput)
  })

});

