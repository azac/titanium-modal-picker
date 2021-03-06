function ModalPicker(prefs, values) {

    var self = Ti.UI.createLabel(prefs);

    self.id = null;


    var subWin = Ti.UI.createWindow({
        backgroundColor: 'blue',
        top: Ti.Platform.displayCaps.platformHeight - 1,
        height: 256,
        width: 320,
        navBarHidden: true
    });



    var select = Ti.UI.createButton({
        title: 'Select',
        style: Ti.UI.iPhone.SystemButtonStyle.DONE
    });


    var flexSpace = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });


    var toolbar = Ti.UI.iOS.createToolbar({
        items: [flexSpace, select],
        top: 0,
        borderTop: true,
        borderBottom: false,
        barColor: '#999'
    });


    select.addEventListener('click', function () {


        self.text = picker.getSelectedRow(0).title;
        self.id = picker.getSelectedRow(0).id;
        subWin.animate({
            top: Ti.Platform.displayCaps.platformHeight
        });

    });

    subWin.add(toolbar);



    var picker = Ti.UI.createPicker({
        bottom: 0
    });

    var data = [];

    self.text = values[0].title;
    self.id = values[0].id;

    for (i in values) {

        data[i] = Ti.UI.createPickerRow(values[i]);


    }

    picker.add(data);
    picker.selectionIndicator = true;

    subWin.add(picker);



    self.addEventListener('click', function () {

        subWin.open();
        subWin.animate({
            top: Ti.Platform.displayCaps.platformHeight - 274
        });
    });



    return self;
}

module.exports = ModalPicker;