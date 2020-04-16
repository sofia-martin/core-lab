var hourhand = document.getElementById('hourhand');
var minutehand = document.getElementById('minutehand');
var secondhand = document.getElementById('secondhand');

function initClock (){
    var date = new Date();
    var hour = date.getHours() % 12;
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var hourDeg = (hour * 30) + (0.5 * minute); 
    var minuteDeg = (minute * 6) + (0.1 * second); //every minute the clock moves by 6 degrees. 6 divided by 60. 
    var secondDeg = second * 6; 

    hourhand.style.transform = 'rotate(' + hourDeg + 'deg)';
    minutehand.style.transform = 'rotate(' + minuteDeg + 'deg)';
    secondhand.style.transform = 'rotate(' + secondDeg + 'deg)';


setTimeout(initClock, 1000);
};

initClock();
