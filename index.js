// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myFun);
var mpl=JSON.parse(localStorage.getItem("schedule"))||[];
function myFun(){
    event.preventDefault();

    var matchObj={
        num:masaiForm.matchNum.value,
        timA:masaiForm.teamA.value,
        timB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value
    };
    mpl.push(matchObj);
    console.log(mpl)
    localStorage.setItem("schedule", JSON.stringify(mpl))
    window.location.href="matches.html";
}