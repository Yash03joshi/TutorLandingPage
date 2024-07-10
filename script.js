var a=document.getElementById("btn");
var b=0;
function shift() {
    if (b==0) {
        document.getElementsByClassName("header__large").animation="right 1.5s forwards";
        console.log("0");
        b=1;
    }
    // if (b==1) {
    //     document.getElementsByClassName("header__large").animation="left 1.5s forwards";
    //     console.log("1");
    //     b=0;
    // }
}
document.addEventListener("click",()=>{
    shift();
})