var themeButtons=document.getElementsByClassName('theme-mode')
for(var i=0;i<themeButtons.length;i++)
{
    themeButtons[i].addEventListener('click',function(){
        console.log("Clicked")
        var theme=this.dataset.mode;
        console.log(theme)
        setTheme(theme)
    })
}
function setTheme(mode){
    if(mode==="dark")
    {
        document.getElementById('theme-style').href="dark.css";
        document.getElementById('moon').style.display="none"
        document.getElementById("sun").style.display = "inline";

    }
    if(mode==="light")
    {
        document.getElementById("theme-style").href = "";
        document.getElementById("sun").style.display = "none";
        document.getElementById("moon").style.display = "inline";
    }
}