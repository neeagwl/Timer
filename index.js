const startButton=document.querySelector('#start');
const pauseButton=document.querySelector('#pause');
const duration=document.querySelector('#duration');

const timer= new Timer(duration,startButton,pauseButton,{
    onStart(){
        console.log("Timer started!!")
    },
    onTick(){
        console.log("Timer just ticked down!")
    },
    onComplete(){
        console.log("Timer completed !!!")
    }

});