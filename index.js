//change all the child node display-style  of image-frame 
function deleteImage(){
                var nodes = document.getElementById('image-frame').childNodes;
                for(var i=0; i<nodes.length; i++) {
                if (nodes[i].nodeName.toLowerCase() == 'div') {
                        nodes[i].style.display="none";
                }
        }
}



///setting image
function setImage(a,b,x){
        deleteImage();
  
    var r= (a/x)-2;  //number of row
    var c=b/x;       //number of column

    var i=0;         //initial image number
    var j=1;
    var xx=0;        // this variable will store maximum top position
    var yy=0;        // this variable will store maximum left position
    var k=0;
    var l=1;
    
    for(;i<r-1;i++)
    {
        var n=document.getElementById(""+(i+1));         // change property of top row image
        n.style.display="block";
        n.style.width=x+"px";
        n.style.height=x+"px";
        n.style.top=xx+"px";
        n.style.left=yy+"px";
        yy+=x;
    }

   
    for(;j<=c+1;j++)
    {
        var n=document.getElementById(""+(i+1));            // change property of right side image
        n.style.display="block";
        n.style.width=x+"px";
        n.style.height=x+"px";
        n.style.top=xx+"px";
        n.style.left=yy+"px";
        console.log("rupa");
        i++;
        xx+=x;
    }
    for(;k<r-1;k++)
    {
        var n=document.getElementById(""+(i+1));            // change property of bottom side image
        n.style.display="block";
        n.style.width=x+"px";
        n.style.height=x+"px";
        n.style.top=xx+"px";
        n.style.left=yy+"px";
        yy-=x;
        i++;
    }
    for(;l<=c+1;l++)
    {
        var n=document.getElementById(""+(i+1));             // change property of left side image
        n.style.display="block";
        n.style.width=x+"px";
        n.style.height=x+"px";
        n.style.top=xx+"px";
        n.style.left=yy+"px";
        console.log("rupa");
        i++;
        xx-=x;
    }
    //after setting image resize text contanier and image container  width  and height
    var total_column=c;
    var total_row=r-1;
    var m=x+"px";
    var h=(x*total_column);
    var w=total_row*x;
    let para = document.querySelector('.content');
    
    para.style.margin=m;
    para.style.boxSizing="border-box";
    para.style.height=h-1+"px";
    para.style.width=w-3+"px";
    para.style.padding="40px 50px";
    let wrap=document.querySelector('.container');
    wrap.style.height=h-2+(x+x)+"px";
    wrap.style.width=w-4+(x+x)+"px";
    
}

//setting image size according to windowheight
function imagesize()
{
        let windowHeight = window.innerWidth;
        var x=windowHeight/10;       
         return x;    
}

//resizing content
function resizingContent() {
       
    let imageFrame = document.querySelector('.container');
    let mainContent = document.querySelector('.content');
    let paragraphContent = document.querySelector('.text');

    let frameWidth = imageFrame.offsetWidth;      
    let windowHeight = window.innerWidth;
    
    var x=parseInt(imagesize());
    imageFrame.style.width = ((Math.max(Math.floor((windowHeight)/ x), 3)) * x) + 'px';

    frameWidth = imageFrame.offsetWidth;
    mainContent.style.width = frameWidth + (x*x) + 'px';
    
    let frameHeight = paragraphContent.offsetHeight;
    
    mainContent.style.height =(Math.floor(Math.floor(300,000/frameWidth)/x)*x)+ 'px';   //setting maximum text area
    setImage(imageFrame.offsetWidth,mainContent.offsetHeight,x);
    
}
///number of image
function numofimage(){
        var cnt=0;
        for(var i=1;i<=54;i++)
        {
                var n=document.getElementById(""+i);
                if(n.style.display=="block"){
                        cnt++;
                }
        }
        
        return cnt;
}
//swapImage animation
let id;
function swapImageAnimation(){
        var cnt=numofimage();
        var imagewidth=parseInt(imagesize());
        var imageIndex =new Array();
        
        for(var num=0;num<=cnt;num++)
        {
                imageIndex[num]=num;
        }

        id=setInterval(swap,1000);
        function swap()
        {
        var r=Math.floor((Math.random() * cnt) + 1);
        if(r==cnt){
              r--;
        }
        temp = imageIndex[r];
        imageIndex[r] = imageIndex[r+1];
        imageIndex[r+1] = temp;
        var x=document.getElementById(""+imageIndex[r]);
        var xleft=x.style.left;
        var xtop=x.style.top;
        
        var y=document.getElementById(""+imageIndex[r+1]);
        var yleft=y.style.left;
        var ytop=y.style.top;
        //swapping image
        x.style.left=yleft;
        x.style.top=ytop;
        x.style.transition="all 1s";
        y.style.left=xleft;
        y.style.top=xtop;
        y.style.transition="all 1s";                      
        }   
}

window.onload = () => {  
    resizingContent( );
    swapImageAnimation();
    window.addEventListener('resize', () => {      
        resizingContent();
        clearInterval(id);
        swapImageAnimation();
    }); 
};