// var d = new Date();
// var evD = new Date("2021-06-08T14:59");

// console.log(d);
// console.log(evD);

// var diff = new Date(evD - d);

// //Method 1:difference must b +ve
// console.log(diff);


// //CountDown
// var hours,minutes,seconds;

// hours = diff.getHours();
// minutes = diff.getMinutes();
// seconds = diff.getSeconds();
// console.log(hours,minutes,seconds);


var cd = new Date('2012-07-01T01:01:00.000Z').getTime();

const calcCountDown = (eventDate) => {
    var now = new Date().getTime();
    var distance = eventDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0 ){
        return  { 
                  days:false,
                  hours:false,
                  minutes:false,
                  seconds:false,
                  expired:true
                } 
    }else {
        return  { 
            days, hours ,minutes, seconds, expired:false
        }
    }
}

console.log("////////////////////////");
console.log(calcCountDown(cd));
