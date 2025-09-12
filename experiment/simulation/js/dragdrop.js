function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    
    
    //ev.target.appendChild(document.getElementById(data));
    if(data == "drag1")
    {
        window.location.href = "switchsimu.html";
    }
    if(data == "drag2")
    {
        location.href = "hubsimu.html";
    }
 
    if(data == "drag3")
    {
        location.href = "routersimu.html";
    }
    if(data == "drag4")
    {
        location.href = "bridgesimu.html";
    }
}