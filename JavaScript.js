const yearElement = document.getElementById("currentyear");
if (yearElement) {
    yearElement.innerText = new Date().getFullYear();
}

function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    const formattedDateTime = now.toLocaleString('en-US', options);
    const datetimeElement = document.getElementById("datetime");
    
    if (datetimeElement) {
        datetimeElement.innerText = formattedDateTime;
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);