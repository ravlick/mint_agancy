'use strict';
const time = 600;
const step = 1;

function outNum(num , elem){
    let onne = document.querySelector('#' + elem);
    let n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if(n == num){
            clearInterval(interval);
        }
        onne.innerHTML = n;
    }, t );
}
outNum(100 , 'out-1');
outNum(8 , 'out-2');
outNum(50 , 'out-3');
outNum(10 , 'out-4');