function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(mondayActivity = 'go to the office') {
    return `This Monday, I will ${mondayActivity}.`
}

function wrapAdjective(wrapper = "*") {
    let message = "You are"
    return function innerFunction(inner = "special") {
        return `${message} ${wrapper}${inner}${wrapper}!`
    }
}


