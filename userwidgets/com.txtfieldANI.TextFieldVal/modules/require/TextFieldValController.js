define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._mincharLen = 3;
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, "mincharLen", function() {
        return this._mincharLen;
      });


      defineSetter(this, "mincharLen", function(val) {
        this._mincharLen = val;
      });
    },
    onEditNameFieldComp2:function (){
      try{
        var txtname = this.view.txtFiledName.text.trim();
        kony.print("onEditNameField"+txtname);
        if(txtname === "" || txtname === null){
          this.view.lblName.isVisible = false;
          this.view.lblName.setVisibility = false;
         
          if(get_local == "en"){
            this.view.txtFiledName.contentAlignment = constants.CONTENT_ALIGN_MIDDLE_LEFT;
          }else{
            this.view.txtFiledName.contentAlignment = constants.CONTENT_ALIGN_MIDDLE_RIGHT;
          }   
        }else{
          if(txtname.charCodeAt(0) === 32 || txtname.charCodeAt(0) === 9){
            this.view.lblName.isVisible = false;
            this.view.txtFiledName.contentAlignment = constants.CONTENT_ALIGN_MIDDLE_RIGHT;
          }else if (txtname.charCodeAt(0) === 43 || (txtname.charCodeAt(0) >= 48 && txtname.charCodeAt(0) <= 57) || (txtname.charCodeAt(0) >= 97 && txtname.charCodeAt(0) <= 122) || (txtname.charCodeAt(0)>=65 && txtname.charCodeAt(0)<=90)){       
            this.view.lblName.isVisible = true;
            this.view.txtFiledName.contentAlignment = constants.CONTENT_ALIGN_MIDDLE_LEFT;
          } else {
            this.view.lblName.isVisible = true;
            this.view.txtFiledName.contentAlignment = constants.CONTENT_ALIGN_MIDDLE_RIGHT;
          }
        }
      }catch(err){
        kony.print("err onEditNameField"+err);
      }
    },
    onDoneEmail:function(txt){
      try{
        var txtname = this.view.txtFiledName.text;
        if(txt == "email"){
          if(kony.string.isValidEmail(txtname)){
            this.view.txtFiledName.skin = "sknTxtFieldGrey120OpenSans";
            this.view.lblLine1.skin = "sknlblPlaceHolderGreyLine";
            this.view.lblFullNameErr.isVisible = false;
          }else{
            this.view.txtFiledName.skin = "sknTxtFieldErr";
            this.view.lblLine1.skin = "sknlblPlaceHolderGreyLineErr";
            this.view.lblFullNameErr.isVisible = true;
          }
        }
      }catch(err){
        kony.print("err onDoneEmail"+err);
      }

    }

  };
});


