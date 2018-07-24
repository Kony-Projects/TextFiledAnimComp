define(function() {
    return function(controller) {
        var TextFieldVal = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "TextFieldVal",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        TextFieldVal.setDefaultUnit(kony.flex.DP);
        var flxContainerName = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxContainerName",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox",
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, {}, {});
        flxContainerName.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label({
            "id": "lblName",
            "isVisible": true,
            "left": 0,
            "skin": "sknLblPlaceHolderGrey",
            "text": "Name",
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 2, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var txtFiledName = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_WORDS,
            "focusSkin": "sknTxtFieldGrey120OpenSans",
            "height": "40dp",
            "id": "txtFiledName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "onDone": controller.Action15324142243717549,
            "onTextChange": controller.AS_TextField_ab988cb74f42424a91f8586778713e8b,
            "placeholder": "Name",
            "secureTextEntry": false,
            "skin": "sknTxtFieldGrey120OpenSans",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "onEndEditing": controller.Action15324142243713680,
            "placeholderSkin": "sknTextFieldPlaceHolderGrey120OpenSanse",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        var lblLine1 = new kony.ui.Label({
            "height": "1dp",
            "id": "lblLine1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlblPlaceHolderGreyLine",
            "top": "56dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblFullNameErr = new kony.ui.Label({
            "id": "lblFullNameErr",
            "isVisible": true,
            "left": "3dp",
            "skin": "sknlblErrRed",
            "text": "Please Enter full name",
            "top": "56dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 2, 2],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxContainerName.add(lblName, txtFiledName, lblLine1, lblFullNameErr);
        TextFieldVal.add(flxContainerName);
        return TextFieldVal;
    }
})