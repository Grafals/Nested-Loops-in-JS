function generateGreetings() {
    let greetings = ['Good Morning', 'Good Afternoon', 'Good Evening'];
    let outputDiv = document.querySelector('.output');
    outputDiv.innerHTML = ''; // Clear previous output

    for (let i = 0; i < greetings.length; i++) {
        for (let hour = 0; hour < 8; hour++) {
            let currentHour = hour + i * 8;
            let greetingClass = i === 0 ? 'morning' : i === 1 ? 'afternoon' : 'evening';
            let greetingText = `Hour: ${currentHour}, ${greetings[i]}`;
            outputDiv.innerHTML += `<span class="${greetingClass}">${greetingText}</span>`;
        }
    }
}

function copyCode() {
    const codeElement = document.getElementById('hourly-greetings-code');
    const codeText = codeElement.innerText;

    navigator.clipboard.writeText(codeText).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}