(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EDMstApproval_KindF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02","18","10","142","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("결재방법 선택");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_payKind","20","60","260","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_border("2px groove lightgray");
            var rd_payKind_innerdataset = new nexacro.NormalDataset("rd_payKind_innerdataset", obj);
            rd_payKind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">정기지급</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">수시지급</Col></Row></Rows>");
            obj.set_innerdataset(rd_payKind_innerdataset);
            obj.set_text("정기지급");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","34","120","240","58",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("  ■ 원칙 : 정기지급 선택\n\n  ■ 예외사항 : 수시지급 선택");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"13","65","25","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("적용");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EDMstApproval_KindF.xfdl", function() {

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(this.rd_payKind.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("EDMstApproval_KindF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
