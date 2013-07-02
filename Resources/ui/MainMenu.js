function MainMenu() {
	
	
	// -------------------------------------------------------------
	//--- Create Menu Window ----------------------------------------
	var menuWindow = Ti.UI.createView({
		title:'Yo',
		barColor:'#5d5d5d',
		top:0,
		left:0,
		width:Ti.UI.FILL,
		tabBarHidden:false,
		layout:'vertical',
		zIndex:-1
		
	});
	
	
	//---Menu Table
	var headerView = Ti.UI.createView({
		top:0,
		left:0,
		width:Ti.UI.FILL,
		height:44,
		backgroundColor:'#222222'
	});
	var headerLabel = Ti.UI.createLabel({
		text:'Menu',
		color:'#ffffff',
		font:{fontSize:20},
		left:10
	});
	headerView.add(headerLabel);
	menuWindow.add(headerView);
	// Menu Titles
	
	var categ = '';//categ_list.categs;//get list from categ_list.js file
    var tableData = [];//array
	//create loop to store into data array
    for (var i = 0; i < categ.length; i++) {
        var row = Ti.UI.createTableViewRow({
    		className:'forumEvent', // used to improve table performance
    		selectedBackgroundColor:'white',
   			 rowIndex:i, // custom property, useful for determining the row during events
   			 height:42
  		});
  
  
  
  
  
        
        var item = {
           
            title: categ[i].label,
            slug: categ[i].slug,
            json_url: config.BLOG_URL + "?json=get_category_posts&count=" + config.JSON_POST_COUNT + "&apikey=" + config.JSON_API_KEY + "&slug=" + categ[i].slug
        };

		var labelUserName = Ti.UI.createLabel({
    color:'#222222',
    font:{fontFamily:'Helvetica Neue',  fontWeight:'normal',fontSize:16},
    text:categ[i].label,
    left:10, top: 6,
    width:200, height: 30,
    title: categ[i].label,
            slug: categ[i].slug,
            json_url: config.BLOG_URL + "?json=get_category_posts&count=" + config.JSON_POST_COUNT + "&apikey=" + config.JSON_API_KEY + "&slug=" + categ[i].slug
  });

		row.add(labelUserName);
        tableData.push(row);
    }

		// Tableview
		var tableView = Ti.UI.createTableView({
    		data:tableData,//data array
    		backgroundColor:'#eaeaea',
    		scrollsToTop:false
    		
    		

		});
		
		
		
		// --- Fire Event on row click/touch
		tableView.addEventListener('click',function(e){
			//alert(e.index); //returns index of clicked row
			//trigger menu button to close menu
			//WpApp.fireEvent('app:displayMenu');
			var tol = setTimeout(function(){
				clearTimeout(tol);
				WpApp.fireEvent('app:displayMenu');
			},350);
			//tol();
			//WpApp.setActiveTab(Categ);
			//alert(e.source.slug);
			//winCategBlogList = createBlogPostList(e.source.json_url, e.title, e.source.slug);
			//Categ.setActiveTab(0);
			//Recent.open(winCategBlogList, { animated: true });
			
			
		});
		
		menuWindow.add(tableView);
	
	// --- End Menu Window ------------------------
	
	
	
	
	
	// -------------------------------------------------------------
	return menuWindow;
}
// -----------------------------------------------------------------
module.exports = MainMenu;
