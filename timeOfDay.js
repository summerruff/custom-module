function getTimeOfDay (time) {
    let message = ''

    if(time >= 4 && time < 12){ //between 4:00am and 11:59am
        message = "Morning"
    } else if(time >= 12 && time < 17){ //between 12:00pm and 4:59pm
        message = "Afternoon"
    } else{ //between 5:00pm and 3:59am
        message = "Evening"
    }

    return message
}

function isMorning (time) { //between 4:00am and 11:59am
    let morning = false

    if(time >= 4 && time < 12){ 
        morning = true;
    }

    return morning
}

function isAfternoon (time) { //between 12:00pm and 4:59pm
    let afternoon = false

    if(time >= 12 && time < 17){
        afternoon = true
    }

    return afternoon
}

function isEvening (time) { //between 5:00pm and 3:59am
    let evening = false

    if(time >= 17 || time < 4){
        evening = true
    }

    return evening
}

module.exports = { getTimeOfDay, isMorning, isAfternoon, isEvening }