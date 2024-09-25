let container = document.querySelector(".container");

let inp_first_name = document.querySelector(".inp_first_name");
let inp_last_name = document.querySelector(".inp_last_name");

let inp_email = document.querySelector(".inp_email");

let div_general_enquire = document.querySelector(".div_general_enquire");
let div_support_request = document.querySelector(".div_support_request");

let inp_general_enquire = document.querySelector(".inp_general_enquire");
let inp_support_request = document.querySelector(".inp_support_request");

let input_message = document.querySelector(".input_message");

let input_checkbox = document.querySelector(".input_checkbox");

let input_submit = document.querySelector(".input_submit");

let error_inp_first_name = document.querySelector(".error_inp_first_name");
let error_inp_last_name = document.querySelector(".error_inp_last_name");
let error_inp_email = document.querySelector(".error_inp_email");
let error_query_type = document.querySelector(".error_query_type");
let error_input_message = document.querySelector(".error_input_message");
let error_input_checkbox = document.querySelector(".error_input_checkbox");

let parent_div_Success = document.querySelector(".parent_div_Success");

error_inp_first_name.style.display = "none";
error_inp_last_name.style.display = "none";
error_inp_email.style.display = "none";
error_query_type.style.display = "none";
error_input_message.style.display = "none";
error_input_checkbox.style.display = "none";

parent_div_Success.style.display = "none";

input_submit.addEventListener("click", function (event) {
  event.preventDefault();
  let isValid = true;

  container.style.margin = "25px 0px";

  error_inp_first_name.style.display = "none";
  error_inp_last_name.style.display = "none";
  error_inp_email.style.display = "none";
  error_query_type.style.display = "none";
  error_input_message.style.display = "none";
  error_input_checkbox.style.display = "none";

  inp_first_name.style.borderColor = "";
  inp_last_name.style.borderColor = "";
  inp_email.style.borderColor = "";
  input_message.style.borderColor = "";

  parent_div_Success.style.display = "none";

  if (inp_first_name.value.trim() === "") {
    error_inp_first_name.style.display = "block";
    inp_first_name.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }

  if (inp_last_name.value.trim() === "") {
    error_inp_last_name.style.display = "block";
    inp_last_name.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }

  if (inp_email.value.trim() === "") {
    error_inp_email.style.display = "block";
    inp_email.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }

  if (!inp_general_enquire.checked && !inp_support_request.checked) {
    error_query_type.style.display = "block";
    isValid = false;
  }

  if (input_message.value.trim() === "") {
    error_input_message.style.display = "block";
    input_message.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }

  if (!input_checkbox.checked) {
    error_input_checkbox.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    parent_div_Success.style.display = "block";
    container.style.margin = "45px 0px";
    container.style.transition = "0.2s";
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
});

inp_general_enquire.addEventListener("change", function () {
  if (this.checked) {
    div_general_enquire.style.background = "hsl(148, 38%, 91%)";
    div_general_enquire.style.borderColor = "hsl(169, 82%, 27%)";
    div_support_request.style.background = "";
    div_support_request.style.borderColor = "";
  }
});

inp_support_request.addEventListener("change", function () {
  if (this.checked) {
    div_support_request.style.background = "hsl(148, 38%, 91%)";
    div_support_request.style.borderColor = "hsl(169, 82%, 27%)";
    div_general_enquire.style.background = "";
    div_general_enquire.style.borderColor = "";
  }
});

div_general_enquire.addEventListener("click", function () {
  this.style.background = "hsl(148, 38%, 91%)";
  this.style.borderColor = "hsl(169, 82%, 27%)";

  div_support_request.style.background = "";
  div_support_request.style.borderColor = "";

  inp_general_enquire.checked = true;
});

div_support_request.addEventListener("click", function () {
  this.style.background = "hsl(148, 38%, 91%)";
  this.style.borderColor = "hsl(169, 82%, 27%)";

  div_general_enquire.style.background = "";
  div_general_enquire.style.borderColor = "";

  inp_support_request.checked = true;
});
