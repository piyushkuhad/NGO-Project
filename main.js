window.onscroll = changeClass = () => {
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    var root = document.getElementById('root'); 
    if(scrollPosY > 10) {
            root.className = ('sticky');
    } 
    else if(scrollPosY <= 10) {
        root.className =  ('');
    }
}