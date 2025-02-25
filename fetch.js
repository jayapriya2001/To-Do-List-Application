//fetch operation 

//GET AND POST

const API_URL="https://jsonplaceholder.typicode.com/users";
fetch(API_URL)
.then((res)=>res.json())
.then((data)=>console.log(data))


//POST
const data = {
    name: "dhoni",
    age: 45,
    city: "chennai",
    state: "Tamil Nadu"
    
};

fetch(API_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),  // Convert the data to JSON and include it in the request body
})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((error) => console.error('Error:', error));  // Add error handling



const displayNumber=document.querySelector("#printValue");
const button=document.querySelector("#btn");


button.addEventListener("click",()=>{
    const valueOne=document.querySelector("#num1").value;
    const valueTwo=document.querySelector("#num2").value;

    const total=Number(valueOne) * Number(valueTwo);
    displayNumber.innerHTML=total;

});

const addTwoNumber=()=>{
    const valueOne=document.querySelector("#num1").value;
    const valueTwo=document.querySelector("#num2").value;

    const total=Number(valueOne) * Number(valueTwo);
    displayNumber.innerHTML=total;
}
