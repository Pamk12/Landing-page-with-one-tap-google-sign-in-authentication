function handleCredentialsResponse(response){
  console.log(response)
  if(response.credential){
    let jwt = response.credential
    let user = JSON.parse(atob(jwt.split(".")[1]))
    console.log(user)
    document.getElementById('Profile').innerHTML=`
    Hi, ${user.given_name}
    <img src="${user.picture}"/>`
   }
}
function init(){
   google.accounts.id.initialize({
    client_id:"", #add your client id.
    auto_select:true,
    redirect_uri:"http://localhost/dashboard.html",
    callback : handleCredentialsResponse
   });
   google.accounts.id.prompt();
   document.getElementById('Log').style.display='block'
}  
function handleLogout(){
  google.accounts.id.disableAutoSelect();
  google.accounts.id.prompt();
  document.getElementById('Profile').innerHTML=`Profile`
  document.getElementById('Log').style.display='none'
} 
