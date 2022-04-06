function loginUser(email, password, callback){
    setTimeout(()=>{
        console.log("We have the data");
        // passing user email to the callback
        callback({userEmail: email})
    }, 3000)
}
function getUserVidoes(email, callback){
    setTimeout(()=>{
        callback(['v1', 'v2']);
    }, 1000)
}
function getVideosTitle(video, callback){
    setTimeout(()=>{
        callback("Title of the Video");
    }, 1000)
}
const user = loginUser("than@gmail.com", 1245, (userInfo)=>{
    console.log(userInfo.userEmail)
    // run this when we get user email
    getUserVidoes(userInfo.userEmail, (videos)=>{
        console.log(videos)
        //  run this when we get videos
        getVideosTitle(videos, (title)=>{
            console.log(title);
        })
    })
})
console.log("finished")
