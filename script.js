const objOption = {
    method :"POST",
    body  :JSON.stringify({
        title : "JANCOK",
        body : "JANCOOKKKKKKKK",
        userId:1
    }),
    headers : {
        "Content-Type" : "application/json"
    }
}

const getData = async () => {
    try{
        
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(response.statusText);
        }
        const postData = await response.json()
        console.log(postData)
       
        for(let i=0; i<postData.length; i++){
            const main = document.getElementById("main")
            const container = document.getElementById("container")
            const card = document.createElement("div");
            const header = document.createElement("h1");
            const paragraph = document.createElement("p");
            card.setAttribute("class", "card");
            paragraph.textContent = postData[i].body;
            header.textContent = postData[i].title;

           card.append(header,paragraph)
           container.append(card)

        }
    }catch(err){
        if(err instanceof Error)console.log(err);
    }
}

getData();