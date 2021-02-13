async function logout() {
    const response = await fetch('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);

let timer, currentSeconds = 0;
function resetTimer() {
    clearInterval(timer);
    currentSeconds = 0;
    timer = setInterval(startIdleTimer, 1000);
}

window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onmousedown = resetTimer; 
window.ontouchstart = resetTimer; 
window.onclick = resetTimer; 
window.onkeypress = resetTimer;

function startIdleTimer() {
    currentSeconds++;
    if (currentSeconds === 600) {
       logout();
    }
}