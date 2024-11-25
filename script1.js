document.getElementById('surpriseButton').addEventListener('click', function() {
    document.getElementById('birthdayMessage').textContent = "Surprise!";
    document.getElementById('subMessage').textContent = "You are awesome! Enjoy your day!";
    this.style.backgroundColor = "#ff9800"; // Change button color to show change
    this.textContent = "Enjoy your day!";
});
