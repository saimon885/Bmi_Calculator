const height = document.getElementById('height');
const weight = document.getElementById('weight');
const button = document.querySelector('button');
const result = document.querySelector('.result');
const score  = document.getElementById('score');

button.addEventListener('click',function(){
    let mainHeight = parseFloat(height.value);
    let mainWeight = parseFloat(weight.value);
    mainHeight = mainHeight / 100;
    let sqrheight = mainHeight * mainHeight
    let BMI = mainWeight / sqrheight;
    score.textContent = BMI.toFixed(2);
    result.style.display = 'block';
    if(score.textContent < 18.6){
        score.style.background = '#d35400';
    }
    else if(score.textContent < 24.9){
        score.style.background = '#f1c40f';
    }
    else{
        score.style.background = '#1abc9c';
    }
})

const form = document.getElementById('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
})