(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Expr_Case2");
            this.set_titletext("Expr Case2");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">yellow Color</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">red Color</Col><Col id=\"Column2\">E</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">pink Color</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">blue Color</Col><Col id=\"Column2\">G</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","17","17","327","18",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Depending on the background condition setting expr");
            obj.set_cssclass("sta_WF_subtitP");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","17","49","733","381",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("Dataset00");
            obj.set_useselcolor("false");
            obj.set_tooltiptext("ddddd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"133\"/><Column size=\"143\"/><Column size=\"172\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" border=\"3px solid #c6c6c6\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"expr:Column0==&apos;1&apos;?&apos;Expr_Case2_red&apos;:Column0==&apos;2&apos;?&apos;Expr_Case2_pink&apos;:Column0==&apos;3&apos;?&apos;Expr_Case2_blue&apos;:Column0==&apos;4&apos;?&apos;Expr_Case2_yellow&apos;:&apos;&apos;\" edittype=\"textarea\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"expr:Column0==&apos;1&apos;?&apos;Expr_Case2_red&apos;:Column0==&apos;2&apos;?&apos;Expr_Case2_pink&apos;:Column0==&apos;3&apos;?&apos;Expr_Case2_blue&apos;:Column0==&apos;4&apos;?&apos;Expr_Case2_yellow&apos;:&apos;&apos;\" edittype=\"textarea\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"expr:comp.parent.fn_background(rowidx)\" expr=\"comp.parent.fn_background(rowidx)\" edittype=\"textarea\"/><Cell col=\"3\" expr=\"Column0==&apos;1&apos;?&apos;Expr_Case2_red&apos;:Column0==&apos;2&apos;?&apos;Expr_Case2_pink&apos;:Column0==&apos;3&apos;?&apos;Expr_Case2_blue&apos;:Column0==&apos;4&apos;?&apos;Expr_Case2_yellow&apos;:&apos;&apos;\" edittype=\"textarea\"/><Cell col=\"4\" cssclass=\"expr:Column0==&apos;1&apos;?&apos;Expr_Case2_red&apos;:Column0==&apos;2&apos;?&apos;Expr_Case2_pink&apos;:Column0==&apos;3&apos;?&apos;Expr_Case2_blue&apos;:Column0==&apos;4&apos;?comp.parent.parent.parent.fn_background_yellow():&apos;&apos;\" expr=\"Column0==&apos;1&apos;?&apos;Expr_Case2_red&apos;:Column0==&apos;2&apos;?&apos;Expr_Case2_pink&apos;:Column0==&apos;3&apos;?&apos;Expr_Case2_blue&apos;:Column0==&apos;4&apos;?comp.parent.parent.parent.fn_background_yellow():&apos;&apos;\" edittype=\"textarea\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Z202103_2021030001-np_Grid_Expr_cell_background.xfdl", function() {

        this.fn_background = function(row)
        {

        	var val = this.Dataset00.getColumn(row,"Column0");

        	if(val == "1") {
        		return "Expr_Case2_red";
        	} else if(val == "2") {
        	    return "Expr_Case2_pink";
        	} else if(val == "3") {
        	    return "Expr_Case2_blue";
        	} else if(val == "4") {
        	    return "Expr_Case2_yellow";
        	}

        	return "";
        };

        this.fn_background_yellow = function()
        {
        	return "Expr_Case2_yellow";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid01.addEventHandler("oncellposchanged",this.Grid01_oncellposchanged,this);
        };
        this.loadIncludeScript("Z202103_2021030001-np_Grid_Expr_cell_background.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
