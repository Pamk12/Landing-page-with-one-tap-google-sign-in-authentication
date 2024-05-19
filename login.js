function handlecredentialsresponse(response){
  console.log(response)
}
function Init(){
   google.accounts.id.initialize({
    client_id:"962439370905-7ui58r928k3o7up9s74ocdlp7f8vvf9k.apps.googleusercontent.com",
    auto_select:true,
    callback:handlecredentialsresponse
   })
   google.accounts.id.prompt()
}   