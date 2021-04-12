// dom selection 
const container = document.querySelector('.container')
const days = document.querySelectorAll('.day:not(yes)')
const score = document.getElementById('score')


// functions

function updateDayCount() {
    const yesDays = document.querySelectorAll('.day.yes')
    const yesDaysCount = yesDays.length
    score.innerText = yesDaysCount

}

// ELs

container.addEventListener('click', (e) =>  {
        e.target.classList.toggle('yes') 
        updateDayCount()
})


// running the function at page load so we don't get 0 as the count
// I start with 5 days logged just to show colors 
    // but could just store via LS
updateDayCount()
