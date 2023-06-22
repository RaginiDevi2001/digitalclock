function digitalclock()
{
    var date=new Date();
    console.log(date);
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    // var ml=date.getMilliseconds();
    var dt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    if(mo==0)
    {
        mo="jan"
    }
    else if(mo==1)
    {
        mo="feb"
    }
    else if(mo==2)
    {
        mo="mar"
    }
    else if(mo==3)
    {
        mo="apr"
    }
    else if(mo==4)
    {
        mo="may"
    }
    else if(mo==5)
    {
        mo="june"
    }
    else if(mo==6)
    {
        mo="july"
    }
    else if(mo==7)
    {
        mo="aug"
    }
    else if(mo==8)
    {
        mo="sep"
    }
    else if(mo==9)
    {
        mo="oct"
    }
    else if(mo==10)
    {
        mo="nov"
    }
    else if(mo==11)
    {
        mo="dec"
    }
switch(day)
{
case 0:day="sunday"
document.body.style.backgroundImage="url(./gallery./images./photo1.jpg)"
break;
case 1:day="monday"
break;
case 2:day="tueday"
break;
case 3:day="wedday"
break;
case 4:day="thurday"
break;
case 5:day="friday"
break;
case 6:day="saturday"
break;
}


document.getElementById("date").innerHTML=`${dt}/${mo}/${yy}`;
document.getElementById("time").innerHTML=`${hh}/${mm}/${am_pm}`;
document.getElementById("day").innerHTML=day; 
document.getElementById("sec").innerHTML=ss;
setTimeout(digitalclock,1000);
}


digitalclock()