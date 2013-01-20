var ModalPicker=require("ModalPicker");

var win= Ti.UI.createWindow({backgroundColor:'black',layout:'vertical'});



var visualPrefs={top:20,backgroundColor:'white',width:200,height:40,borderRadius:5};

var data=[{title:" Bananas ",id:1},{title:" Apples ",id:2},{title:" Oranges ",id:3}];

var mPicker = new ModalPicker(visualPrefs,data);

win.add(mPicker);


var checkButton=Ti.UI.createButton({top:20,title:"check value"});

checkButton.addEventListener('click',function(){
	
	alert("selected: "+mPicker.text+" (id: "+mPicker.id+")");
	
});



win.add(checkButton);




win.open();
	
