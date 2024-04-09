function saveMessage(event) {
    event.preventDefault();
    const message = document.getElementById("userMessage").value;
    localStorage.setItem("savedMessage", message);
    alert("Wiadomość została zapisana!");
    document.getElementById("userMessage").value = "";
}


document.getElementById("messageForm").addEventListener("submit", saveMessage);

