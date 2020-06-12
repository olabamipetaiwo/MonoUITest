const calcCountDown = (eventDate) => {
    var sourceDate = new Date(eventDate).getTime();
    var now = new Date().getTime();
    var distance = sourceDate - now;

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

const testModule = () => {
    return "Test Module is working";
}

export {calcCountDown,testModule}