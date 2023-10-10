// code your solution here

//this sets an activity for saturday as the default if no other arguement is passed in
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

//function expression for Monday with a Default that can be overriden
let mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

/* create a function expression wrapAdjective
 when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
  when initialized with '||' creates a function that, when called, wraps an adjective in a highlight:
  */
 let wrapAdjective = function(style = "*"){
    return function(adjective="neat") {
        return `You are ${style}${adjective}${style}!`
    }
 }