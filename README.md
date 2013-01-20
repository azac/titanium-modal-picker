titanium-modal-picker
=====================

Quick and simple modal picker for iOS Titanium.

(https://raw.github.com/azac/titanium-modal-picker/master/modalpicker.png)

```JavaScript

ModalPicker.text // visible content of the selected row
ModalPicker.id   // invisible id of the selected row 

```


Usage:
------------


```JavaScript

var ModalPicker=require("ModalPicker");

var data=[{title:" Bananas ",id:1},{title:" Apples ",id:2},{title:" Oranges ",id:3}];

var myPicker = new ModalPicker({backgroundColor:white},data);

win.add(myPicker);

```


See basic example in _app.js_.