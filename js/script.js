let modalInstances;

let timePickerOpt = {
    twelveHour: false
};

let calculateTime = function() {
    let wakeTime = document.querySelector('.timepicker').value;
    if (wakeTime == "") {
        M.toast({
            html: '일어날 시간을 입력하세요!'
        })

        return;
    }
    let recommandTimeSpan = document.querySelectorAll('.recommand-text');
    let recommandCoffeeSpan = document.querySelectorAll('.coffee-time');
    let wakeTimeDate = new Date(Date.prototype.setHours.apply(new Date(), wakeTime.split(':')));
    let recommendTime = [];
    let recommendCoffeeTime = new Date(wakeTimeDate - (-9000000)).toTimeString().slice(0, 5);

    recommandCoffeeSpan[0].innerHTML = recommendCoffeeTime;

    for (let i = 0; i < 8; i++) {
        wakeTimeDate = new Date(wakeTimeDate - 5400000);
        recommendTime.push(wakeTimeDate.toTimeString().slice(0, 5));
        recommandTimeSpan[i].innerHTML = recommendTime[i];
    }

    modalInstances[1].open();
};

document.addEventListener('DOMContentLoaded', function() {
    let timeElems = document.querySelectorAll('.timepicker');
    let timeInstances = M.Timepicker.init(timeElems, timePickerOpt);
    
    let modalElems = document.querySelectorAll('.modal');
    modalInstances = M.Modal.init(modalElems);
});