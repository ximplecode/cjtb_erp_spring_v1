(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR202P_02");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1246,543);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","0","0","33%","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("학력별 인원현황");
            obj.set_background("#9ee0de");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_021","0","sta00:0","33%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_021");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"인원\"/><Cell col=\"2\" text=\"비율(%)\"/></Band><Band id=\"body\"><Cell text=\"expr:comp.parent.fn_setText021(currow)\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CNT\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PER\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","sta00:4","0","33%","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("연령별 인원현황");
            obj.set_background("#9ee0de");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_022","grd_021:4","sta00_00:0","33%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_022");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"인원\"/><Cell col=\"2\" text=\"비율(%)\"/></Band><Band id=\"body\"><Cell text=\"expr:comp.parent.fn_setText022(currow)\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:AGECNT\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:AGEPER\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","sta00_00:4","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("연차별 인원현황");
            obj.set_background("#9ee0de");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_022_00","grd_022:4","sta00_00_00:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_023");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"인원\"/><Cell col=\"2\" text=\"비율(%)\"/></Band><Band id=\"body\"><Cell text=\"expr:comp.parent.fn_setText023(currow)\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:YEARCNT\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:YEARPER\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1246,543,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HR202P_02.xfdl", function() {

        this.fn_setText021 = function(nRow)
        {
        	var rt;
        	if (this.parent.parent.ds_021.getRowLevel(nRow) != 0 )
        	{
        		rt = "합  계";
        	}
        	else
        	{
        		rt = this.parent.parent.ds_021.getColumn(nRow,"SCH");
        	}

        	return rt;
        }

        this.fn_setText022 = function(nRow)
        {
        	var rt;
        	if (this.parent.parent.ds_022.getRowLevel(nRow) != 0 )
        	{
        		rt = "합  계";
        	}
        	else
        	{
        		rt = this.parent.parent.ds_022.getColumn(nRow,"AGE");
        	}

        	return rt;
        }

        this.fn_setText023 = function(nRow)
        {
        	var rt;
        	if (this.parent.parent.ds_023.getRowLevel(nRow) != 0 )
        	{
        		rt = "합  계";
        	}
        	else
        	{
        		rt = this.parent.parent.ds_023.getColumn(nRow,"YEARGB");
        	}

        	return rt;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("HR202P_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
