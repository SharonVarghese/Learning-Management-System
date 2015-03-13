
/* JavaScript content from js/main.js in folder common */
var p7="";
var p8="";
function f()
{
  alert("Please sign up to view ");
  window.location.href="register.html";
}
function procedure1(){
	
	var param1 = $("#fname").val();
	var param2 = $("#lname").val();
	var param3 = $("#email").val();
	var param4 = $("#phone").val();
	var param5 = $("#acctype").val();
	var param6 = $("#pwd").val();
	alert(param1+param2+param3+param4+param5+param6);
	if(param1.length==0 && param2.length==0  && param3.length==0  && param4.length==0  && param6.length==0 )
		alert("Enter your details, Text boxes can't be empty");
	/*if(param4.length10)
		alert("phone no accepted");
	else
		alert("invalid no");*/
	/*if(param6.length==8)
		alert("pwd accepted");
	else
		alert("invalid pwd");*/
		
		
	var idata = {
		adapter: 'elearn',
		procedure: 'procedure1',
		parameters: [param1,param2,param3,param4,param5,param6]
	};
	//alert(param);*/
	alert('procudere called');
	var options = {
			onSuccess:success,
			onFailure: myfailure,
			invocationContext: {}
	};
	
	WL.Client.invokeProcedure(idata,options);
}
function success(result){
	alert("success");
	window.location.href="login.html";
}
function myfailure(result){
	alert("failed");
}
/*function procedure2()
{
	 p7 =$("#id").val(); 
	 p8 = $("#password").val();
	alert(p7+p8);
	
	var idata1 = {
			adapter: 'elearn',
			procedure: 'procedure2',
			parameters: [p7,p8]
		};
		//alert(param);
		alert('procudere called');
		var options1 = {
				onSuccess: mysuccess,
				onFailure: failure,
				invocationContext: {}
		};
		
		WL.Client.invokeProcedure(idata1,options1);
		/*alert(p7+p8);
		alert(result.invocationResult.resultSet[0].email);
		if((result.invocationResult.resultSet[0].email==p7) && (result.invocationResult.resultSet[0].pwd==p8))
		{
		alert("succcess");
	    window.location.href="all.html";
		}
		else
		{
		alert("invalid user");
		}
	  
		
}
	function mysuccess(result){
		//alert("in success");
		alert(result.invocationResult.resultSet[0].email);
		alert("p7"+p7);
		alert("result1"+result.invocationResult.resultSet[0].email);
		alert("p8"+p8);
		alert("result2"+result.invocationResult.resultSet[0].pwd);
		
		
		if((result.invocationResult.resultSet[0].email==p7) && (result.invocationResult.resultSet[0].pwd==p8))
			{
			alert("succcess");
		    window.location.href="all.html";
			}
		else if((result.invocationResult.resultSet[0].email==0) && (result.invocationResult.resultSet[0].pwd==0))
			{
			window.location.href="register.html";
			}
		else
			{
			alert("invalid user");
			}
		  
	}
	function failure(result){
		alert("failed");
	}*/
function procedure2() {
	
	p7=$("#id").val();
	p8=$("#password").val();
	
	if(p7.length==0 && p8.length==0)
		alert("username and password cannot be empty");
	var idata = {
			adapter: 'elearn',
			procedure: 'procedure2',
			parameters: [p7,p8]
		};
		
		var options = {
				onSuccess: mysuccess6,
				onFailure: myfailure6,
				invocationContext: {}
		};
		
		WL.Client.invokeProcedure(idata,options);
		mysuccess6(result);
}


function mysuccess6(result)
{
	var x=0;
	if(p7=="null" && p8=="null")
		alert("Enter email and password");
	for(var i=0;i<result.invocationResult.resultSet.length;i++)
		{
	if(p7==result.invocationResult.resultSet[i].email && p8==result.invocationResult.resultSet[i].pwd)
		{
		x=1;
		alert("logged in");
		window.location.href = "all.html";
		}
	else
		x=0;
	    }
	if(x==0)
		{
		alert("please sign up");
		window.location.href="register.html";
		}
	WL.Logger.debug("insertion success");
	
	
}

function myfailure6(result){
	alert("failure");
}












/*function check()
{
	var log1=$("#id").val();
	var log2=$("#password").val();
	var idata = {
			adapter: 'login',
			procedure: 'check',
			parameters: [log1,log2]
		};
	var options = {
			onSuccess: mysuccess,
			onFailure: myfailure,
			invocationContext: {}
	};
	
	WL.Client.invokeProcedure(idata,options);
	function mysuccess(result){
		alert("success");
        // window.open("courses.html");
	}
	function myfailure(result){
		alert("invalid");
		//window.open("register.html");
	}
	
}
function log()
{
	
}*/

/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}