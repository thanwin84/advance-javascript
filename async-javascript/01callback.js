// "I will call back later!"

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

// creating a function that accepts a callBack
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

// why we need callback
var users = ['Sam', "Elite", "Bonour"]

function addUser(username){
    setTimeout(()=>{
        users.push(username)
    }, 200)
}
function getUsers(){
    setTimeout(()=>{
        console.log(users);
    })
}
// first add the user to database
addUser("win");
// secondly get the updated user list
getUsers()
// the output will be: ['Sam', "Elite", "Bonour"]
// it didn't print the new user "win". cause getUsers() is executed fast. 

// we can solve this problem by using callback. cause we wanna pirnt the user list only then when the new user will be added in the list
function addUser(username, callback){
    setTimeout(()=>{
        users.push(username)
        callback()
    }, 200)
}
function getUsers(){
    setTimeout(()=>{
        console.log(users);
    })
}
// first add the user to database
addUser("win", getUsers);
// secondly get the updated user list
// now the output will be: ['Sam', 'Elite', 'Bonour', 'win']
// in this case getusers get executed when new new user is added successfully 
