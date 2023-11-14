chrome.runtime.onMessage.addListener(
    function(message){
        let selector = '#contentWrap > ul > li:nth-child(6) > a'
        page.evaluate((selector) => document.querySelector(selector).click(), selector); 
        document.querySelector('#qsmsmessage').value = "Ticket #\n\nPW:"+message+ "\n\nPlease do not reply to this message as this number is not monitored."
    }
  )