// dom selection 
const container = document.querySelector('.container')
const days = document.querySelectorAll('.day:not(yes)')
const score = document.getElementById('score')

// populating the UI

// popUI()



// functions

function updateDayCount() {
    const yesDays = document.querySelectorAll('.day.yes')
    const yesDaysCount = yesDays.length
    console.log(yesDaysCount)
    score.innerText = yesDaysCount

    // saving to LS
    const daysIndex = [...yesDays].map(day => [...days].indexOf(day))
    localStorage.setItem('selectedDays', JSON.stringify(daysIndex))

}

// ELs

container.addEventListener('click', (e) =>  {
    
        e.target.classList.toggle('yes') 

        updateDayCount()
})


// running the function at page load so we don't get 0 as the count
updateDayCount()