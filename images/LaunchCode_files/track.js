(function(){window.GoogleAnalyticsObject='ga';window.ga=function(){(window.ga.q=window.ga.q||[]).push(arguments);};window.ga.l=1*new Date();})();(function(n){if(window.fbq){return;}
n=window.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments);};if(!window._fbq)window._fbq=n;n.push=n;n.loaded=true;n.version='2.0';n.queue=[];})();var firstScript=document.getElementsByTagName('script')[0];['https://connect.facebook.net/en_US/fbevents.js','https://www.google-analytics.com/analytics.js'].forEach(function(src){var script=document.createElement('script');script.async=true;script.src=src;firstScript.parentNode.insertBefore(script,firstScript)});if(document.domain==="www.launchcode.org"){ga('create','UA-8399719-17','auto');ga('send','pageview');fbq('init','175431256135054');fbq('track',"PageView");}
var referrer_token=getParameterByName("referrer_token");if(referrer_token){document.cookie="referrer_token="+ referrer_token+";"}
function getParameterByName(name,url){if(!url)url=window.location.href;name=name.replace(/[\[\]]/g,"\\$&");var regex=new RegExp("[?&]"+ name+"(=([^&#]*)|&|#|$)"),results=regex.exec(url);if(!results)return null;if(!results[2])return'';return decodeURIComponent(results[2].replace(/\+/g," "));}