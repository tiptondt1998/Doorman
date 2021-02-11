async function addPatientFormHandler(event) {
    event.preventDefault();

    const roomNumber = document.querySelector('#patient-room-number').value.trim();
    const name = document.querySelector('#patient-name').value.trim();
    const covidPositive = document.querySelector('#patient-covid-positive').value.trim();
    const finalVisit = document.querySelector('#patient-final-visit').value.trim();
    
    if (name) {
        const response = await fetch('/api/patient', {
            method: 'POST',
            body: JSON.stringify({
                roomNumber,
                name,
                covidPositive,
                finalVisit
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
  .querySelector("#add-patient-form")
  .addEventListener("submit", addPatientFormHandler);