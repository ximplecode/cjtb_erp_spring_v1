(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD604F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(456,432);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_DATA", this);
            obj._setContents("<ColumnInfo><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","1","290","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("업무추진 예산 확인");
            obj.set_color("#7fb39d");
            obj.set_font("bold 30px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","375","7","70","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","52","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("년도");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_background("#7fb39d");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Spin("sp_yy","100","52","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","9","92","439","334",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("DS_DATA");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"월\"/><Cell col=\"2\" text=\"예산\"/><Cell col=\"3\" text=\"사용금액\"/><Cell col=\"4\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MM\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BUDGET_AMOUNT\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:USE_AMOUNT\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:TOTAL_AMOUNT\" cssclass=\"expr:nexacro.toNumber(TOTAL_AMOUNT) &lt; &quot;0&quot;?&quot;pdFontColorChange&quot;:&quot;&quot;\" displaytype=\"number\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" cssclass=\"expr:nexacro.toNumber(TOTAL_AMOUNT) - nexacro.toNumber(TOTAL_AMOUNT) &lt; &quot;0&quot;?&quot;pdFontColorChange&quot;:&quot;&quot;\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT)&quot;)\"/><Cell col=\"3\" displaytype=\"number\" cssclass=\"expr:nexacro.toNumber(TOTAL_AMOUNT) - nexacro.toNumber(TOTAL_AMOUNT) &lt; &quot;0&quot;?&quot;pdFontColorChange&quot;:&quot;&quot;\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT)&quot;)\"/><Cell col=\"4\" displaytype=\"number\" cssclass=\"expr:nexacro.toNumber(TOTAL_AMOUNT) - nexacro.toNumber(TOTAL_AMOUNT) &lt; &quot;0&quot;?&quot;pdFontColorChange&quot;:&quot;&quot;\" expr=\"dataset.getSum(&quot;nexacro.toNumber(TOTAL_AMOUNT)&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",456,432,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD604F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD604F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("PD604F.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("PD604F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var yy;
        var nDate = new Date();
        var today = Eco.date.getMaskFormatString(nDate, "yyyyMMdd");
        this.parentForm = this.opener;

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.PD604F_OnLoad = function(obj,e)
        {
           var yy = this.parent.yy;

           if (yy == "")
           {
        		yy = substr(today,0,4);
           }

        	this.sp_yy.set_value(yy);

        	this.getdata_budget();
        };

        this.getdata_budget = function()
        {
           var str_url, str_arg;
           var sabun = this.parent.sabun;

           str_url = "JSP/pd/PD604_select.jsp";
           str_arg = "yy="+nexacro.wrapQuote(this.sp_yy.value) +
                     " sabun="+nexacro.wrapQuote(sabun);

           this.gfn_TransactionP("select", str_url, "DS_DATA=DS_DATA", "DS_DATA=DS_DATA", str_arg, "Callback_select", false, "P", false, this);
        }

        this.Callback_select = function(Trid, ErrorCode, ErrorMsg)
        {
            if (ErrorCode != 0)
            {
               alert(ErrorMsg);
               return false;
            }
        }


        this.sy_yy_onspin = function(obj,e)
        {
        	var nPostval = e.postvalue

            this.sp_yy.set_value(nPostval);
        	this.getdata_budget();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD604F_OnLoad,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.sp_yy.addEventHandler("onchanged",this.sp_yy_OnChanged,this);
            this.sp_yy.addEventHandler("onspin",this.sy_yy_onspin,this);
        };
        this.loadIncludeScript("PD604F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
