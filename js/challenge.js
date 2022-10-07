let counterLabel = document.querySelector('#counter');



function handleCounter(){
    let counter = 0;
    let countUp = setInterval(startCounting, 1000)
    countUp;
    
    counterButtons();
    likeStuff();
    
  
    function counterButtons(){
        
        const minusBtn = document.querySelector('#minus');
        const plusBtn = document.querySelector('#plus');
        const pauseBtn = document.querySelector('#pause');
        minusBtn.addEventListener('click', () =>{ counter -= 5;
        counterLabel.innerHTML = counter;});
        plusBtn.addEventListener('click', ()=> {counter += 5;
        counterLabel.innerHTML = counter;});
        pauseBtn.addEventListener('click', () => clearInterval(countUp));
    }
       
    function startCounting(){
        counter++;
        counterLabel.innerHTML = counter;
    }
    
    function likeStuff (){
        const heart = document.querySelector('#heart');
        const likes = document.querySelector('.likes');
        heart.addEventListener('click', ()=>{
           let likeMessage = document.createElement('li');
            likeMessage.innerHTML = `I love the number ${counter}`;
            likes.appendChild(likeMessage);

        })
    }

}


function handleComment(){
    const submitBtn = document.querySelector('#submit');
    const text = document.querySelector('#comment-input');
    const comments = document.querySelector('#list');
    submitBtn.addEventListener('click', e => {
        e.preventDefault();
       let userComment = document.createElement('p');
       userComment.innerText += text.value;
       comments.appendChild(userComment);

    })

}

handleCounter();
handleComment();
