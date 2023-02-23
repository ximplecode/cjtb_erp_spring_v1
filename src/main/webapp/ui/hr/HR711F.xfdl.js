(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR711F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(928,744);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_close",null,"10","120","22","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_30","16","40","144","192",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'Img::flower30.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("30^해피트리");
            this.addChild(obj.name, obj);

            obj = new Static("sta_30","16","img_30:0","144","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("해피트리");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("30^해피트리");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_31","img_30:5","40","144","192",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'Img::flower31.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("31^금전수");
            this.addChild(obj.name, obj);

            obj = new Static("sta_31","sta_30:5","img_31:0","144","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("금전수");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_32","img_31:5","40","144","192",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_image("url(\'Img::flower32.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("32^뱅갈고무");
            this.addChild(obj.name, obj);

            obj = new Static("sta_32","sta_31:5",null,"144","28",null,"484",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("뱅갈고무");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_33","img_32:5","40","144","192",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_image("url(\'Img::flower33.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("33^스투키");
            this.addChild(obj.name, obj);

            obj = new Static("sta_33","sta_32:5",null,"144","28",null,"484",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("스투키");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("33^스투키");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_34","img_33:5","40","144","192",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_image("url(\'Img::flower34.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("34^크로톤");
            this.addChild(obj.name, obj);

            obj = new Static("sta_34","sta_33:5",null,"144","28",null,"484",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("크로톤");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("34^크로톤");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_35","img_34:5","40","144","192",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_image("url(\'Img::flower35.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("35^행운목");
            this.addChild(obj.name, obj);

            obj = new Static("sta_35","sta_34:5",null,"144","28",null,"484",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("행운목");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("35^행운목");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_42","16","270","144","192",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_image("url(\'Img::flower42.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("42^고무나무");
            this.addChild(obj.name, obj);

            obj = new Static("sta_42","16","462","144","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("고무나무");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("42^고무나무");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_43","165","270","144","192",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_image("url(\'Img::flower43.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("43^쿠르시아");
            this.addChild(obj.name, obj);

            obj = new Static("sta_43","165","462","144","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("쿠르시아");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("43^쿠르시아");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_44","314","270","144","192",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_image("url(\'Img::flower44.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("44^안시리움");
            this.addChild(obj.name, obj);

            obj = new Static("sta_44","314",null,"144","28",null,"254",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("안시리움");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("44^안시리움");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_38","463","270","144","192",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_image("url(\'Img::flower38.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("38^동양란");
            this.addChild(obj.name, obj);

            obj = new Static("sta_38","463",null,"144","28",null,"254",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("동양란");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("38^동양란");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_13","612","270","144","192",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_image("url(\'Img::flower13.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("13^축하3단");
            this.addChild(obj.name, obj);

            obj = new Static("sta_13","612",null,"144","28",null,"254",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("축하3단");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("13^축하3단");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_14","761","270","144","192",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_image("url(\'Img::flower14.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("14^근조3단");
            this.addChild(obj.name, obj);

            obj = new Static("sta_14","761",null,"144","28",null,"254",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("근조3단");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("14^근조3단");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_36","16","511","144","139",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_image("url(\'Img::flower36.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("36^꽃바구니5");
            this.addChild(obj.name, obj);

            obj = new Static("sta_36","16","img_36:0","144","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("꽃바구니5");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("36^꽃바구니5");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_37","img_36:5","511","144","139",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_image("url(\'Img::flower37.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("37^꽃바구니8");
            this.addChild(obj.name, obj);

            obj = new Static("sta_37","sta_36:5","img_37:0","144","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("꽃바구니8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("37^꽃바구니8");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_40","img_37:5","511","144","139",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_image("url(\'Img::flower40.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("40^서양난1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_40","sta_37:5","img_40:0","144","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("서양난1");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("40^서양난1");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_41","img_40:5","511","144","139",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_image("url(\'Img::flower41.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("41^서양난2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_41","sta_40:5","img_41:0","144","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("서양난2");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("41^서양난2");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_16","img_41:5","511","144","139",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_image("url(\'Img::flower16.bmp\')");
            obj.set_stretch("fit");
            obj.getSetter("userData").set("16^산모미역");
            this.addChild(obj.name, obj);

            obj = new Static("sta_16","sta_41:5","img_16:0","144","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("산모미역");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_none","img_16:5","510","144","139",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("해피트리");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.getSetter("userData").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","16","695","889","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("배송지에 따라 제품의 이미지가 다를 수 있음을 양해 바랍니다.");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_borderRadius("5px 5px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",928,744,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HR711F.xfdl", function() {

        this.img_30_onclick = function(obj,e)
        {
        	this.close(obj.userData);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.img_30.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_30.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_31.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_31.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_32.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_32.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_33.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_33.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_34.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_34.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_35.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_35.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_42.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_42.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_43.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_43.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_44.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_44.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_38.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_38.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_13.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_13.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_14.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_14.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_36.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_36.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_37.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_37.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_40.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_40.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_41.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_41.addEventHandler("onclick",this.img_30_onclick,this);
            this.img_16.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_16.addEventHandler("onclick",this.img_30_onclick,this);
            this.sta_none.addEventHandler("onclick",this.img_30_onclick,this);
        };
        this.loadIncludeScript("HR711F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
