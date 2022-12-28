let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');



document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 2);
            
            const answerPhrase = (phraseRandom) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;

        }
    }
});

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
            const phraseRandom = Math.round( Math.random() * 2);   
                 if (minValue === maxValue - 1){
                    const answerPhrase = answer(phraseRandom);
                    answerField.innerText = answerPhrase;
       
        } else {
            minValue = answerNumber  - 1;
            answerNumber  = Math.floor((maxValue - minValue) * 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
            
        }
    }
});

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom = Math.round(Math.random() * 3);
        switch (phraseRandom){
            case 0:
                answerPhrase = `Я всегда угадываю`;
                break;
            case 1:
                answerPhrase = `Это было легко`;
                break;
            case 2:
                answerPhrase = `Легкотня`;
                break;
            case 3:
                answerPhrase = `В следующий раз, давай посложнее`;
                break;

               
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
});


document.getElementById('btnRetry').addEventListener('click', function () {
     minValue = 0;
     maxValue = 100;
     orderNumber = 0;
     operation = null;


    if (gameRun) {
        orderNumberField.innerText = orderNumber;
        answerField.innerText = {answerNumber};
       
            
    }
    else {
        gameRun = false;
    
    }
});

document.querySelector('#btnRetry').addEventListener('click', reset);

function reset (){
    orderNumber = null;
    orderNumberField.innerText = '';
    answerField.innerText = '';
    checkInput = '';
    
};






