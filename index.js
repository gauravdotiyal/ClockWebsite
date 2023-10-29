setInterval(() => {
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();

    hrotation=30*htime + mtime/2;   
    mrotation=mtime*6;
    srotation=6*stime;

    //Functions for rotation by connecting through html class of hour minute and second
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;

}, 1000);
