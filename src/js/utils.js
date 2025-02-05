window.formSubmitHandler = function (formId, validation) {
    const invalidWarning = document.getElementsByClassName("invalidWarning")[0];
    invalidWarning.style.display = "none";
  
    const form = document.getElementById(formId);
  
    form.addEventListener("submit", (event) => {
      if (!validation()) {
        event.preventDefault();
        invalidWarning.style.display = "block";
        return false;
      }
  
      invalidWarning.style.display = "none";
      return true;
    });
  };
  
  window.REGEX = {
    URL: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
    EMAIL:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  };
  