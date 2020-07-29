let timePickerOpt = {
    twelveHour: false
};

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.timepicker');
    let instances = M.Timepicker.init(elems, timePickerOpt);
});

let calculateTime = function() {
    let wakeTime = document.querySelector('.timepicker')
    console.log()
}