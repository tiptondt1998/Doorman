async function addVisitorFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#visitor-name').value.trim();
    const phoneNumber = document.querySelector('#visitor-phone-number').value.trim();
    
    if (name) {
        const response = await fetch('/api/visitor', {
            method: 'POST',
            body: JSON.stringify({
                name,
                phoneNumber
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document
  .querySelector("#add-visitor-form")
  .addEventListener("submit", addVisitorFormHandler);