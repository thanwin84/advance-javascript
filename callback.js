function addAnotherEventListener(typeOfEvent, callBack){
    //detecting the event
    var eventThatHappened = {
        "eventType": "keypress",
        "key": "p",
        "durationOfKeyPress": 20
    }
    if (eventThatHappened.eventType === "keypress"){
        callBack(eventThatHappened);
    }
}
addAnotherEventListener("keypress", function(event){
    console.log(event)});
