function loginUser(email, password){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("We have the data");
            // passing user email to the callback
            resolve({userEmail: email})
        }, 3000)
    })
}
function getUserVidoes(email){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(['v1', 'v2']);
        }, 1000)
    })
}
function getVideosTitle(video){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Title of the Video");
        }, 1000)
    })
}
// loginUser("than@gmail.com", 123)
// .then(user=> getUserVidoes(user.userEmail))
// .then(videos=> getVideosTitle(videos))
// .then(title=> console.log(title))

const youtube = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("getting stuff from youtube")
        resolve("videos from youtube")
    }, 2000)
})
const facebook = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("getting stuff from facebook")
        resolve("videos from Facebook")
    }, 4000)
})
// running at the same time
Promise.all([youtube, facebook])
.then(result=> console.log(result))
