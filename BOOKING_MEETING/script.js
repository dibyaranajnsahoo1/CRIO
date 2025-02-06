
// this is for create fetch request
const makeRequest = async (postObject) => {
    const url = "https://jsonplaceholder.typicode.com/posts";
  
    return await fetch(url, {
      method: "POST",
      body: JSON.stringify(postObject),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((response) => response.json());
  };
  
//   main form submit 
  const form = document.getElementById("booking-form");
  const email = document.getElementById("email");
  const fullName = document.getElementById("fullName");
  
  
  const isEmailValid = (value) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValue = value.trim();
  
    if (!emailRegex.test(emailValue)) return false;
  
    return true;
  };

  const isNameValid = (value) => {
    const nameRegex = /^[a-z][-a-z0-9_]+$/;
    const nameValue = value.trim();
  
    if (!nameRegex.test(nameValue)) return false;
  
    return true;
  };
  
  const addErrorMessage = (element, id, messageString) => {
    const messageElement = document.createElement("p");
    messageElement.textContent = messageString;
    messageElement.style.color = "red";
    messageElement.id = id;
    element.after(messageElement);
  };
  
  const removeErrorMessage = (id) => {
    const messageEl = document.getElementById(id);
    if (messageEl) {
      messageEl.remove();
    }
  };

  fullName.addEventListener("focus", () =>{
    removeErrorMessage("name-error");
  })

  fullName.addEventListener("blur",(event)=>{
    const name = event.target.value;
    
    if(!isNameValid(name)){
        addErrorMessage(fullName , "name-error","Invalid Name")
    }else{
        removeErrorMessage("name-error")
    }


  });
  
  email.addEventListener("focus", () => {
    removeErrorMessage("email-error");
  });
  
  email.addEventListener("blur", (e) => {
    if (!isEmailValid(e.target.value)) {
      addErrorMessage(email, "email-error", "Invalid Email");
    } else {
      removeErrorMessage("email-error");
    }
  });
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (!isEmailValid(form.elements["email"].value)&& !isNameValid(form.elements["fullName"].value)) {
      return alert("Invalid FullName or Email ");
    }
  

    const date = new Date(form.elements["date"].value);
  
    const data = {
      fullName: form.elements["fullName"].value,
      email: form.elements["email"].value,
      doctor: form.elements["doctor"].value,
      location: form.elements["location"].value,
      date: date
    };
  
    makeRequest(data).then((res) => console.log(res));
  });
  

  window.addEventListener("beforeunload",(event) =>{
   const payLoad = {
    name: fullName.value,
    email:email.value,

   }
   localStorage.setItem("formdata", JSON.stringify(payLoad))
   console.log(payLoad)

  })