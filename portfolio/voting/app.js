
var myBtn = document.getElementById("nex-btn");

function check(){

    let par = document.getElementById("ist-party").value;
    let par2 = document.getElementById("2nd-party").value;
    let par3 = document.getElementById("3rd-party").value;
    
        
    if(((par != par2 && par != par3)) && ((par2 != par && par2 != par3))){
        myBtn.style.display = 'block';
        document.getElementById("result").innerHTML = "Parties Selected";
    }
    
    else {
        myBtn.style.display = 'none';
        document.getElementById("result").innerHTML = "Same Parties!";
}
}
