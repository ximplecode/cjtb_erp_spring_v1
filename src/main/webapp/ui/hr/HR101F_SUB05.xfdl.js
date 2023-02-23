(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR101F_SUB05");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,242);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_insaBalGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">임용</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">승진</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">보임</Col></Row><Row><Col id=\"CODE\">25</Col><Col id=\"NAME\">호칭변경</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">전보</Col></Row><Row><Col id=\"CODE\">40</Col><Col id=\"NAME\">파견</Col></Row><Row><Col id=\"CODE\">50</Col><Col id=\"NAME\">퇴직</Col></Row><Row><Col id=\"CODE\">60</Col><Col id=\"NAME\">전입</Col></Row><Row><Col id=\"CODE\">70</Col><Col id=\"NAME\">전출</Col></Row><Row><Col id=\"CODE\">99</Col><Col id=\"NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_insaBal","2","2",null,null,"100","2",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_insaBal");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"114\"/><Column size=\"80\"/><Column size=\"83\"/><Column size=\"95\"/><Column size=\"137\"/><Column size=\"80\"/><Column size=\"171\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"발령일자\"/><Cell col=\"1\" text=\"부서코드\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"직위코드\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"업무\"/><Cell col=\"6\" text=\"비고\"/><Cell col=\"7\" text=\"구분\"/><Cell col=\"8\" text=\"발령구분\"/></Band><Band id=\"body\"><Cell text=\"bind:YMD\" edittype=\"date\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BUSE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BUSE\" combodataset=\"ds_buse\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\" edittype=\"combo\" combotype=\"filterlike\"/><Cell col=\"3\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:JIKWI\" combodataset=\"ds_jikwi\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\" edittype=\"combo\" combotype=\"filterlike\"/><Cell col=\"5\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:GITA\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:BAL_GB\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:BAL_GB\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_insaBalGB\" combodatacol=\"NAME\" combocodecol=\"CODE\"/></Band></Format></Formats>");
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
        this.addIncludeScript("HR101F_SUB05.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR101F_SUB05.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.HR101F_SUB05_onload = function(obj,e)
        {

        };

        this.Callback_select_none = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        }

        this.btn_add_onclick = function(obj,e)
        {
        	this.parent.parent.ds_insaBal.addRow();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR101F_SUB05_onload,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
        };
        this.loadIncludeScript("HR101F_SUB05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
