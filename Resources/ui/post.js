var createBlogDetail = function(blog_post) {
    var l_post_source = L('post_source');

	var tb_height;

    //tb_height = Titanium.Platform.displayCaps.platformHeight-110-config.ADMOB_IPHONE_HEIGHT;
    tb_height = Titanium.Platform.displayCaps.platformHeight-config.ADMOB_IPHONE_HEIGHT;

    if (Titanium.Platform.displayCaps.platformHeight==xscreen.ipadh) {
      tb_height = Titanium.Platform.displayCaps.platformHeight-config.ADMOB_IPAD_HEIGHT;
    }

    // prepare style, make it pretty
   	//style = '<link rel="stylesheet" href="http://twitter.github.com/bootstrap/1.4.0/bootstrap.min.css">';
    var style;
    style = "<style>body {margin:10px;font-family:'Helvetica Neue';font-size:14px;color:#333} h1 {margin-bottom:0;font-family:'Helvetica Neue';font-weight:200;color:#222} h5 { margin-bottom:10px;color: #333;font-weight:200 } a{text-decoration:none;color:#222222;}</style>";
	
	

	
	
    if (config.FIX_IMG_POST == '1') {
        style = style + "<style>img { display:block; margin: 10px 0; max-width: 300px; height:auto;}</style>";
    }

    // prepare header
    header = "<h1>" + blog_post.title + "</h1>";
    header = header + "<h5>" + date("F j, Y", strtotime(blog_post.date)) + ' | ' + blog_post.author.nickname + "</h5>";

    post_content = style + header + blog_post.content;

    
    var Window = Ti.UI.createWindow({
            title: blog_post.title_plain,
            navBarHidden: false,
            barColor: skin.POST_BAR_COLOR,
            barImage: skin.POST_BAR_IMAGE,
            layout: "vertical"
           
        }),
        webPost = Ti.UI.createWebView({
            visible: false,
            height: tb_height - 64,
            width: Titanium.Platform.displayCaps.platformWidth,
            html: post_content,
            willHandleTouches:false
	});
	

   Window.add(webPost);
   
    webPost.show();
   
	
	
    var url = blog_post.url;
    var email_subject = blog_post.title_plain;
    //var email_body = '<p>' + l_post_source + ': <a href="' + url + '">' + url + "</a></p>\n\n" + post_content;
    var email_body =  post_content;

    create_share_button(Window, url, email_subject, email_body);
	
	Window.addEventListener('swipe',function(e){
		if(e.direction == "right"){
			
			//Ti.API.info(Window.children);
			//Ti.API.info(WpApp.getActiveTab().window.getFocusable);
			Window.close({animated:true});
			
			
		}
	});
	
    return Window;
};