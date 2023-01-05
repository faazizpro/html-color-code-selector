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
