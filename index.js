// Fecha objetivo
const launchDate = new Date("2026-05-26T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = launchDate - now;

    if (diff <= 0) {
        document.querySelector(".countdown-container").innerHTML = "<div class='launched'>¡GTA VI ya está disponible!</div>";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.querySelector(".time-days").textContent = String(days).padStart(2, '0');
    document.querySelector(".time-hours").textContent = String(hours).padStart(2, '0');
    document.querySelector(".time-minutes").textContent = String(minutes).padStart(2, '0');
    document.querySelector(".time-seconds").textContent = String(seconds).padStart(2, '0');
}

// Lógica del chat (sin backend)
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.getElementById('chat-messages');

function sendMessage() {
    const messageText = chatInput.value.trim();
    if (messageText !== "") {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.textContent = messageText;
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
    }
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Inicializar y actualizar la cuenta regresiva
setInterval(updateCountdown, 1000);
updateCountdown();