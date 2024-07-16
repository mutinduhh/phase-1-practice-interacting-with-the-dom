document.addEventListener('DOMContentLoaded', function () {
    let counterValue = 0;

    const counter = document.getElementById('counter');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('list');

    function updateCounter(value) {
        counter.innerText = value;
      }
    
      function incrementCounter() {
        counterValue++;
        updateCounter(counterValue);
      }
    
      function decrementCounter() {
        counterValue--;
        updateCounter(counterValue);
      }
    
      function like() {
        const li = document.createElement('li');
        li.innerText = `Liked ${counterValue} times`;
        likesList.appendChild(li);
      }
    
      function togglePause() {
        if (pauseButton.innerText === 'pause') {
          clearInterval(timer);
          minusButton.disabled = true;
          plusButton.disabled = true;
          heartButton.disabled = true;
          pauseButton.innerText = 'resume';
        } else {
          timer = setInterval(incrementCounter, 1000);
          minusButton.disabled = false;
          plusButton.disabled = false;
          heartButton.disabled = false;
          pauseButton.innerText = 'pause';
        }
      }
    
      function handleCommentSubmit(event) {
        event.preventDefault();
        const comment = commentInput.value.trim();
        if (comment !== '') {
          const p = document.createElement('p');
          p.innerText = comment;
          commentList.appendChild(p);
          commentInput.value = '';
        }
      }
    
      minusButton.addEventListener('click', decrementCounter);
      plusButton.addEventListener('click', incrementCounter);
      heartButton.addEventListener('click', like);
      pauseButton.addEventListener('click', togglePause);
      commentForm.addEventListener('submit', handleCommentSubmit);
    
      let timer = setInterval(incrementCounter, 1000);
    });