const questionRating = document.querySelector('.box-container');
const ratingFeed = document.querySelector('.box-container-two');
const button = document.querySelector('.btn');
const rateScore = document.querySelector('.rate-score');
const rates = document.querySelector('.ratings');
const num = document.querySelector('span');
const container = document.querySelector('.box-container');
const invalid = document.querySelector('.invalid');

button.disabled = true;
button.style.opacity = '0.6'

let ratePoint;

rates.addEventListener('click', point);

function point(e) {
        if (e.target.className === 'rate-score') {
                ratePoint = e.target.innerText;
                button.disabled = false;
                button.style.opacity = '1';
        }
}

button.addEventListener('click', onClick);

//TODO: disable button when user has not provided an option
//TODO: only enable when user has provided an option
function onClick(e) {
                num.innerText = ratePoint;
                ratingFeed.style.display = 'block';
                ratingFeed.style.zIndex = '1';
        if (ratePoint === undefined) {
                questionRating.style.display = 'block';
                ratingFeed.style.zIndex = '-1';
                ratingFeed.style.display = 'none';
                alert('Please Enter a Rating');
        }
}
