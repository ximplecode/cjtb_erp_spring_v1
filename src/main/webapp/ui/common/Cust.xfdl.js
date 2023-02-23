(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Cust");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cust_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"2\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"NAME\">-선택-</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">학습</Col></Row><Row><Col id=\"CODE\">11</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">주간</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">개인</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">교판</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">속셈</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">학원</Col></Row><Row><Col id=\"CODE\">24</Col><Col id=\"NAME\">서점</Col></Row><Row><Col id=\"CODE\">25</Col><Col id=\"NAME\">유치</Col></Row><Row><Col id=\"CODE\">26</Col><Col id=\"NAME\">스쿨</Col></Row><Row><Col id=\"CODE\">27</Col><Col id=\"NAME\">외주</Col></Row><Row><Col id=\"CODE\">28</Col><Col id=\"NAME\">기타</Col></Row><Row><Col id=\"CODE\">29</Col><Col id=\"NAME\">NET</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">GGE</Col></Row><Row><Col id=\"CODE\">31</Col><Col id=\"NAME\">해법</Col></Row><Row><Col id=\"CODE\">32</Col><Col id=\"NAME\">영어</Col></Row><Row><Col id=\"CODE\">33</Col><Col id=\"NAME\">고등</Col></Row><Row><Col id=\"CODE\">34</Col><Col id=\"NAME\">과학</Col></Row><Row><Col id=\"CODE\">35</Col><Col id=\"NAME\">독서</Col></Row><Row><Col id=\"CODE\">36</Col><Col id=\"NAME\">논술</Col></Row><Row><Col id=\"CODE\">37</Col><Col id=\"NAME\">학력</Col></Row><Row><Col id=\"CODE\">38</Col><Col id=\"NAME\">교원</Col></Row><Row><Col id=\"CODE\">39</Col><Col id=\"NAME\">쇼핑</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">캐릭</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"NAME\">저작</Col></Row><Row><Col id=\"CODE\">40</Col><Col id=\"NAME\">매입</Col></Row><Row><Col id=\"CODE\">41</Col><Col id=\"NAME\">외주</Col></Row><Row><Col id=\"CODE\">42</Col><Col id=\"NAME\">상품</Col></Row><Row><Col id=\"CODE\">47</Col><Col id=\"NAME\">은행</Col></Row><Row><Col id=\"CODE\">48</Col><Col id=\"NAME\">부서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cust", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_SNAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_SAUPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","8","8","81","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("거래처구분");
            obj.set_background("#10aea9");
            obj.set_color("#ffffff");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_cust_gb","90","8","107","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cust_gb");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            obj.set_text("-선택-");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","200","8","81","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("거래처명");
            obj.set_background("#10aea9");
            obj.set_color("#ffffff");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cust_nm","282","8","185","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","471","8","80","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","8","46","81","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사업자번호");
            obj.set_background("#10aea9");
            obj.set_color("#ffffff");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_saupno","90","46","107","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_use_gb","208","46","150","29",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("거래중지업체 제외");
            obj.set_font("normal 700 11pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cust","8","80","544","257",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_cust");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"365\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"코드\"/><Cell col=\"3\" text=\"거래처명\"/></Band><Band id=\"body\"><Cell text=\"bind:GUBN\" combodataset=\"ds_cust_gb\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:GUBN\"/><Cell col=\"2\" text=\"bind:CODE\"/><Cell col=\"3\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","239","344","83","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,380,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Cust.xfdl","Lib::Lib_service.xjs");
        this.registerScript("Cust.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.getData_cust(this.cb_cust_gb.value,"",this.edt_cust_nm.value, this.medt_saupno.value, this.ckb_use_gb.value );
        };

        this.getData_cust = function(cust_gb, cust_cd, cust_nm, saup_no, use_gb)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/common/getdata_cust.jsp";
        	in_ds = "ds_cust=ds_cust";
        	out_ds = "ds_cust=ds_cust";
        	str_arg = "cust_gb='"+cust_gb+"' cust_cd='"+ cust_cd +"' cust_nm='"+cust_nm+"' saup_no='"+saup_no+"' use_gb='"+use_gb+"'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_cust", true, "P", false, this);
        };

        this.Callback_cust = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}

            trace(this.ds_cust.saveXML());
        }

        this.Cust_onload = function(obj,e)
        {
        	this.cb_cust_gb.set_value(this.parent.pCust_gb);
        	this.cb_cust_gb.set_enable(this.parent.pUse_gb);
        };

        this.grd_cust_oncelldblclick = function(obj,e)
        {
        	this.parent.arr_s[0] = this.ds_cust.getColumn(e.row,"GUBN");
        	this.parent.arr_s[1] = this.ds_cust.getColumn(e.row,"CODE");
        	this.parent.arr_s[2] = this.ds_cust.getColumn(e.row,"NAME");
        	this.parent.arr_s[3] = this.ds_cust.getColumn(e.row,"F_SNAME");
        	this.parent.arr_s[4] = this.ds_cust.getColumn(e.row,"F_SAUPNO");
        	this.close(1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Cust_onload,this);
            this.edt_cust_nm.addEventHandler("onkeydown",this.edt_name_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_cust.addEventHandler("oncelldblclick",this.grd_cust_oncelldblclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("Cust.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
