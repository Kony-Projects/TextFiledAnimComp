function initializeUserWidgets() {
    kony.mvc.registry.add("com.txtfieldANI.TextFieldVal", "TextFieldVal", "TextFieldValController");
    kony.application.registerMaster({
        "namespace": "com.txtfieldANI",
        "classname": "TextFieldVal",
        "name": "com.txtfieldANI.TextFieldVal"
    });
}