const input = document.getElementById('input');
const button = document.getElementById('button');
const messageContainer = document.getElementById('messages');
const questions = ['Question 1', 'Question 2', 'Question 3', 'Question 4'];

function displayMessage(text, type) {
    if (text) {
        const p = document.createElement('p');
        p.textContent = text;
        p.className = type;
        messageContainer.appendChild(p);
    }
}

button.addEventListener('click', () => {
    const inputValue = input.value.trim();
    if (input.value !== '') {
        displayMessage(inputValue, 'user-message');
        input.value = "";

        setTimeout(() => {
            displayMessage("This is an automatic message!", 'auto-message');
        }, 1000);

        setTimeout(() => {
            displayQuestions();
        }, 2000);
    }
});

function displayQuestions() {
    questions.forEach((question, index) => {
        const p = document.createElement('p');
        p.textContent = question;
        p.className = 'question-message';
        messageContainer.appendChild(p);

        p.addEventListener('click', () => {
            const replies = [
                "This is the first answer!",
                "This is the second answer!",
                "This is the third answer!",
                "This is the fourth answer!"
            ];
            if (index < replies.length) displayMessage(replies[index], 'auto-message');
        });
    });
}

displayQuestions();