var empName=document.getElementById("empName");
var empAge=document.getElementById("empAge");
var empSalary=document.getElementById("empSalary");
var submitBtn=document.getElementById("addBtn");



if(JSON.parse(localStorage.getItem("empolyeesList"))==null){
    var empList=[];
}
else
{
   var empList=JSON.parse(localStorage.getItem("empolyeesList"));
    displayData();
}
//var empList=JSON.parse(localStorage.getItem("empolyeesList"));

submitBtn.onclick=function(){
    addEmpolyee();
    displayData();

}

function addEmpolyee(){
    
    
    var nameRjx=/^[A-Z].{2,5}[A-Z]$/;
    var ageRjx=/^([2-5][0-9]|60)$/;
    var salaryRjx=/^([1-9][0-9][0-9][0-9]|10000)$/
    
   if(nameRjx.test(empName.value)==false||ageRjx.test(empAge.value)==false||salaryRjx.test(empSalary.value)==false){
       alert("eldata 8alat")
   }
    else{
        var emp={
        name:empName.value,
        age:empAge.value,
        salary:empSalary.value
    }
     
    empList.push(emp);
    
    localStorage.setItem("empolyeesList",JSON.stringify(empList) )
    }

    
    
}

function displayData(){
    
    var temp="";
    
    for(var i=0;i<empList.length;i++){
        temp+="<tr><td>"+empList[i].name+"</td><td>"+empList[i].age+"</td><td>"+empList[i].salary+"</td><td><button onclick='deleteEmp("+i+")'>delete</button></td></tr>"
    }
    
    document.getElementById("tableBody").innerHTML=temp;
    
    
}


function deleteEmp(id){
   empList.splice(id,1);
        localStorage.setItem("empolyeesList",JSON.stringify(empList) )

    displayData();
}




