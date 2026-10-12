// Project Digital Clock 

const div = document.querySelector('div');
setInterval(()=>{  // setInterval ka kam hai yha pe ki wo continue har second pe run karta rahe time  
    
    let time =  new Date();

    div.textContent = time.toLocaleTimeString();
},1000);