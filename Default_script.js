document.onreadystatechange = function(){
    if(document.readyState !== "complete"){
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loading").style.visibility = "visible";
    }
    else{
        document.querySelector("#loading").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
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
            document.getElementById('back-top').style.visibility="visible"
        }else
        {
            document.getElementById('back-top').style.visibility="hidden";
        }
    };