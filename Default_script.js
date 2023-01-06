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

function openNav(){
document.getElementById("mysidenav").style.width = "250px";
}
function closeNav(){
document.getElementById("mysidenav").style.width = "0px";
}
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
    }
    else
    {
        document.getElementById('back-top').style.visibility="hidden";
    }
    
    function slideInAnimation(){
        var element_rel = document.getElementById("card-container");
        var screenHeight =  document.body.offsetHeight;
        var top_pos, card_desc;
        top_pos = element_rel.offsetTop - screenHeight / 4.5;
        if(document.body.offsetWidth > 650){
            for(let id = 200;id <=207;id++){
                card_desc = document.getElementById(id);
                card_desc.classList.add("card-desc-desktop");
            }
            var i = 100;               
            function topLoop() {         
            setTimeout(function() { 
                if(document.body.scrollTop > top_pos || document.documentElement.scrollTop > top_pos)
                {
                    document.getElementById(i).style.top="0%";  
                }
                else{
                    document.getElementById(i).style.top="100%";
                }                      
                i++;                    
                if (i <= 107) {           
                    topLoop();             
                }
                }, 125)
            }
            topLoop();
        }
        else{
            for(let id = 200;id <=207;id++){
                card_desc = document.getElementById(id);
                card_desc.classList.remove("card-desc-desktop");
            }
            
            var i = 100;                
            function leftLoop() {        
            setTimeout(function() {
                if(document.body.scrollTop > top_pos || document.documentElement.scrollTop > top_pos)
                {
                    document.getElementById(i).style.left =  "0%";
                }
                else{
                    for(let k = 100; k <= 107; k++){
                        if(k % 2 == 0){
                            document.getElementById(k).style.left = "-100%";   
                        }
                        else{
                            document.getElementById(k).style.left = "100%";
                        }
                    }
                }                   
                i++;                    
                if (i <= 107) {           
                    leftLoop();             
                }
                }, 125)
            }
            leftLoop();
        }
    }
    slideInAnimation();
    window.addEventListener("resize", slideInAnimation);

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

