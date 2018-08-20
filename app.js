var url = require('url');//to include url module
var fs = require('fs');//to include fs module

//we use this function in handlerequest function
function renderHTML(path,response){
	 fs.readFile(path,null,function(err,data){
		 if(err)
		 {
			 response.writeHead(404);
			 response.write('file not found'); 
		 }
		 else
		 {	 
			 response.write(data);	 
		 }
		 response.end();
		 
	 });
}
//here we export this function to the server.js page
	module.exports = {
		handleRequest : function(req,res){
			
			res.writeHead(200,{'content-type':'text/html'});
			var path = url.parse(req.url).pathname;
			switch(path)
			{
				
				case '/':
				         renderHTML('./index2.html',res);
				        break;
			   case '/login':
				         renderHTML('login.html',res);
				        break;
				default:
				       res.writeHead(404);
					   res.write('route not defined');
					   res.end();	
			}	
			
		}
		
		
	};
	
	
	
	
	
	
