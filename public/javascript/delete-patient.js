async function deletePatientFormHandler(event) {
    event.preventDefault();

    const roomNumber = document.querySelector('#delete-patient').value.trim();

    console.log('<------AAAAA------>')
    if (roomNumber) {
        await fetch('/api/patient', {
            method: 'DELETE',
            body: JSON.stringify({
                roomNumber
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        await fetch('/api/visitor', {
            method: 'DELETE',
            body: JSON.stringify({
                roomNumber
            }),
            headers: { 'Content-Type': 'application/json' }
        })
    }
    location.reload();
    // return body
    console.log('<------DELETE PATIENT------>')
}

document
  .querySelector("#delete-patient-form")
  .addEventListener("submit", deletePatientFormHandler);