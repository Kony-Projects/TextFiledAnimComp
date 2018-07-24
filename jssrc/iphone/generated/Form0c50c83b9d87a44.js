function addWidgetsForm0c50c83b9d87a44() {
    Form0c50c83b9d87a44.setDefaultUnit(kony.flex.DP);
    var TextFieldVal = new com.txtfieldANI.TextFieldVal({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "TextFieldVal",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "CopyslFbox",
        "top": "99dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    TextFieldVal.visiblelblName = false;
    TextFieldVal.visiblelblNameErr = false;
    TextFieldVal.minCharLen = "3";
    Form0c50c83b9d87a44.add(TextFieldVal);
};

function Form0c50c83b9d87a44Globals() {
    Form0c50c83b9d87a44 = new kony.ui.Form2({
        "addWidgets": addWidgetsForm0c50c83b9d87a44,
        "enabledForIdleTimeout": false,
        "id": "Form0c50c83b9d87a44",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0idb6df70b3ac4f"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};