// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const hearts = document.querySelectorAll('.like-glyph');

hearts.forEach(heart => {
  heart.addEventListener('click', (e) => {
    const targetHeart = e.target;
    if (targetHeart.textContent === EMPTY_HEART) {
      mimicServerCall()
        .then(() => {
          targetHeart.textContent = FULL_HEART;
          targetHeart.classList.add('activated-heart');
        })
        .catch((error) => {
          modal.classList.remove('hidden');
          modalMessage.textContent = error;
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    } else {
      targetHeart.textContent = EMPTY_HEART;
      targetHeart.classList.remove('activated-heart');
    }
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
