const dragZoneEle = document.getElementById("dragzoneid");
const psAxe = document.getElementById("cAxle");

const dropbar = document.getElementById("dropBar");

const clipBoxEle = document.getElementById("clipboxid");
const sName = document.getElementById("sName");
const exp = document.getElementById("dashbox");

const longName1 = document.getElementById("longName1");
const longName2 = document.getElementById("longName2");
const price = document.getElementById("price");


const anchorArr = document.getElementsByClassName("anchor");

//const sliceArr = document.getElementsByClassName("slice");



const mt1a = document.getElementById("mt1a");
const mt1b = document.getElementById("mt1b");
const mt2a = document.getElementById("mt2a");
const mt2b = document.getElementById("mt2b");
const mt3a = document.getElementById("mt3a");
const mt3b = document.getElementById("mt3b");


const pBoard = document.getElementById("pizzaboardid")



const bsarr = document.getElementsByClassName("board-slice");



const breadEle = document.getElementById("fBrd");


const cursorBigs = document.getElementsByClassName("cBig");

const cursorMine = document.getElementById("cursor");



const sliceDB =[
    {
        "id": 0,
        "shortname": "spicy",
        "fullname": "spicy<br>salami",
        "price": 19.99, 
        "width": "14vw",       
        "images":{
            "a":"../Pmedia/0000_slice-MEATY-spicy-salami.png"                          
        }
    },
    {
        "id": 1,
        "shortname": "burrata",
        "fullname": "pezzofied<br>margherita",
        "price": 19.99,
        "width": "21.2vw",       
        "images":{
            "a":"../Pmedia/0001_slice-Burrata.png"              
        }
    },
    {
        "id": 2,
        "shortname": "tandoori",
        "fullname": "tandoori<br>chicken",
        "price": 19.99,
        "width": "23.5vw",       
        "images":{
                          
        }
    },
    {
        "id": 3,
        "shortname": "truffle",
        "fullname": "truffle<br>salami",
        "price": 19.99,
        "width": "20vw",       
        "images":{
                           
        }
    },
    {
        "id": 4,
        "shortname": "burgers!",
        "fullname": "the cheese<br>burger",
        "price": 19.99,
        "width": "23.4vw",       
        "images":{
                          
        }
    },
    {
        "id": 5,
        "shortname": "buffalo",
        "fullname": "buffalo<br>chicken",
        "price": 19.99,
        "width": "20.5vw",       
        "images":{
                           
        }
    },
    {
        "id": 6,
        "shortname": "shish tawook",
        "fullname": "shish<br>tawook",
        "price": 19.99,
        "width": "35vw",       
        "images":{
                           
        }
    },
    {
        "id": 7,
        "shortname": "guacamole",
        "fullname": "chicken<br>fajitas",
        "price": 19.99,
        "width": "28.2vw",       
        "images":{
                         
        }
    },
    {
        "id": 8,
        "shortname": "pepperoni",
        "fullname": "pepperoni",
        "price": 19.99,
        "width": "26vw",       
        "images":{
                          
        }
    },
    {
        "id": 9,
        "shortname": "pesto",
        "fullname": "pesto",
        "price": 19.99,
        "width": "14.6vw",       
        "images":{
                          
        }
    }
]



let xStart = 0, xEnd = 0;
let lastRot = 0, moveRot = 0;
let liveSlot = 0, moveSlot = 0;initSlot = 0;

let mTStart, mTEnd;

let lastScroll = 0;


const menuEle = document.getElementById("menuid");
const contactEle = document.getElementById("contactid");
const oButton1Ele = document.getElementById("obutton1id");
//const carouseltitleid = document.getElementById("cartitleid");
const carTitleInnerEle = document.getElementById("cartitleinnerid");
const capArrowEle = document.getElementById("caparrowid");
const jogBoxEle = document.getElementById("jogboxid");
const ar1Ele = document.getElementById("ar1id");
const sliceNameBoxEle = document.getElementById("slicenameboxid");
const onlineOrderEle = document.getElementById("onlineorderid");






/// set up listeners =================================

for(let i=0;i<cursorBigs.length;i++)
{
    cursorBigs[i].addEventListener('mouseover', (e) => {
        e.stopPropagation();
        if(cursorMine.classList.contains("dragCursor"))
        {
            cursorMine.classList.remove('dragCursor');
        }        
        cursorMine.classList.add('bigCursor');
    });
    
    cursorBigs[i].addEventListener('mouseleave', () => {
        cursorMine.classList.remove('bigCursor');
    });
}

dragZoneEle.addEventListener('mouseover', () => {        
    cursorMine.classList.add('dragCursor');
});


dragZoneEle.addEventListener('mouseleave', () => {
    cursorMine.classList.remove('dragCursor');
});


onlineOrderEle.addEventListener('mouseover', () => {        
    cursorMine.style.display = "none";
});


onlineOrderEle.addEventListener('mouseleave', () => {
    cursorMine.removeAttribute('style');
});


window.addEventListener("resize", (event) => {
    dragZoneEle.style.transform = `scale(${calcZoom()})`;
    //cartitleid.style.zoom=(calcZoom());
});


const moveCursor = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;     
    cursorMine.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;    
}  
window.addEventListener('mousemove', moveCursor)

window.addEventListener("scroll", function(e) {  
    /*let current = window.scrollY;*/  
    let per = (window.scrollY /window.innerWidth)     
  
    mt1a.style.transform = 'translate('+clampNumber(per*60,42,0)+'%)';
    mt1b.style.transform = 'translate('+clampNumber(-per*60,0,-46)+'%)';

    mt2a.style.transform = 'translate('+clampNumber((per*60)-60,42,0)+'%)';
    mt2b.style.transform = 'translate('+clampNumber((-per*60)+60,0,-46)+'%)';

    mt3a.style.transform = 'translate('+clampNumber((per*60)-140,42,0)+'%)';
    mt3b.style.transform = 'translate('+clampNumber((-per*60)+140,0,-46)+'%)';
       
    if(lastScroll > per && per > .58)
    {
        dropbar.classList.add("showBar");
    }
    else
    {
        if(dropbar.classList.contains("showBar"))
        {
        dropbar.classList.remove("showBar"); 
        }        
    }    
    
    lastScroll = per;
});



let pBoardMoved = false;
let pBoardFadedin = false;
let pBoardButtonFadedin = false;
const pBoardSecObserver = new IntersectionObserver(entries => {       
    if(entries[0].isIntersecting && !pBoardMoved)
    {      
        //testTick(Math.round(entries[0].intersectionRatio * 100)) ;  
        pBoard.classList.remove("board-pre-move");
        pBoardMoved = true;
    } 
    if(entries[0].intersectionRatio > .3 && !pBoardFadedin)
    {      
      document.getElementById("boardcapid").classList.remove("pre-hide");      
      pBoardFadedin = true;
    } 
    if(entries[0].intersectionRatio > .46 && !pBoardButtonFadedin)
    {       
      document.getElementById("boardorderbuttonid").classList.remove("pre-hide");
      pBoardButtonFadedin = true;
    } 
    
    
},{threshold:[0,.35,.5]});  
pBoardSecObserver.observe(document.getElementById("pboardsecid"));


let pBoardHandUsed = false;
const pBoardHandObserver = new IntersectionObserver(entries => {       
    if(entries[0].isIntersecting && !pBoardHandUsed)
    {
        boardSliceSequence();
        pBoardHandUsed = true;
    }       
},{threshold:.5});  
pBoardHandObserver.observe(document.getElementById("boardhandid"));



let breadUsed = false;
const breadObserver = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting && !breadUsed)
    {
        breadSequence();  
        breadUsed = true;
    }        
});  
breadObserver.observe(document.getElementById("fBrd"));


/* might need to change these to mousedown/up html events */
//mouse down and drag listeners -----------------
dragZoneEle.addEventListener("mousedown", function(e){
    mouseDownFunction(e.screenX);     

    dragZoneEle.onmousemove = function(e) {
        mouseMoveFunction(e.screenX);
     }
});
dragZoneEle.addEventListener("mouseup", function(e){
    mTEnd = new Date();
    xEnd = e.screenX;
    if(xStart != xEnd)// if it moved
    {
        lastRot = moveRot;
    }       
    dragZoneEle.onmousemove = null;    
    autoSlotAlign();
});
//mouse down and drag listeners -----------------


/// set up listeners =================================







/// page load seq ======================================

dragZoneEle.style.transform = `scale(${calcZoom()})`;
//cartitleid.style.zoom=(calcZoom());


//upDateTitle(0);
setTimeout(function() {menuEle.classList.remove("pre-hide")}, 600);
setTimeout(function() {contactEle.classList.remove("pre-hide")}, 600);
setTimeout(function() {carTitleInnerEle.classList.remove("pre-hide")}, 1100);
//setTimeout(function() {rollTitle()}, 1300);
setTimeout(function() {fanSequence()}, 800);
setTimeout(function() {initSliceName()}, 1200);
setTimeout(function() {capArrowEle.classList.remove("cap-arrow-pre")}, 2000);
setTimeout(function() {oButton1Ele.classList.remove("pre-shrink")}, 2300);
setTimeout(function() {sliceNameBoxEle.classList.remove("pre-hide")}, 2300);
setTimeout(function() {jogBoxEle.classList.remove("pre-hide")}, 2300);
setTimeout(function() {ar1Ele.classList.remove("pre-hide")}, 2800);
setTimeout(function() {onlineOrderEle.classList.remove("pre-hide")}, 3400);

/// page load seq ======================================


function initSliceName(){    
    setTimeout(function() {changeLiveSlot(0,0)}, 800);
    rollTitle();    
    setTimeout(function() {changeName(0)}, 420);
}







/* to do 
-- increase size of elements on mobile nav section
-- handle touch swipes
-- disable custom cursor on mobile
-- dont swingin the bottom slices
-- finish the mobile/responsive portion




--center shish tawook dots
--add new slices


--https://codepen.io/ntenebruso/pen/QWLzVjY   for cursor work



*/




//mouse down and drag functions -----------------
function mouseDownFunction(e){  
    mTStart = new Date();
    xStart = e;   
    initSlot = liveSlot;  
    psAxe.style.transition = "transform 0s ease-in-out";     
}

function mouseMoveFunction(e){     
    moveRot = lastRot + (e-xStart)/16;
    rotateWheel(moveRot);
}

function rotateWheel(inc){      
    moveSlot = Math.round((inc % 360)/15);

    if(moveSlot>0)
    {
        moveSlot = 24-moveSlot;
    }
    else{
        moveSlot = moveSlot*-1
    }    

    if(moveSlot == 24)
    {
        moveSlot = 0;
    }

    if(liveSlot != moveSlot)
    {        
        changeLiveSlot(liveSlot,moveSlot);
    }
    psAxe.style.transform  = 'rotate('+inc+'deg)';     
}


function changeLiveSlot(oldS, newS)
{      
    liveSlot = newS;    
    anchorArr[oldS].children[0].classList.remove("big");
    anchorArr[oldS].children[0].children[1].classList.remove("zeroOp");
    anchorArr[oldS].children[0].children[0].classList.add("zeroOp");
    anchorArr[oldS].classList.remove("zhigher");

    anchorArr[newS].classList.add("zhigher");
    anchorArr[newS].children[0].classList.add("big");
    anchorArr[newS].children[0].children[0].classList.remove("zeroOp");
    anchorArr[newS].children[0].children[1].classList.add("zeroOp");    
}
//mouse down and drag functions -----------------



//mouse ended/no mouse functions ----------------
function autoSlotAlign(){
    psAxe.style.transition = "transform .3s ease-out";    
    //flick mechanic
    if(((mTEnd - mTStart) / 1000.0) < .3)
    {
        
        if(liveSlot == initSlot)
        {
            //console.log(xEnd-xStart);
            lastRot = Math.round(lastRot/15)*15;             
            if(xEnd<xStart)
            {
                jogWheel(-1);
            }
            else if(xEnd==xStart)// didn't move
            {
                return;
            }
            else{                
                jogWheel(1);
            }
            return;
        }        
    }
     //flick mechanic  
    
    lastRot = Math.round(lastRot/15)*15;     

    //rotateWheel(lastRot); 
    psAxe.style.transform  = 'rotate('+lastRot+'deg)';  
    
    upDateTitle(liveSlot);
}


function jogWheel(dir){  
    /* might need to check lastRot is pure 15*/      
    lastRot = lastRot + (dir*15);     
    moveSlot = (liveSlot - dir);
    if(moveSlot<0){
        moveSlot = 23;            
    }
    if(moveSlot>23){
        moveSlot = 0;          
    } 
    changeLiveSlot(liveSlot,moveSlot);      
    
    psAxe.style.transition = "transform 0.3s ease-out"; 
    psAxe.style.transform  = 'rotate('+lastRot+'deg)';             
        
    
    upDateTitle(liveSlot);
}
//mouse ended/no mouse functions ----------------


function jogClick(inc){
    if(xEnd==xStart)
    {
        jogWheel(inc);
    }
}



function upDateTitle(inc){
    if(initSlot == inc)
    {
        return;
    }
        
    rollTitle();    
    rollSliceNames();
    setTimeout(function() {changeName(inc)}, 420);
};

function changeName(inc){
  
    //sName.innerHTML = sliceNames[inc];
   
    sName.innerHTML = sliceDB[inc%10].shortname;
    
    
   
    //sNameBox.style.width = `${sWidths[inc]}vw`;
    //exp.style.width = `${sWidths[inc]}vw`;

    
    
    clipBoxEle.style.width = sliceDB[inc%10].width;
    exp.style.width = sliceDB[inc%10].width; 
    
    





    /* roll the full name here */

    const tempArr = sliceDB[inc%10].fullname.split('<br>');   

    if(tempArr.length ==1)
    {
        longName1.innerHTML = tempArr[0];
    }
    else{
        longName1.innerHTML = tempArr[0];
        longName2.innerHTML = tempArr[1];
    }    
    
    price.innerHTML = sliceDB[inc%10].price;
}


function rollTitle(){    
    sName.classList.remove("anim"); 
    void sName.offsetWidth; 
    sName.classList.add("anim"); 
}

function rollSliceNames(){
    longName1.classList.remove("littleAnim"); 
    void longName1.offsetWidth; 
    longName1.classList.add("littleAnim"); 
    longName2.classList.remove("littleAnim"); 
    void longName1.offsetWidth; 
    longName2.classList.add("littleAnim"); 
    price.classList.remove("littleAnim"); 
    void price.offsetWidth; 
    price.classList.add("littleAnim"); 
}

/*
function boardSliceMain(){
    //bsAnimUsed = true;
    setTimeout(function() {boardSliceAnim(3)}, 300);
    setTimeout(function() {boardSliceAnim(7)}, 600);
    setTimeout(function() {boardSliceAnim(2)}, 900);
    setTimeout(function() {boardSliceAnim(6)}, 1200);
    setTimeout(function() {boardSliceAnim(1)}, 1500);
    setTimeout(function() {boardSliceAnim(5)}, 1800);
}*/

function boardSliceSequence(){
    //bsAnimUsed = true;
    setTimeout(function() {bsarr[3].style.opacity = "0"}, 300);
    setTimeout(function() {bsarr[7].style.opacity = "0"}, 600);
    setTimeout(function() {bsarr[2].style.opacity = "0"}, 900);
    setTimeout(function() {bsarr[6].style.opacity = "0"}, 1200);
    setTimeout(function() {bsarr[1].style.opacity = "0"}, 1500);
    setTimeout(function() {bsarr[5].style.opacity = "0"}, 1800);
}



/*
function boardSliceAnim(inc){    
    bsarr[inc].style.opacity = "0";
}*/



function breadSequence()
{
    setTimeout(function() {breadEle.src = "Pmedia/Step_2.png"}, 300);
    setTimeout(function() {breadEle.src = "Pmedia/Step_3.png"}, 600);
    setTimeout(function() {breadEle.src = "Pmedia/Step_4.png"}, 900);
    setTimeout(function() {breadEle.src = "Pmedia/Step_5.png"}, 1200);
}





/*
function fanSequenceold(){   
    let ticker = 100;

    anchorArr[20].style.marginLeft ="0vw";
    anchorArr[20].style.marginTop ="0vw";

    for(let i = 21;i<24;i++)
    {
        setTimeout(function() {anchorArr[i].style.marginLeft ="0vw";
        anchorArr[i].style.marginTop ="0vw";}, ticker);
        ticker+= 100;
    }

    for(let i = 0;i<20;i++)
    {
        setTimeout(function() {anchorArr[i].style.marginLeft ="0vw";
        anchorArr[i].style.marginTop ="0vw";}, ticker);
        ticker+= 200;
    }    
}*/




function fanSequence(){    
    let ticker = 50;

    anchorArr[20].classList.remove("swingin");    

    for(let i = 21;i<24;i++)
    {
        setTimeout(function() {anchorArr[i].classList.remove("swingin")}, ticker);
        ticker+= 50;
    }

    for(let i = 0;i<20;i++)
    {
        setTimeout(function() {anchorArr[i].classList.remove("swingin");}, ticker);
        ticker+= 50;
    }    
}


function fanSequence2(){    
    let ticker = 50;

    //anchorArr[20].classList.remove("swingin");    
    /*anchorArr[0].style.marginLeft=null;
    anchorArr[0].style.marginTop=null;*/

    anchorArr[20].removeAttribute("style");

    
    for(let i = 21;i<24;i++)
    {
        setTimeout(function() {anchorArr[i].removeAttribute("style")}, ticker);
        ticker+= 50;
    }

    for(let i = 0;i<20;i++)
    {
        setTimeout(function() {anchorArr[i].removeAttribute("style")}, ticker);
        ticker+= 50;
    }  
}




function calcZoom()
{
    //console.log(window.innerHeight/window.innerWidth,.5,1.5);
    return clampNumber(window.innerHeight/window.innerWidth,.5,1)*2;
}









//helper functions -------------------------

function clampNumber(num, a, b){
   return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
}


//helper functions -------------------------






//testing functions  ------------------------
document.addEventListener('keydown', function(e){
  if(e.key === '1')
  {
    console.log(clampNumber(window.innerHeight/window.innerWidth,.5,1));
     // console.log(thistestid);
    //console.log(Math.sin(34* (Math.PI / 180)));
      //jogWheel(1);      
      //console.log(1);
  }  
});

document.addEventListener('keydown', function(e){
  if(e.key === '2')
  {
    
    //setTimeout(function() {menu.classList.remove("pre-hide")}, 600);
    //console.log(sliceDB[0].images.a)
    //thistestid.src = sliceDB[1].images.a;
      //jogWheel(-1);
    //console.log(2);
  }  
});


//testing functions  ------------------------




























