let password = [];
document.addEventListener('keydown', (event) => {
  password.push(event.key);
  if(password.length == 5){
    let flag = true;
    for(let i=0;i<6;i++){
      if(password[i] != "admin"[i]) flag = false;
    }
    if(flag){
      window.open("Admin", "_blank");
      console.log("[ALERT] PASSED");
      password = [];
    } 
  }
  if(password.length == 6){
    let flag = true;
    for(let i=0;i<6;i++){
      if(password[i] != "musick"[i]) flag = false;
    }
    if(flag){
      window.open("MuSick", "_blank");
      console.log("[ALERT] PASSED");
      password = [];
    } 
  }
  if(password.length == 13){
    let flag = true;
    for(let i=0;i<13;i++){
      if(password[i] != "tokaidatabase"[i]) flag = false;
    }
    if(flag){
      window.open("TokaiDatabase", "_blank");
      console.log("[ALERT] PASSED");
      password = [];
    }
    else{
      console.log(".");
      password = [];
    }
  }
});