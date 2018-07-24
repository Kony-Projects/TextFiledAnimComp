define(function() {
    var controller = require("com/txtfieldANI/TextFieldVal/userTextFieldValController");
    var actions = require("com/txtfieldANI/TextFieldVal/TextFieldValControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "visiblelblName", function(val) {
            this.view.lblName.isVisible = val;
        });
        defineGetter(this, "visiblelblName", function() {
            return this.view.lblName.isVisible;
        });
        defineSetter(this, "text", function(val) {
            this.view.txtFiledName.text = val;
        });
        defineGetter(this, "text", function() {
            return this.view.txtFiledName.text;
        });
        defineSetter(this, "maxTextLength", function(val) {
            this.view.txtFiledName.maxTextLength = val;
        });
        defineGetter(this, "maxTextLength", function() {
            return this.view.txtFiledName.maxTextLength;
        });
        defineSetter(this, "visiblelblNameErr", function(val) {
            this.view.lblFullNameErr.isVisible = val;
        });
        defineGetter(this, "visiblelblNameErr", function() {
            return this.view.lblFullNameErr.isVisible;
        });
        defineSetter(this, "textErr", function(val) {
            this.view.lblFullNameErr.text = val;
        });
        defineGetter(this, "textErr", function() {
            return this.view.lblFullNameErr.text;
        });
        defineSetter(this, "placeholder", function(val) {
            this.view.txtFiledName.placeholder = val;
        });
        defineGetter(this, "placeholder", function() {
            return this.view.txtFiledName.placeholder;
        });
        defineSetter(this, "textlblName", function(val) {
            this.view.lblName.text = val;
        });
        defineGetter(this, "textlblName", function() {
            return this.view.lblName.text;
        });
        defineSetter(this, "textInputMode", function(val) {
            this.view.txtFiledName.textInputMode = val;
        });
        defineGetter(this, "textInputMode", function() {
            return this.view.txtFiledName.textInputMode;
        });
        defineSetter(this, "keyBoardStyle", function(val) {
            this.view.txtFiledName.keyBoardStyle = val;
        });
        defineGetter(this, "keyBoardStyle", function() {
            return this.view.txtFiledName.keyBoardStyle;
        });
        defineSetter(this, "contentAlignmentLbl", function(val) {
            this.view.lblName.contentAlignment = val;
        });
        defineGetter(this, "contentAlignmentLbl", function() {
            return this.view.lblName.contentAlignment;
        });
        defineSetter(this, "contentAlignment1Txt", function(val) {
            this.view.txtFiledName.contentAlignment = val;
        });
        defineGetter(this, "contentAlignment1Txt", function() {
            return this.view.txtFiledName.contentAlignment;
        });
        defineSetter(this, "contentAlignment2Err", function(val) {
            this.view.lblFullNameErr.contentAlignment = val;
        });
        defineGetter(this, "contentAlignment2Err", function() {
            return this.view.lblFullNameErr.contentAlignment;
        });
        defineSetter(this, "keyboardActionLabel", function(val) {
            this.view.txtFiledName.keyboardActionLabel = val;
        });
        defineGetter(this, "keyboardActionLabel", function() {
            return this.view.txtFiledName.keyboardActionLabel;
        });
        defineSetter(this, "visibleofTxtFiled", function(val) {
            this.view.txtFiledName.isVisible = val;
        });
        defineGetter(this, "visibleofTxtFiled", function() {
            return this.view.txtFiledName.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.Action15324142243717549 = function() {
        if (this.onDone) {
            this.onDone.apply(this, arguments);
        }
    }
    controller.Action15324142243713680 = function() {
        if (this.onEndEditing) {
            this.onEndEditing.apply(this, arguments);
        }
    }
    return controller;
});