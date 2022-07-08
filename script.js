let num_text = "";
function addCharacters(val){
    num_text = document.getElementById("form").display.value += val;
}

function calculate(){
    let val = '';
    try{
        val = eval(num_text);
        document.getElementById("form").display.value = val;
    }
    catch(e){
        alert("Enter Valid expression");
    }
}

function remove(){
    document.getElementById("form").display.value = '';
    num_text = '';
}