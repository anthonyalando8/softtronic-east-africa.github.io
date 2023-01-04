document.onreadystatechange = function(){
    if(document.readyState !== "complete"){
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loading").style.visibility = "visible";
        document.querySelector("body").style.height = "100%";
    }
    else{
        document.querySelector("#loading").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
        document.querySelector("body").style.height = "auto";
    }
};
/*function copyToClipboard(){
var copyText = document.getElementById("content-copy");

// Select the text field
copyText.select();
copyText.setSelectionRange(0, 99999); // For mobile devices

// Copy the text inside the text field
navigator.clipboard.writeText(copyText.value);

// Alert the copied text
alert("Copied: " + copyText.value);
}*/
window.onscroll = function()
{
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        document.getElementById('back-top').style.visibility="visible";
    }else
    {
        document.getElementById('back-top').style.visibility="hidden";
    }
    var element_rel = document.getElementById("card-container");
    var screenHeight =  screen.height;
    var top_pos = element_rel.offsetTop - screenHeight / 1.2;
    var element_abs = document.getElementById("card-content");
    var i;
    for(i = 100; i <= 107; i++){
        if(document.body.scrollTop > top_pos || document.documentElement.scrollTop > top_pos)
        {
            document.getElementById(i).style.top="0%";
        }
        else{
            document.getElementById(i).style.top="100%";
        }
    }
    
    
};
