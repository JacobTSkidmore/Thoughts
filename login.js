function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username == "Karmic" && password == "Haylie011822?!") {
    window.location.replace("post.html");
  }
  else {
    alert('Log in failed!')
  }
}