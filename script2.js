
const f = document.querySelector("myformku");


// const objOption = {
//     method :"POST",
//     body  :JSON.stringify({
//         title : titleData,
//         body : bodyData,
//         userId:1
//     }),
//     headers : {
//         "Content-Type" : "application/json"
//     }
// }

// getData();
// const form = document.querySelector("form")
const btn = document.querySelector("form-example")
btn.addEventListener("click", async(e)=>{
        try{
            const title = e.target.title.value;
            const body = e.target.body.value;

            const url = "https://jsonplaceholder.typicode.com/posts";
            const response = await fetch(url ,{
                method :"POST",
                body  :JSON.stringify({
                    title : title,
                    body : body,
                    userId:1
                }),
                headers : {
                    "Content-Type" : "application/json"
                }
            });
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