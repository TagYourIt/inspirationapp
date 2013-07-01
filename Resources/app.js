// load module
var Admob = require('ti.admob');

Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;



// load config
Ti.include("config.js");
Ti.include("skin/"+config.SKIN+".js");
Ti.include("categ_list.js");
Ti.include("pages_list.js");




var json_url_recent = config.BLOG_URL + "?json=get_recent_posts&count=" + 
                      config.JSON_POST_COUNT + "&apikey=" + 
                      config.JSON_API_KEY;

var winCategBlogList;

Ti.include(
    "lib/php.js",
    "lib/prettydate.js",
    "lib/load_indicator.js",
    "lib/pull_to_refresh.js",
    "lib/share.js",
    "lib/admob.js",
    "lib/htmldecode.js",
    "lib/push.js",
    "ui/recent.js",
    "ui/list.js",
    "ui/categ.js",
    "ui/about.js",
    "ui/post.js",  
    "ui/webview.js",
    "ui/twitter.js",
    "ui/page.js",
    "ui/page_detail.js",
    "ui/wpapp.js"
);

WpApp.init_db();
WpApp.open();


	WpApp.addEventListener('closeCurrent',function(e){
		// Ti.UI.currentWindow.close({animate:true});
		//Ti.UI.currentTab.close({animate:true});
		//var tempCurrentWindow = Ti.UI.getCurrentWindow;//return object UIModule
		
		//Ti.UI.currentTab.close(winRecent);
		//Ti.UI.getCurrentTab//return object UIModule
		//var currentWindow = WpApp.winRecent;
		//alert(currentWindow);
		//Recent.close();//dont work
		//WpApp.setActiveTab(Categ);//works
		//WpApp.currentTab.close();//undefined
		//WpApp.getActiveTab.close();//works closes the active tab and display the menu
		//WpApp.setActiveTab(Categ);//works
		//alert(e);//source Ti.UI.TabGroup
		//WpApp.close(e.source);//works closed the entire tabgroup
		//alert(e.eventObject);
		//Ti.API.info(WpApp.getActiveTab().window.title);//returns Recent News
		//Ti.API.info(e);
		//Ti.UI.currentTab.open(winRecent,{animated:true});//dont work
		Ti.API.info(WpApp.getActiveTab().titleid);//wpapp_recent
		//WpApp.getActiveTab().window.close();//Can not close root window of a tab. Use TabGroup.removeTab instead
		//Ti.API.info(Recent.);
		//Ti.UI.getCurrentTab().ge
		Ti.API.info(WpApp.getActiveTab().window.close());
		

	});



