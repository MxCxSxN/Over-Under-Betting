//Before loading core, inject the footer messages


(function() {
  
  var __scriptLoader = function(url, callback, async) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.async = async;
    
    if (script.readyState) {  //IE
      if (callback && typeof(callback)=='function') {
      
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
      }
    } else {  //Others
      if (callback && typeof(callback)=='function') {
        script.onload = function(){
            callback();
        };
      }
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
  
  
  
  function __executeSiteManagerCore() {
    

  var onCpScriptLoad = function() {
  
    // First, replace elements with components
    (function() {
  var key = "BookingWidget";
  
  
  var html = "    <div ttweb-component=\"BookingWidget\"  class=\"ttweb-booking-widget-component\"  data-tt-show-rates=\"false\"   data-tt-show-offer-code=\"true\"   data-tt-show-specials=\"true\" ></div>    ";
  var elements = document.querySelectorAll("[data-conversion-plus-placeholder="+key+"]")
  for (var i = 0,ii=elements.length; i<ii; i++) {
    elements[i].innerHTML=html;
  }
})();
(function() {
  var key = "BookingWidgetButton";
  
  
  var html = "    <span ttweb-component=\"BookingWidgetButton\">   <a href=\"https://orleanscasino.reztrip.com/\" role=\"button\" class=\"btn btn--primary\">     Book Now   </a></span>  ";
  var elements = document.querySelectorAll("[data-conversion-plus-placeholder="+key+"]")
  for (var i = 0,ii=elements.length; i<ii; i++) {
    elements[i].innerHTML=html;
  }
})();
(function() {
  var key = "ConversionPlusBanner";
  
  
  var html = "    <div ttweb-component=\"ConversionPlusBanner\"  data-tt-min-rate=\"null\"  data-tt-max-rate=\"null\"  data-tt-show-ota=\"true\"   data-tt-allow-equal-ota-rates=\"true\"   data-tt-show-scarcity=\"null\"  data-tt-max-rooms-available=\"null\"  data-tt-show-activity=\"true\"  data-tt-recent-booking-min=\"100\"  data-tt-find-lowest-rate-range= \"7\"  data-tt-on-button-click=\"open-reztrip-link\"  data-tt-select-dates-button-click=\"open-booking-widget\"  data-tt-fallback-on-button-click=\"open-booking-widget\"      class=\"conversion-plus-banner\">  <div class=\"fallback-content\"><p>Book Direct, Best Rate Guaranteed</p></div></div>    ";
  var elements = document.querySelectorAll("[data-conversion-plus-placeholder="+key+"]")
  for (var i = 0,ii=elements.length; i<ii; i++) {
    elements[i].innerHTML=html;
  }
})();
var messages = document.createElement("div")
document.body.appendChild(messages);

messages.outerHTML = "\n\n  <div ttweb-component=\"ConversionPlusMessageList\">\n    \n    \n      \n    \n      \n    \n  </div>\n";

  
    var rootPath = 'https://boyd-prod-api.ttaws.com';
if (rootPath == '') {
  rootPath = null;
}
var defaultTimezone = 'America/New_York';
if (defaultTimezone == '') {
  defaultTimezone = 'America/New_York';
}
var defaultCurrency = 'USD';
if (defaultCurrency == '') {
  defaultCurrency = 'USD';
}

var locale = 'en';
if (locale == '') {
  locale = 'en';
}

var defaultNumAdults = 2;

var localeOverrides = {
    'conversion-plus': {}
}


localeOverrides['conversion-plus']['guaranteed_price'] = "Best Available Rate";





  var type = TTWebHotel.Reztrip;  



var minRate = null;
var maxRate = null;

var opts = {
  defaultLocale: locale,
  defaultCurrency: defaultCurrency,
  defaultTimezone: defaultTimezone,
  defaultNumAdults:   defaultNumAdults,
  localeOverrides: localeOverrides,
  minRate: minRate,
  maxRate: maxRate
}
if (type == TTWebHotel.Reztrip) {
  opts.hotelId  = 'OR';
  opts.portalId = 'orleanscasino';
  opts.rootPath = rootPath;
} else if (type == TTWebHotel.Rvng) {
  opts.channelCode ='';
  opts.chainCode ='';
  opts.hotelCode ='';
  opts.whmHotelCode ='';
  //env: 'prod',
  opts.bookingEngineUrl='';

}

var ttwebHotel = new TTWebHotel(type, opts);
window.ttwebHotel = ttwebHotel;




var theme = 'base-theme' || null;




    if (ttwebHotel) {
      
        (function() {
          var selectedUrls = [];
          
          
        
          var excludedUrls = [];
          
          
        
          ttwebHotel.addTarget("conversion_plus_targets-2020-02-21-211957-email-campaign-abc-31693-305", {
            name: "Email Campaign ABC",
            returningUser: null,
            matchingUrl: "*campaign=ABC*",
            sticky: true,
            selectedUrls: selectedUrls,
            excludedUrls: excludedUrls,
            bookingSearch: null
          })
        })();
      
        (function() {
          var selectedUrls = [];
          
          
        
          var excludedUrls = [];
          
          
        
          ttwebHotel.addTarget("conversion_plus_targets-2020-03-06-174351-any-returning-user-31693-305", {
            name: "Any returning user",
            returningUser: true,
            matchingUrl: null,
            sticky: null,
            selectedUrls: selectedUrls,
            excludedUrls: excludedUrls,
            bookingSearch: {"arrival_date":null,"departure_date":null,"min_los":null,"max_los":null,"min_lead_time":null,"room_codes":null,"offer_codes":null}
          })
        })();
      
        (function() {
          var selectedUrls = [];
          
          
        
          var excludedUrls = [];
          
          
        
          ttwebHotel.addTarget("conversion_plus_targets-2020-02-21-211908-april-1-arrival-date-31693-305", {
            name: "April 1 arrival date",
            returningUser: null,
            matchingUrl: "",
            sticky: null,
            selectedUrls: selectedUrls,
            excludedUrls: excludedUrls,
            bookingSearch: {"arrival_date":"2020-04-01","departure_date":null,"min_los":null,"max_los":null,"min_lead_time":null,"room_codes":null,"offer_codes":null}
          })
        })();
          
    }





TTRender.initComponents(ttwebHotel, {
  theme: theme
});

    
  }
  
  
  var myUrl = typeof(url)=='undefined' ? 'https://plugins.traveltripper.io/v3.6.2/cp.min.js' : url;

__scriptLoader(myUrl, onCpScriptLoad)

  



  }



  // Check if there's a draft being specified.
  function _getQueryStringValue (key) {  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  }  
  
  var draft = _getQueryStringValue("draft-url")
  if (draft && draft != '') {
    var url=window.location.protocol + '//' + draft + "/loader.js";
    __scriptLoader(url)
    //TODO: Also load live edit scripts?
  } else {
    __executeSiteManagerCore()
  }


})();

//TEMP styling
var head = document.getElementsByTagName('head')[0];
var s = document.createElement('style');
s.setAttribute('type', 'text/css');
css = ".CC main a.ttweb-booking-button:not(.button) { color: white; }\n";
css += ".ttweb-banner { border-top: 1px solid white; }";

css += ".cp-message-image-button { max-height: none }";
css += ".cp-message-image-button .ttweb-conversion-plus-message__content .ttweb-cp-message__image img { max-height: 25vh; }";
css += ".cp-message-image-button .ttweb-conversion-plus-message__content .ttweb-cp-message__image img { max-width: 33vw; }";
css += ".cp-message-image-button .ttweb-conversion-plus-message__content a { padding: 0; }";
css += ".ttweb-conversion-plus-message__close { color: white; }";
css += ".ttweb-conversion-plus-message { z-index: 1000; }";

if (s.styleSheet) {   // IE
  s.styleSheet.cssText = css;
} else {                // the world
  s.appendChild(document.createTextNode(css));
}
head.appendChild(s);
