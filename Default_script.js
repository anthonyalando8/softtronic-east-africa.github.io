//function show loading before document opens
document.onreadystatechange = function(){
    if(document.readyState !== "complete"){
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loading").style.visibility = "visible";
        disableScrolling();
    }
    else{
        document.querySelector("#loading").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
        enableScrolling();
    }
};

//checks if an element is in the viewport
function isInViewPort(el){
    const rect = el.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)&&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//opens the side navigation panel
function openNav(){
    document.getElementById("mysidenav").style.width = "250px";
    disableScrolling();
}

//close navigation panel
function closeNav(){
    document.getElementById("mysidenav").style.width = "0px";
    enableScrolling();
}
window.addEventListener("resize", closeNav);
/*function copyToClipboard(){
    for(let j = 300; j <= 305; j++){
        var copyClip = document.getElementById(j);
        copyClip.style.cursor = "pointer";
        copyClip.addEventListener('click', (e) =>{
            var elementId = e.target.id;
            var copyText = document.getElementById(elementId);
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value);
            alert("Copied: " + copyText.value);
        });
    }
}
copyToClipboard();*/

//apply animation on scrolling
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
};

//make an element sticky to the top
function addStickyClass(value){
    var navbar = document.getElementById(value);
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
// When the user clicks anywhere outside of the modal, sidenav, close it
window.onclick = function(event) {
    var modal = document.getElementById('id01');
    var sidenav = document.getElementById("mysidenav")
  if (event.target == modal) {
    closeModal();
  }
  if(sidenav.clientWidth > 0){
    if(event.target !== sidenav){
        closeNav();
    }
  }
  
}

//close sign up form
function closeModal(){
    document.getElementById('id01').style.display="none";
    enableScrolling();
}

//on document load display sign up form after 30 seconds
window.addEventListener("load", function(){
    setTimeout(function(){
        document.getElementById("id01").style.display = "block";
        disableScrolling();
    }, 30000);
});

//disable scrolling the document
function disableScrolling(){
    document.getElementsByTagName("body")[0].classList.add("stop-scrolling");
}
//enable document scrolling
function enableScrolling(){
    document.getElementsByTagName("body")[0].classList.remove("stop-scrolling");
}

//Unavailable pop up
function noService(){
    alert('Service under development. \nTry again later.');
}