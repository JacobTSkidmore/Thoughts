function SendMail() {
  var params = {
    from_name : document.getElementById("name").value,
    email_id : document.getElementById("email").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_d5s8gcx", "template_v77wgdu", params).then(function (res) {
    alert("Message succesful!");
  })
}