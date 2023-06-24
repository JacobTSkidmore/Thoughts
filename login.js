function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username == "admin" && password == "HiddenPassword123") {
    window.location.replace("post.html");
  }
  else {
    alert('Log in failed!')
  }
}