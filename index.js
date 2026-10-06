let inputBtn=document.querySelector("#input-btn")


let myLeads=[]
const inputEl=document.querySelector("#input-el")
const ulEl=document.querySelector("#ul-el")
let deleteEl=document.querySelector("#delete-btn")
const tabbtn=document.querySelector("#saveTab-btn")

 

deleteEl.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    ulEl.innerHTML=""
})

tabbtn.addEventListener("click",function(){


chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    
     myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads) 
   
});

    
})




inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
     

     localStorage.setItem("myLeads",JSON.stringify(myLeads))

    render(myLeads)

    inputEl.value=""
    

   

})

let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){

    myLeads=leadsFromLocalStorage
    render(myLeads)

}


function render(leads){
        //let listItem="<li><a target='_blank' href=' "+inputEl.value+"'>"+inputEl.value+"</a></li>"
        let listItem=""
        for(let i=0;i<leads.length;i++){
            listItem+=`
            <li>
             <a href=${leads[i]}> ${leads[i]}</a>
             </li>
            `
        }
       

    

    ulEl.innerHTML=listItem
}


function generatesentence(desc,arr){
    let items=""
    for(let i=0;i<arr.length;i++){
        items+=arr[i]+", "
    }
    console.log(`The ${arr.length} ${desc} are ${items} `)
}









