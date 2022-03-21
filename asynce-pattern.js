// assynce code example
// setTimeout(()=>{
//     console.log("get me some data")
// }, 1000)
// // console.log("starting next project")

// console.log("starting the project...")

function loginUser(email, password, callBack){
    setTimeout(()=> {
        console.log("Now we have the data");
        callBack({mail: email})
    }, 2000)
}
function getUserVideos(email, callBack){
    setTimeout(()=>{
        callBack(['v1', 'v2', 'v3'])
    }, 1000)
}
function titleOfVideo(video, callBack){
    setTimeout(()=>{
        callBack("Invention of Pi")
    }, 1000)
}

const user = loginUser('thanwin@gmail.com', 1343, (user) =>{
    console.log(user);
    getUserVideos(user.mail, (videos)=>{
        console.log(videos)
        titleOfVideo(videos[0], (title)=>{
            console.log(title);
        })
    })
});
console.log("finished")
