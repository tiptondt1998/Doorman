async function addVisitorFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#visitor-name').value.trim();
    const phoneNumber = document.querySelector('#visitor-phone-number').value.trim();
    const roomNumber = document.querySelector('#visitor-room-number').value.trim();
    console.log('<------AAAAA------>')
    if (name) {
        await fetch('/api/visitor', {
            method: 'PATCH',
            body: JSON.stringify({
                name,
                phoneNumber,
                roomNumber
            }),
            headers: { 'Content-Type': 'application/json' }
        })
    }
    // return body
    console.log('<------AAAAA------>')
}

document
  .querySelector("#add-visitor-form")
  .addEventListener("submit", addVisitorFormHandler);
  
//   fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));