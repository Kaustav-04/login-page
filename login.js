function signup1(){
    var x = document.getElementById("container2");
    var y = document.getElementById("container3");
    if(x.style.display==='grid'){
        y.style.display='flex';
        x.style.display='none';
    }
    else{
        y.style.display = 'none';
        x.style.display = 'grid';
    }
}
function login1() {
    var x = document.getElementById("container3");
    var y = document.getElementById("container2");
    if (x.style.display === 'flex') {
      x.style.display = 'none';
      y.style.display = 'grid';
    }
    else{
        y.style.display = 'none';
        x.style.display = 'flex';
    }
}