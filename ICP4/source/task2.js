var request = new XMLHttpRequest()
//adding an function getdata
function getData(){
  //defining an variable to get the user details
    var username=document.getElementById("uname").value;
    console.log(username)
    var link="https://api.github.com/users/"+username;

request.open('get', link, true)
request.onload = function(){
    // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  //to get add different elements and send the details to html
  console.log(data.login, data.id, data.avatar_url, data.html_url)
  document.getElementById("login").innerHTML=data.login
  document.getElementById("num").innerHTML=data.id
  document.getElementById("img").src=data.avatar_url
  document.getElementById("url").innerHTML=data.html_url



}
request.send()
}