async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="Patient"]').value;
    
  
    const response = await fetch(`/api/patient`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        roomNumber
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-patient-form').addEventListener('submit', newFormHandler);
  