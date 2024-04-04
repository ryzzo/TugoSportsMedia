const moment = require('moment');

const getDateDifference = (date) => {
    /*
    Get the difference between todays date and input date.
    return the difference between the dates.
    */
    var today_date = moment() //Get the current date
    var _date = moment(date)

    var diff_days = today_date.diff(_date, 'days')

    return Math.abs(diff_days);
}

const getNearestDate = (dates) => {
    /*
    Get the nearest date to the input date.
    return the nearest date.
    */
    var chosen;
    var new_difference;

    for (let i=0; i<dates.length; i++){
        var difference = getDateDifference(dates[i]);
        
        console.log('chosen: '+chosen);
        console.log('diff: '+difference);
        console.log('new_diff: '+new_difference);
        console.log(' ');

        if (i === 0){
            chosen = dates[0];
            new_difference = difference;
        }

        if (difference < new_difference){
            chosen = dates[i];
            new_difference = difference;
        }
    }

    return chosen;
}

export default getNearestDate;
