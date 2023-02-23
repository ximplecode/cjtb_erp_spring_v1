(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR101F_SUB04");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,242);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_career","2","2",null,null,"100","2",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_career");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"96\"/><Column size=\"66\"/><Column size=\"68\"/><Column size=\"72\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"96\"/><Column size=\"71\"/><Column size=\"139\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"근무기간\"/><Cell col=\"2\" text=\"직장명\"/><Cell col=\"3\" text=\"직위\"/><Cell col=\"4\" text=\"근무연수\"/><Cell col=\"5\" text=\"정산률(%)\"/><Cell col=\"6\" text=\"대상일수\"/><Cell col=\"7\" text=\"정산연수\"/><Cell col=\"8\" text=\"담당업무\"/><Cell col=\"9\" text=\"연봉\"/><Cell col=\"10\" text=\"퇴사사유\"/></Band><Band id=\"body\"><Cell text=\"bind:YMD1\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:YMD2\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:JIKJANG\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:JIKWI\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:YEAR\" textAlign=\"right\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:DEST_PER\" textAlign=\"right\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:WORK_DAY\" textAlign=\"right\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:WORK_YEAR\" textAlign=\"right\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:UPMU\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:YPAY\" textAlign=\"right\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:TSAYOO\" displaytype=\"normal\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"8","90","22","4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"38","90","22","4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,242,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR101F_SUB04.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR101F_SUB04.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.btn_add_onclick = function(obj,e)
        {
        	this.parent.parent.ds_career.addRow();
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var nRow = this.parent.parent.ds_career.rowposition;
        	if (this.confirm("선택한 정보를 삭제하시겠습니까?","경력사항 삭제","warning") )
        	{
        		this.parent.parent.ds_career.deleteRow(nRow);
        	}
        };

        this.grd_career_onenterdown = function(obj,e)
        {
        	if (e.col == this.grd_career.getCellCount("body") - 1)
        	{
        		if (e.row == this.grd_career.rowcount - 1 )
        		{
        			this.btn_add_onclick(null, null);
        		}
        		this.grd_career.moveToNextCell();
        		this.grd_career.setCellPos(0);
        	}
        	else
        	{
        		this.grd_career.moveToNextCell();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_career.addEventHandler("onenterdown",this.grd_career_onenterdown,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
        };
        this.loadIncludeScript("HR101F_SUB04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
