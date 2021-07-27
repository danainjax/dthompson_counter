let count = 0

const value = document.querySelector('#value')
const increase = document.querySelector('.increase')
const reset = document.querySelector('.reset') 
const decrease = document.querySelector('.decrease')

increase.addEventListener('click', () => {
    count ++
    value.textContent = count
})

decrease.addEventListener('click', (e) => {
    count --
    value.textContent = count
})

reset.addEventListener('click', () => {
    count = 0
    value.textContent = count
})