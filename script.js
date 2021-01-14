// var home= document.getElementById("home");
// var homeNav= document.getElementById("home-nav")
// var about= document.getElementById("about");
// var skills= document.getElementById("skills");
// var skillsNav= document.getElementById("skills-nav")
// var experience= document.getElementById("experience");
// var education= document.getElementById("education");
// var portfolio= document.getElementById("portfolio");
// var contact= document.getElementById("contact");
// var curpos=0;
// var targetpos=0;
// homeNav.addEventListener('click',function(){
//     domRect=home.getBoundingClientRect();
//     targetpos=domRect.top;
//     var scrollint= setInterval(function(){
//         if(curpos>=targetpos)
//         {
//             clearInterval(scrollint);
//             return ;
//         }
//         curpos+=50;
//         scrollBy(0,50);
//     }, 50);

// });
// skillsNav.addEventListener('click',function(event){
//     event.preventDefault();
//     domRect=skills.getBoundingClientRect();
//     targetpos=domRect.top;
//     var scrollint= setInterval(function(){
//         if(curpos>=targetpos)
//         {
//             clearInterval(scrollint);
//             return ;
//         }
//         curpos+=50;
//         scrollBy(0,50);
//     }, 50);

// });

var navMenuAnchorTags=document.querySelectorAll(".nav-menu a");
var interval


//  console.log(navMenuAnchorTags);

for(var i=0;i<navMenuAnchorTags.length;i++)
{
    // console.log(navMenuAnchorTags[i]);
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        console.log(event);
        var targetSectionId= this.textContent.trim().toLowerCase();
        var targetSection= document.getElementById(targetSectionId);
        // interval= setInterval(scrollVertically
        //     ,20,targetSection);

        interval=setInterval(function(){
            scrollVertically(targetSection);
        },20);
    });
}
 function scrollVertically(targetSection)
 {
    targetSectionCoordinates=targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            
            window.scrollBy(0,50);
        
 }
  var progressBars= document.querySelectorAll('.skill-progress > div');
  var skillsContainer = document.getElementById('skills-container');
  window.addEventListener('scroll', checkScroll);
 var animationDone=false;

 function initialiseBars()

 {
     for(let bar of progressBars){
         bar.style.width=0+'%';
     }
 }
 initialiseBars();
function fillBars()
{
    for(let bar of progressBars){
        let targetWidth= bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval= setInterval(function(){
            if(currentWidth>targetWidth)
            {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+'%';
        },3)
       
    }
}


  function checkScroll()
  {
    // check whether skill cntainer is visible

    var coordinates= skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<window.innerHeight)
    {
        animationDone=true;
        
        fillBars();
        // console.log("fire an")
    }
    else if( coordinates.top>window.innerHeight)
    {
        animationDone=false;
        initialiseBars();
    }
  }