function loginUser(email, password){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("We have the data");
            // passing user email to the callback
            resolve({userEmail: email})
        }, 1000)
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
async function displayUser(){
    const user = await loginUser("than@gmail.com", 123);
    console.log(user)
    const videos = await getUserVidoes(user.userEmail);
    console.log(videos)
    const title = await getVideosTitle(videos)
    console.log(title);
}
displayUser()

