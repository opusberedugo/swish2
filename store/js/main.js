let forms = document.querySelectorAll("form");
let formSwitchTrigger = document.getElementsByClassName("next-form-link");

formSwitchTrigger[0].onclick = () => {
  $(forms[0]).fadeOut(1000, () => {
    $(forms[1]).fadeIn();
  });
}

formSwitchTrigger[1].onclick = () => {
  $(forms[1]).fadeOut(1000, () => {
    $(forms[0]).fadeIn();
  });
}