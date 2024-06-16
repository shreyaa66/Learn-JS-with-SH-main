const randomColor = function () {
    const hexa = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hexa[Math.floor(Math.random() * 16)];
    }
  
    return color;
  };
  
  let intervalId;
  const start = function () {
    if(!intervalId){
        intervalId = setInterval(changeBG, 1000);
    }
    function changeBG() {
      document.body.style.backgroundColor = randomColor();
    };
    
  };

  const stop = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.getElementById('start').addEventListener('click', start);
  document.getElementById('stop').addEventListener('click', stop);
  