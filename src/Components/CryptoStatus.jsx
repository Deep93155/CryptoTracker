// eslint-disable-next-line react/prop-types
function CryptoStatus({text}){
//     function execution(){
//         const x = new XMLHttpRequest();
//     x.open("GET", "https://jsonplaceholder.typicode.com/todos/2")
//     x.onload = function(){
//         if(x.status>=200 && x.status<300){
//             const data = x.responseText;
//             console.log("data is", data)
//             // console.log("response is",x.responseText)
//             const title = (data["title"])
//             console.log( "title is", title);
//             return title;
//         }else{
//             console.log("Error occured")
//         }
//     }
//     x.send();
// }
// execution();
     return (
        <>
        <div>
            <h1>{text}</h1>
        </div>
        </>
     )

}

export default CryptoStatus;