const ratings = document.querySelectorAll('.ratings');
const rate = document.querySelector('#rate');
const submit = document.querySelector('.submitContainer');
const ratingState = document.querySelector('#ratingState');
const thankYouState = document.querySelector('#thankYouState');


for(i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener("click", function() {
        let star = this.innerText;
        this.style.backgroundColor = '#fb7413';
        setRating(star);
        console.log(star);
    });
}

function setRating(number) {
    rate.innerText = number;
    console.log(rate.innerText);
}

submit.addEventListener("click", function() {
    // if (thankYouState.classList.contains('nonActiveState')) {
    //     thankYouState.classList.remove('nonActiveState');
    //     ratingState.classList.add('nonActiveState');
    // } else {
    //     ratingState.classList.add('nonActiveSate');
    //     thankYouState.classList.remove('nonActiveState');
        
    // }
    thankYouState.classList.remove('nonActiveState');
    ratingState.classList.add('nonActiveState');
})







