// write js code here corresponding to favourites.html
// write js code here corresponding to matches.html
var mpl=JSON.parse(localStorage.getItem("schedule"));
display(mpl);
 

function display(data){

    document.querySelector("tbody").innerHTML="";
  data.forEach((ele,index) => {
      var tr=document.createElement("tr");

      var td1=document.createElement("td");
      td1.innerText=ele.num;

      var td2=document.createElement("td");
      td2.innerText=ele.timA;
      var td3=document.createElement("td");
      td3.innerText=ele.timB;
      var td4=document.createElement("td");
      td4.innerText=ele.date;
       var td5=document.createElement("td");
       td5.innerText=ele.venue;
       var td6=document.createElement("td");
       td6.innerText="Delete";
       td6.setAttribute("class","deleteText")
       td6.addEventListener("click",()=>{
        deleteMatch(ele,index);
       })

       tr.append(td1,td2,td3,td4,td5,td6);
       document.querySelector("tbody").append(tr);
    });
}
        function deleteMatch(ele,index){
            mpl.splice(index,1);
   localStorage.setItem("schedule",JSON.stringify(mpl));
      window.location.reload();
        }
   