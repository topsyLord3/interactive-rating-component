
const questionRating = document.querySelector('.box-container');
const ratingFeed = document.querySelector('.box-container-two');
const button = document.querySelector('.btn');
const rateScore = document.querySelector('.rate-score');
const rates = document.querySelector('.ratings');
const num = document.querySelector('span');
const container = document.querySelector('.box-container');
const invalid = document.querySelector('.invalid')

let ratePoint;

rates.addEventListener('click', point); 

function point(e){
    
    if(e.target.className === 'rate-score'){
        ratePoint = e.target.innerText;
    }
}

button.addEventListener('click', onClick);

function onClick(e) {
    if(button.classList.contains('btn')) {
        num.innerText = ratePoint;
        ratingFeed.style.display = 'block';
        ratingFeed.style.zIndex = '1';
    } if(ratePoint === undefined) {
        questionRating.style.display = 'block';
        ratingFeed.style.zIndex = '-1';
        ratingFeed.style.display = 'none';
        alert('Please Enter a Rating');
     }
}




