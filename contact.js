document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';


    }
    else{
        document.querySelector('.ham').style.display='none';
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline';

        },400);
        

    }
})
function validate_email(field_condition, alert_message) {
    with(field_condition) {
      apos = value.indexOf("@");
      dotpos = value.lastIndexOf(".");
      if (apos < 1 || dotpos - apos < 2) {
        alert(alert_message);
        return false;
      } else {
        return true;
      }
    }
  }

  function validate_form(form) {
    with(form) {
      if (validate_email(email, "This E-Mail Address is not a valid!") == false) {
        email.focus();
        return false;
      }
    }
  }
let checkbox = document.getElementById("checkbox");
      checkbox.addEventListener( "change", () => {
         if ( checkbox.checked ) {
            text.innerHTML = " Check box is checked. ";
         } else {
            text.innerHTML = "";
         }
      });
