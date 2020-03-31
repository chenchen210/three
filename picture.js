window.onload=function(){
    !function(){
        var div = document.getElementById("box");
        var img1=document.createElement("img");
        img1.src="imgs/b1.png"
        div.appendChild(img1);
        var img2=document.createElement("img");
        img2.src="imgs/b2.png"
        div.appendChild(img2); 
        var img3=document.createElement("img");
        img3.src="imgs/b3.png"
        div.appendChild(img3); 
        var img4=document.createElement("img");
        img4.src="imgs/b4.png"
        div.appendChild(img4); 
        var img5=document.createElement("img");
        img5.src="imgs/b5.png"
        div.appendChild(img5); 

        var span1=document.createElement("span");
        span1.innerHTML="<";
        span1.id="prev";
        div.appendChild(span1);
        var span2=document.createElement("span");
        span2.innerHTML=">";
        span2.id="next";
        div.appendChild(span2);
        
        var div1=document.createElement("div");
        div1.id="bottom";
        div.appendChild(div1);
        var list=document.createElement("ul");
        list.className="num";
        for(var j=1;j<=5;j++){
            var li=document.createElement("li");
            li.innerHTML=j;
            list.appendChild(li);
        }
        div1.appendChild(list);
    }();
    var numlist=document.getElementsByClassName("num")[0].children;
    var imgs=document.getElementsByTagName("img");
    var box=document.getElementById("box");
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var i=0;
    for(var j=0;j<numlist.length;j++){
        numlist[j].index=j;
        numlist[j].onclick=function(){
            for(var k=0;k<numlist.length;k++){
                imgs[k].style.display='none';
                numlist[k].style.background="#fff";
            }
            imgs[this.index].style.display='block';
            i=this.index;
            this.style.background="red";
        }
    }

    function imgChange(){
        imgs[i%5].style.display='none';
        i++;
        imgs[i%5].style.display='block';
        for(var k=0;k<numlist.length;k++){
            numlist[k].style.background="#fff";
        };
        numlist[i%5].style.background="red";
    }
    var timer=setInterval(imgChange,3000);
    // box.onmouseover=function(){
    //     clearInterval(timer);
    // }
    // box.onmouseout=function(){
    //     timer=setInterval(imgChange,2000);
    // }
    prev.onclick=function(){
        imgs[i%5].style.display='none';
        for(var k=0;k<numlist.length;k++){
            numlist[k].style.background="#fff";
        }
        i--;
        if(i<0){
            i=4;
        }
        imgs[i%5].style.display='block';
        numlist[i%5].style.background="red";
        console.log("left");
    }
    next.onclick=function(){
        imgChange();
        console.log("right");s
    }
}