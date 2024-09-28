

let count=1;
let num = Number(prompt("Enter num value"));
for (let i = 1; i <= num; i++) {
    let tr1 = document.createElement("tr");
    tbody.append(tr1);
    tr1.setAttribute("id","tr1");
    
    for (let j = 1; j <= 4; j++) {
        let tdata1 = document.createElement("td");
        
        if (j === 1) {
            tdata1.textContent = count++;
            tr1.append(tdata1);
            tdata1.setAttribute("id","serial");
        } 
        else if (j === 2) {
            let text = prompt("Enter employee name!");
            if (text !== "") {
                tdata1.textContent = text;
                tr1.append(tdata1);
            } 
            else {
                j--;  
            }
        } 
        else if (j === 3) {
            let text1 = prompt("Enter employee location!");
            if (text1 !== "") {
                tdata1.textContent = text1;
                tr1.append(tdata1);
            } 
            else {
                j--;  
            }
        }
        
        else if(j==4){
            let but=document.createElement("button");
            tr1.append(but);
            but.setAttribute("id","but")
            but.textContent="Delete";
            but.addEventListener("click",function fun(){
                tr1.remove();
                increment()
                
               
                
                
                
            
            
            
                
            },false)
            
           
        }
    }
}
function increment(){
    
        let table = document.getElementById("table");
        let rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
        for (let i = 0; i < rows.length; i++) {
          rows[i].getElementsByTagName("td")[0].innerText = i +1;
        }
      
}




            
        
        
        



    
    
    
 


           
            

           
           
            
        

 
