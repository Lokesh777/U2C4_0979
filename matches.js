// write js code here corresponding to matches.html
var mpl=JSON.parse(localStorage.getItem("schedule"));
display(mpl);

var fav=JSON.parse(localStorage.getItem("schedule"))||[];


function filterByVenue(){
    var select=document.querySelector("#filterVenue").value;
    var venueList=fav.filter((ele)=>{
      return ele.venue==select;

    });
    console.log(venueList);
    display(venueList);

}

function display(data){

    document.querySelector("tbody").innerText="";
    data.forEach((ele) => {
          var tr = document.createElement("tr");

          var td1 = document.createElement("td");
          td1.innerText = ele.num;

          var td2 = document.createElement("td");
          td2.innerText = ele.timA;
          var td3 = document.createElement("td");
          td3.innerText = ele.timB;
          var td4 = document.createElement("td");
          td4.innerText = ele.date;
          var td5 = document.createElement("td");
          td5.innerText = ele.venue;
          var td6 = document.createElement("td");
          td6.innerText = "Favourite";
          td6.style.color = "green";
          td6.style.cursor = "pointer";

          td6.addEventListener("click", () => {
              Favourite(ele);
          });

          tr.append(td1, td2, td3, td4, td5, td6);
          document.querySelector("tbody").append(tr);
      });
}
        function Favourite(ele){
            console.log(ele);
            fav.push(ele);
          localStorage.setItem("schedule",JSON.stringify(fav));
        }
   