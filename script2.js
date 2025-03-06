
const f = document.querySelector("myformku");
const titleData = f.value
const bodyData= f.value


const objOption = {
    method :"POST",
    body  :JSON.stringify({
        title : titleData,
        body : bodyData,
        userId:1
    }),
    headers : {
        "Content-Type" : "application/json"
    }
}

// getData();
// const form = document.querySelector("form")
const btn = document.querySelector("form-example")
btn.addEventListener("click", async(e)=>{
        try{
            
            const url = "https://jsonplaceholder.typicode.com/posts";
            const response = await fetch(url ,objOption);
            if (!response.ok){
                throw new Error(response.statusText);
            }
            const postData = await response.json()
            console.log(postData)
           
           
        }catch(err){
            if(err instanceof Error)console.log(err);
        }
    e.preventDefault();
    console.log
})