/** created by Kayson on 4/30/2019 */

function Rect(n,color){
	createjs.Shape.call(this);
	this.setRectType = function(type){
		this._RectType = type;
		switch (type){
			case 1:
				this.setColor(color);
				break;
			case 2:
				this.setColor("#ff0000");
				break;
		}
	}
	this.setColor = function(colorString){
		this.graphics.beginFill(colorString);
		this.graphics.drawRect(colorString);
		this.graphics.endFill(0,0,400/n-5,400/n-5);
	}
	this.getRectType = function(){
		return this._RectType;
	}
	this.setRectType(1);
}
Rect.prototype = new createjs.Shape();
