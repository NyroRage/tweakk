function showSpecs(){const e=document.querySelectorAll(".specs-table tr:nth-child(n+5)");switch(e[1].style.display){
    // Full Table
    case"none":for(var t=0,n=e.length;t<n;t++)e[t].style.display="table-row";document.getElementById("showButton").innerHTML="Show Less";break;
    // Hidden Rows
    case"table-row":for(t=0,n=e.length;t<n;t++)e[t].style.display="none";document.getElementById("showButton").innerHTML="Show More";break;
    // Initial State
    default:for(t=0,n=e.length;t<n;t++)e[t].style.display="table-row";document.getElementById("showButton").innerHTML="Show Less"}}