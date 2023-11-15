// window.addEventListener ("load", 
// chrome.runtime.onMessage.addListener(
//     function(message){
//         // let selector = '#contentWrap > ul > li:nth-child(6) > a'
//         // document.evaluate((selector) => document.querySelector(selector).click(), selector); 
//         // document.querySelector('#qsmsmessage').value = "Ticket #\n\nPW:"+message+ "\n\nPlease do not reply to this message as this number is not monitored."
//         var d=document,b='burst.transmitsms.com';if(!d.getElementById('bSMS')){for(var x=0;x<2;x++){var s=d.getElementsByTagName('head')[0].appendChild(d.createElement('script'));s.type='text/javascript';if(!x){var v='var aK=\'9e0262cddc1f7ab4fbad8462e9ed2bae\',aS=\'Rfs2fEc2SEGR4YTa\',aI=\'9e7c4f49a00dc386abbee5d50e84a179\'';try{s.text=v;}catch(e){s.textContent=v;}}else{s.src=d.location.protocol+'//'+b+'/burstSMS.js?r=1789&amp;id=41114';}}}else{bSMS.show()};
//     }
//   )
//   ,false);
// window.addEventListener ("load", 
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         // Inject code into the current tab
//         chrome.tabs.executeScript(tabs[0].id, {
//         code: 'document.body.style.backgroundColor = "lightblue";'
//         })
//     })
//   , false);
