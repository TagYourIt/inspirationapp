var skin = {

    // recent news title bar color and image
    // if use image, bar color and title should empty
    // if use text title, bar image should empty
    "RECENT_BAR_IMAGE"     : "",        // example: imgs/wpapp.png, size: 320x45
    "RECENT_BAR_COLOR"     : "#b3b9c7", // example: #ff840a

    // category title bar color and image
    // if use image, bar color and title should empty
    // if use text title, bar image should empty
    "CATEG_BAR_IMAGE"     : "",        // example: imgs/wpapp.png, size: 320x45
    "CATEG_BAR_COLOR"     : "#b3b9c7", // example: #ff840a
    "CATEG_DASHBOARD_BGCOLOR" : "#333",

    // blog post title bar color and image
    // if use image, bar color should empty
    // if use text title, bar image should empty
    "POST_BAR_IMAGE"      : "",        // example: imgs/wpapp.png, size: 320x45
    "POST_BAR_COLOR"      : "#b3b9c7", // example: #ff840a

    // about tab bar color and image
    // if use image, bar color and title should empty
    // if use text title, bar image should empty
    "ABOUT_BAR_IMAGE"     : "",        // example: imgs/wpapp.png, size: 320x45
    "ABOUT_BAR_COLOR"     : "#b3b9c7", // example: #ff840a
    
    "WEBVIEW_BAR_IMAGE"   : "",        // example: imgs/wpapp.png, size: 320x45
    "WEBVIEW_BAR_COLOR"   : "#b3b9c7", // example: #ff840a
    
    "TWITTER_BAR_IMAGE"   : "",        // example: imgs/wpapp.png, size: 320x45
    "TWITTER_BAR_COLOR"   : "#b3b9c7", // example: #ff840a
    
    "PAGES_BAR_IMAGE"     : "",        // example: imgs/wpapp.png, size: 320x45
    "PAGES_BAR_COLOR"     : "#b3b9c7", // example: #ff840a

    // table view for recent news
    "RECENT_TV_BGCOLOR"    : "",   
    "RECENT_TV_BGCOLOR_ALT": "",   
    "RECENT_TV_SEPARATOR_COLOR": "#43a9d9",   
    "RECENT_TV_TITLE_COLOR": "#000",   
    "RECENT_TV_META_COLOR" : "#b2b3b7",  

    // table view for categories 
    "CATEG_TV_BGCOLOR"    : "",   
    "CATEG_TV_BGCOLOR_ALT": "",   
    "CATEG_TV_SEPARATOR_COLOR": "#43a9d9",   
    "CATEG_TV_TITLE_COLOR": "#000",   
    "CATEG_TV_META_COLOR" : "#b2b3b7",  
    
    // table view for twitter 
    "TWITTER_TV_BGCOLOR"    : "",   
    "TWITTER_TV_BGCOLOR_ALT": "",   
    "TWITTER_TV_SEPARATOR_COLOR": "#43a9d9",   
    "TWITTER_TV_TITLE_COLOR": "#000",   
    "TWITTER_TV_META_COLOR" : "#b2b3b7", 
    
    // table view for pages 
    "PAGES_TV_BGCOLOR"    : "#f3f5ff",   
    "PAGES_TV_BGCOLOR_ALT": "#e3f1fc",   
    "PAGES_TV_TITLE_COLOR": "#000", 

    "DUMMY" : ""   
};

skin.RECENT_TV_GRADIENT = {
  type:'linear',
  colors:[ {color:'#f3f5ff',position:0.0},{color:'#e3f1fc',position:1.0} ]
};

skin.CATEG_TV_GRADIENT = {
  type:'linear',
  colors:[ {color:'#f3f5ff',position:0.0},{color:'#e3f1fc',position:1.0} ]
};

skin.TWITTER_TV_GRADIENT = {
  type:'linear',
  colors:[ {color:'#f3f5ff',position:0.0},{color:'#e3f1fc',position:1.0} ]
};