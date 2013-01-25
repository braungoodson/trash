var com = com || {};
com.angryOutlets = com.angryOutlets || {};
com.angryOutlets.Button = function (id,target,action,method,clickHandler,container,height,width,marginTop,marginLeft) {
	this.div = null;
	this.form = null;
	this.id = "button"+id;
	this.target = target;
	this.action = action;
	this.method = method;
	this.clickHandler = clickHandler;
	this.container = container;
	this.height = height;
	this.width = width;
	this.marginTop = marginTop;
	this.marginLeft = marginLeft;
}
com.angryOutlets.Button.prototype.setForm = function (form) {
	this.form = eval(form);
}
com.angryOutlets.Button.prototype.construct = function () {
	this.div = document.createElement("div");
	this.div.setAttribute("id",this.id);
	this.div.onClick = this.clickHandler;
	this.div.setAttribute("class","debug button");

	this.form = document.createElement("form");
	this.form.setAttribute("id",this.id+"Form");
	this.form.setAttribute("class","debug buttonForm");
	this.form.setAttribute("target",this.target);
	this.form.setAttribute("action",this.action);
	this.form.setAttribute("method",this.method);
}
com.angryOutlets.Button.prototype.press = function () {
	this.form.submit();
}
com.angryOutlets.PayPalButton = function (id,target,action,method,clickHandler,container,height,width,marginTop,marginLeft,cypher) {
	this.button = new com.angryOutlets.Button(id,target,action,method,clickHandler,container,height,width,marginTop,marginLeft);
	this.button.construct();
	var input1 = document.createElement("input");
	input1.setAttribute("type","hidden");
	input1.setAttribute("name","cmd");
	input1.setAttribute("value","_s-xclick");
	var input2 = document.createElement("input");
	input2.setAttribute("type","hidden");
	input2.setAttribute("name","encrypted");
	input2.setAttribute("value",cypher)
}
com.angryOutlets.PayPalButton.prototype.press = function () {
	this.button.press();
}