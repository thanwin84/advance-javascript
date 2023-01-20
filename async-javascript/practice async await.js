// aysnce function always return a promise
// we can't use await without marking the function as async 
// always try and catch in asynce function
async function greeting(name){
    return `hello, ${name}, Good Morning`
}
async function start(){
    const message = await greeting("win")
    console.log(message)
    console.log("I'm done")
}
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


const loadData = async()=>{
    try {
        const url = "https://jsonplaceholder.typicode.com/todos/1"
        const result = await fetch(url)
        const data = await result.json()
        return data
    }
    catch(error) {
        console.log(error)
    }
}
// loadData().then(data => console.log(data))

const loadDatas = async()=>{
    try {
        const url = "https://jsonplaceholder.typicode.com/todos/1"
        const url2 = "https://jsonplaceholder.typicode.com/todos/2"
        const url3 = "https://jsonplaceholder.typicode.com/todos/3"
        // run parallel 
        const datas = await Promise.all([
            fetch(url),
            fetch(url2),
            fetch(url3)
        ])
        const jsonData = datas.map(item => item.json())
        const result = await Promise.all(jsonData)
        console.log(result)
    }
    catch(error) {
        console.log(error)
    }
}
loadDatas()
