generateUrl = text => "https://api.funtranslations.com/translate/yoda.json?text="+text
function runFun(){
    var inputEle = document.querySelector("textarea");
    var outEle = document.querySelector("#out");
    if(inputEle.value){
        fetch(generateUrl(inputEle.value)).then(res => res.json()).then(json => {
            console.log(json);
            outEle.innerHTML = json.contents.translated;
            
        }).catch(err=>console.log("Error:",err));
    }
    else{
        inputEle.setAttribute("placeholder","Please type something here...");
    }
}
document.querySelector("#btn").addEventListener('click',runFun);