function validateName(name){
    if(name === ""){
      return false;
    }
  
    return true;
  }
  
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function validatePhone(phone){
    if(phone === ""){
      return false;
    }
  
    return true;
  }
  
  function validateSubject(subject){
    if(subject === ""){
      return false;
    }
  
    return true;
  }
  
  function validateMessage(message){
    if(message === ""){
      return false;
    }
    
    return true;
  }
  
  function validateMessageLength(message){
    if(message.length < 30){
      return false;
    }
    
    return true;
  }
  
  /* **** VALIDATE FORM ON SUBMIT **** */
  
  function validateForm(event) {
    
      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let phone = document.querySelector("#phone").value;
      let subject = document.querySelector("#subject").value;
      let message = document.querySelector("#message").value;
      let radios = document.getElementsByName('gender');
  
      if(!validateName(name)){
        alert("Unesite vase ime.");
  
        return false;
      }
  
  
      if(!validateEmail(email)){
        alert("Unesite validan email.");
  
        return false;
      }
  
      if(!validatePhone(phone)){
        alert("Unesite broj telefona.");
  
        return false;
      }
  
      if(!validateSubject(subject)){
        alert("Unesite temu.");
  
        return false;
      }
  
      if(!validateMessage(message)){
        alert("Unesite poruku.");
  
        return false;
      }
  
      if(!validateMessageLength(message)){
        alert("Poruka mora sadrzati bar 30 karaktera");
  
        return false;
      }

      let gender;

      for (let i = 0, length = radios.length; i < length; i++){
        if (radios[i].checked){
          gender = radios[i].value;
  
          break;
        }
      }

      if(gender == undefined){
        gender = "Left empty.";
      }      

      let date = getTodaysDate();

      alert("Ime: " + name + "\nE-mail: " + email + "\nTelefon: " + phone + "\nTema: " + subject + "\nPol: " + gender + "\nPoruka: " + message);
  
      return true;
  }