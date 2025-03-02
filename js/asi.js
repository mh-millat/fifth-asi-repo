const colors = ["red", "blue", "green", "yellow", "purple", "orange" ] ;
let i = 0;

document.addEventListener( 'DOMContentLoaded', function(){
    document.getElementById( 'btn-lst').addEventListener( 'click', function(){
        document.body.style.backgroundColor =colors[i];
        i =(i + 1) % colors.length;
    });
});

function setLclDate(){  
    const date = new Date();
            const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
            const formattedDate = date.toLocaleDateString('en-US', options);
            document.getElementById('local-date').innerText = formattedDate;
}
setLclDate() ;
    
function getFormattedTime(){
    const options ={hour: '2-digit', minute: '2-digit', second: '2-digit'};
    const date = new Date();
    return date.toLocaleTimeString('en-US', options);
}
    
let totalTasks = '06';
let completedTasks = '23' ;
document.getElementById('task-count').innerText =totalTasks;
document.getElementById('completed-count').innerText = completedTasks;
    
const buttons = document.querySelectorAll('.task-btn');
for (const button of buttons){
    button.addEventListener('click', function () {
        const taskDiv = this.closest('.task-div');
        const taskName = this.innerText;
        const alertResponse = confirm(`Are you sure you want to complete "${taskName}"?`);
        if ( alertResponse === true && taskName === "Completed"){
            const taskDescription = taskDiv.querySelector('h1').innerText ;
            const activityLog = document.getElementById('activity-log');
            const newLog = document.createElement('div');
            newLog.classList.add('p-2', 'bg-gray-100', 'rounded-lg', 'mb-4');
            const currentTime = getFormattedTime();
    
            newLog.innerHTML =`<p>You have completed the task <p>${taskDescription}</p>Task completed at: ${currentTime}</p>`;
            const hr = activityLog.querySelector('hr');
            if (hr){
                activityLog.insertBefore(newLog, hr.nextSibling ) ;
                }
                else {
                    activityLog.appendChild(newLog);
                }
    
            this.disabled = true;
            this.classList.add("bg-gray-400", "rounded-lg" );
            taskDiv.classList.add('opacity-50');
            completedTasks++ ;
            document.getElementById('completed-count').innerText = completedTasks ;
            totalTasks--;
            document.getElementById('task-count').innerText = totalTasks;
            if ( completedTasks === 6) {
                alert("Congratulation, You have completed 6 tasks!") ;
            }
            if (completedTasks === 29) {
                alert("Congratulation, You Have completed all the tasks!" ) ;
            }
        }
    });
}
    
document.getElementById('clear-history').addEventListener('click', () => {
    document.getElementById('activity-log').innerHTML = '' ;

});