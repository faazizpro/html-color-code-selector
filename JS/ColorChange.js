/*---------------------------Indian Red---------------------*/
//Color Fill for IndianRed
document.getElementById('indianRedChange').addEventListener('click', function(){
    document.getElementById('indianRedFill').style.backgroundColor = '#CD5C5C';
});

//Copy Text for IndianRed
document.getElementById('btnCopy').addEventListener('click', function(){
    const text = document.getElementById('copyText');
    const copytext = text.innerText;

    //Now copy the text for IndianRed
    navigator.clipboard.writeText(copytext);

    //Show alert for IndianRed
    alert(`Code ${copytext} copied`);
});


/*---------------------------Indian Red---------------------*/
//Color Fill for LightCoral
document.getElementById('lightCoralChange').addEventListener('click', function(){
    document.getElementById('lightCoralFill').style.backgroundColor = '#F08080';
});

//Copy Text for LightCoral
document.getElementById('btnLightCoral').addEventListener('click', function(){
    const text = document.getElementById('copyLightCoral');
    const copytext = text.innerText;

    //Now copy the text for IndianRed
    navigator.clipboard.writeText(copytext);

    //Show alert for IndianRed
    alert(`Code ${copytext} copied`);
});

/*---------------------------Salmon---------------------*/
//Color Fill for Salmon
document.getElementById('salmonChange').addEventListener('click', function(){
    document.getElementById('salmonFill').style.backgroundColor = '#FA8072';
});

//Copy Text for Salmon
document.getElementById('btnSalmon').addEventListener('click', function(){
    const text = document.getElementById('copySalmon');
    const copytext = text.innerText;

    //Now copy the text for IndianRed
    navigator.clipboard.writeText(copytext);

    //Show alert for IndianRed
    alert(`Code ${copytext} copied`);
});

/*---------------------------DarkSalmon---------------------*/
//Color Fill for DarkSalmon
document.getElementById('DarkSalmonChange').addEventListener('click', function(){
    document.getElementById('DarkSalmonFill').style.backgroundColor = '#E9967A';
});

//Copy Text for DarkSalmon
document.getElementById('btnDarkSalmon').addEventListener('click', function(){
    const text = document.getElementById('copyDarkSalmon');
    const copytext = text.innerText;

    //Now copy the text for DarkSalmon
    navigator.clipboard.writeText(copytext);

    //Show alert for DarkSalmon
    alert(`Code ${copytext} copied`);
});