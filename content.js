// Listen for the message from the background script to fill the input field
console.log("hello")
chrome.runtime.onMessage.addListener(
    function(message){
        document.activeElement.value = message
        navigator.clipboard.writeText(message);
        try{
            document.querySelector('#portalPasswordConfirm').value = message
        }catch(err) {
            console.log("not sassboss")
          }
    }
  )