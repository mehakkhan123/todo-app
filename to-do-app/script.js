let inputs= document.getElementById("inp")
let text = document.querySelector(".text")
let del= document.getElementById("delete")
let ex= document.getElementById("extra")

function add(){
    if(inputs.value.trim()===""){
        ex.innerText="Please Enter a Task"
        setTimeout(()=>{ex.innerText=""},1000)
    }else{
        let newElement=document.createElement("ul")
        newElement.innerHTML=`${inputs.value}
        <i class="fa-solid fa-trash"></i>`
        text.appendChild(newElement)
        inputs.value=""

        newElement.querySelector("i").addEventListener("click",function(){
            newElement.remove()
        })
    }
}

function d(){
    if(text.innerHTML.trim()!==""){
        text.innerHTML=""
    }else{
        ex.innerText="Nothing to Delete"
        setTimeout(() => {
            ex.innerText=""
        },1000);
    }
}