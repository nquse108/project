const Koa = require('koa')
const app = module.exports = new Koa()

app.use(async function (ctx) {

})
if (!module.parent) {
	app.listen(3000)
	console.log('server run at http://localhost:3000/')
  }


function layout (path, html) {
	return `

<html>
<head>
<meta charset="UTF-8">
<title>10611113</title>
<style>
body{margin:0; border:0}
.header{
		height:100px;
		width:100%;
		margin:0;
		background-color:rgb(59,89,153)
		}
.facebook.header{
	             height:100px;
	             width:980px;
			     margin:0 auto; 
				}
.facebook.block{
	        height:100px;
			width:600px;
			float:right;
			}
.facebook.middle{
	            height:100%;
				width:100%;
				margin:0;
				background-color:#cacbd1;
			   }
.left			{
				height:300;
				width:550;
				margin:30 80;
				float:left;
				}
.right			{
				height:900;
				width:400;
				margin:0 100;
				float:right;
				}
.top            {
    			position:fixed;
    			bottom:10px;
    			right:20px;
    			padding: 3px 3px 0 3px;
    			font-size:25px
    			}				
</style>
</head>
<body>
   <a href="#top">回到頂部</a> 
   <div class="header">
	       <div class="facebook header"> 
			 <h1><font color="white"><a name="top">網路部落格</a></font></h1>
			    <div class="facebook block">
				<font color="white">電子郵件或電話:</font><input type=text name="value">
				<font color="white">密碼:</font><input type="password"name="pwd">
				<input type="submit" value="登入">
				</div>
		   </div>
	</div>
<div id="facebook middle" >
	<div class="right"><font size="6">註冊</font><br>永遠免費!<br>
	<input type="text" style="width:200px; font-size:30px; border-radius:10px;" name="lastname" placeholder="姓氏" size="15">
	<input type="text" style="width:200px; font-size:30px; border-radius:10px;" name="firstname" placeholder="名字" size="15"><br>
    <input type="text" style="width:400px; font-size:30px; border-radius:10px;" name="cellphone&email" placeholder="手機號碼或電子郵件" size="40"><br>
    <input type="text" style="width:400px; font-size:30px; border-radius:10px;" name=" setting passwd" placeholder="設定密碼" size="40"><br>
	生日<br>
	<select name="year" size="1" >	
		<option value="1999">1999
		<option value="1998">1998
		<option value="1997">1997
	</select>
	<select name="month" size="1" >	
		<option value="1月">1月
		<option value="2月">2月
		<option value="3月">3月
		<option value="4月">4月
		<option value="5月">5月
		<option value="6月">6月
	</select>
	<select name="day" size="1" >	
		<option value="17">17
		<option value="18">18
		<option value="19">19
	</select>
	<br>
	<input type="radio" name="man">男性
	<input type="radio" name="woman">女性
	<br><input type="submit" style="width:200px;height:40px;font-size:20px;background-color:#00AA00;border-radius:10px;" value="註冊">
	</div>
</div>
</body>
</html>
`
}