// var logged_in = true;
// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if (logged_in){
//             console.log("got the data");
//             resolve("user is logged in");
//         }
//         else {
//             reject(new Error("User is not logged in"));
//         }
//     }, 2000)
// })
// promise.then((info)=> console.log(info));
function loginUser(email, password){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log("Now we have the data");
            resolve(email);
        }, 2000)
    })
}
function getVideos(email){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            videos = ['v1', 'v2'];
            resolve(videos);
        }, 1000)
    })
}
function titleOfTheVideo(videos){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            videos = ['v1', 'v2'];
            resolve("title of the video");
        }, 0000)
    })
}
loginUser('win@gmail.com', 123)
.then(email => {
    console.log(email);
    return getVideos(email);
})
.then(videos => {
    console.log(videos);
    return titleOfTheVideo(videos);
}).then(title=> console.log(title))
