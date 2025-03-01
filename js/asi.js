const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let i = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-lst').addEventListener('click', function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    });
});








// Button click event listener
document.querySelectorAll('.task-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Mute the task div (Reduce opacity)
        const taskDiv = button.closest('.bg-blue-100'); // Find closest div with task
        taskDiv.classList.add('opacity-50'); // Mute the div by reducing opacity
        
        // Output the task description to the activity log
        const taskDescription = taskDiv.querySelector('h1').innerText; // Get task description (in h1 tag)
        const activityLog = document.querySelector('.mx-auto .bg-orange-50'); // Activity log container
        const newLog = document.createElement('div');
        newLog.classList.add('p-4', 'bg-gray-100', 'rounded-lg', 'mb-4');
        newLog.innerHTML = `<p>${taskDescription}</p>`; // Add task description
        activityLog.appendChild(newLog); // Append new log to the activity section
    });
});
