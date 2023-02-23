(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1090F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSubbook", this);
            obj._setContents("<ColumnInfo><Column id=\"code_key\" type=\"STRING\" size=\"10\"/><Column id=\"book_year\" type=\"STRING\" size=\"4\"/><Column id=\"book_name\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmd_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">판매용</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">교사용</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">타계정</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ccode1", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"1\"/><Column id=\"code\" type=\"STRING\" size=\"2\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bjgb", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"cd_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"cd\">1</Col><Col id=\"cd_nm\">주력</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"cd\">2</Col><Col id=\"cd_nm\">채택</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"cd\">3</Col><Col id=\"cd_nm\">신간</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"cd\">4</Col><Col id=\"cd_nm\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgbr", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"code\">00</Col><Col id=\"name\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_panh", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"code\">00</Col><Col id=\"name\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mdcode", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"mdcode\" type=\"STRING\" size=\"256\"/><Column id=\"mnm\" type=\"STRING\" size=\"256\"/><Column id=\"dnm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"mdcode\">00</Col><Col id=\"mnm\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ccode24", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"dcd\" type=\"STRING\" size=\"256\"/><Column id=\"dnm\" type=\"STRING\" size=\"256\"/><Column id=\"dchk\" type=\"STRING\" size=\"256\"/><Column id=\"chk1\" type=\"STRING\" size=\"256\"/><Column id=\"jcd\" type=\"STRING\" size=\"256\"/><Column id=\"jnm\" type=\"STRING\" size=\"256\"/><Column id=\"jchk\" type=\"STRING\" size=\"256\"/><Column id=\"chk2\" type=\"STRING\" size=\"256\"/><Column id=\"scd\" type=\"STRING\" size=\"256\"/><Column id=\"snm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">1</Col><Col id=\"name\">일자별출반품현황</Col></Row><Row><Col id=\"value\">2</Col><Col id=\"name\">거래처별출반품현황</Col></Row><Row><Col id=\"value\">3</Col><Col id=\"name\">거래처별출반품집계(도서</Col></Row><Row><Col id=\"value\">4</Col><Col id=\"name\">거래처별출반품집계(전체</Col></Row><Row><Col id=\"value\">5</Col><Col id=\"name\">도서별출반품매출순위</Col></Row><Row><Col id=\"value\">6</Col><Col id=\"name\">도서별출반품현황</Col></Row><Row><Col id=\"value\">7</Col><Col id=\"name\">도서별출반품집계(업체</Col></Row><Row><Col id=\"value\">8</Col><Col id=\"name\">도서별출반품집계(전체</Col></Row><Row><Col id=\"value\">9</Col><Col id=\"name\">속성별출반품집계(업체</Col></Row><Row><Col id=\"value\">10</Col><Col id=\"name\">속성별출반품집계(도서</Col></Row><Row><Col id=\"value\">11</Col><Col id=\"name\">속성별출반품집계</Col></Row><Row><Col id=\"value\">12</Col><Col id=\"name\">연결업체별출반품집계</Col></Row><Row><Col id=\"value\">13</Col><Col id=\"name\">연결업체별도서출반품집계</Col></Row><Row><Col id=\"value\">14</Col><Col id=\"name\">거래처별출고율적용</Col></Row><Row><Col id=\"value\">15</Col><Col id=\"name\">거래처별출반품현황(분리</Col></Row><Row><Col id=\"value\">16</Col><Col id=\"name\">속성별출반품집계(나열</Col></Row><Row><Col id=\"value\">17</Col><Col id=\"name\">도서별출반품집계(나열</Col></Row><Row><Col id=\"value\">18</Col><Col id=\"name\">도서별출반품집계(금액나열</Col></Row><Row><Col id=\"value\">19</Col><Col id=\"name\">속성별출반품집계(금액나열</Col></Row><Row><Col id=\"value\">20</Col><Col id=\"name\">업체별출반품집계(금액나열</Col></Row><Row><Col id=\"value\">21</Col><Col id=\"name\">속성/거래처채널별출반품집계</Col></Row><Row><Col id=\"value\">22</Col><Col id=\"name\">업체별출반품현황(규제대상</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_1", this);
            obj.set_keystring("BYMD");
            obj._setContents("<ColumnInfo><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_JGB\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_COST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_1_2", this);
            obj.set_keystring("BYMD");
            obj._setContents("<ColumnInfo><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_JGB\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_COST\" type=\"FLOAT\" size=\"256\"/><Column id=\"ISBN_N\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_2", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_JGB\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_COST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_3", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_JGB\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_COST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_4", this);
            obj.set_keystring("CUST_CD+CUST_GB");
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_5", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MQTY\" type=\"INT\" size=\"256\"/><Column id=\"GMQTY\" type=\"INT\" size=\"256\"/><Column id=\"KMQTY\" type=\"INT\" size=\"256\"/><Column id=\"MAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"BQTY\" type=\"INT\" size=\"256\"/><Column id=\"IBQTY\" type=\"INT\" size=\"256\"/><Column id=\"KBQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SAMT\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_6", this);
            obj.set_keystring("BOOK_CD+BYY");
            obj._setContents("<ColumnInfo><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_COST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_7", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_JGB\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_COST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_8", this);
            obj.set_keystring("BOOK_CD+BYY");
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_JGB\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_COST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_9", this);
            obj.set_keystring("SGRP_CODE");
            obj._setContents("<ColumnInfo><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_10", this);
            obj.set_keystring("SGRP_CODE");
            obj._setContents("<ColumnInfo><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_JGB\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_10_1", this);
            obj.set_keystring("SGRP_CODE");
            obj._setContents("<ColumnInfo><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_JGB\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_11", this);
            obj._setContents("<ColumnInfo><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_12", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"M_CUSTGB\" type=\"STRING\" size=\"256\"/><Column id=\"M_CUSTCD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_COST\" type=\"INT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_13", this);
            obj.set_keystring("M_CUSTGB+M_CUSTCD");
            obj._setContents("<ColumnInfo><Column id=\"M_CUSTGB\" type=\"STRING\" size=\"256\"/><Column id=\"M_CUSTCD\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_COST\" type=\"INT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_14", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL\" type=\"STRING\" size=\"256\"/><Column id=\"DCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DCYUL\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAN\" type=\"STRING\" size=\"256\"/><Column id=\"YUL1\" type=\"STRING\" size=\"256\"/><Column id=\"YUL2\" type=\"STRING\" size=\"256\"/><Column id=\"YUL3\" type=\"STRING\" size=\"256\"/><Column id=\"YUL4\" type=\"STRING\" size=\"256\"/><Column id=\"JUK_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CCYUL\" type=\"STRING\" size=\"256\"/><Column id=\"CCOST\" type=\"INT\" size=\"256\"/><Column id=\"CHAK\" type=\"STRING\" size=\"256\"/><Column id=\"CQTY\" type=\"INT\" size=\"256\"/><Column id=\"CAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"BQTY\" type=\"INT\" size=\"256\"/><Column id=\"BAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"C_DAN\" type=\"INT\" size=\"256\"/><Column id=\"C_AMT\" type=\"INT\" size=\"256\"/><Column id=\"B_AMT\" type=\"INT\" size=\"256\"/><Column id=\"SOON_AMT\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_15", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_JGB\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_16", this);
            obj.set_keystring("SGRP_CODE");
            obj._setContents("<ColumnInfo><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BQTY5\" type=\"INT\" size=\"256\"/><Column id=\"BQTY6\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_17", this);
            obj.set_keystring("BOOK_CD+BYY");
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BQTY5\" type=\"INT\" size=\"256\"/><Column id=\"BQTY6\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_COST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_JGB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_17_1", this);
            obj.set_keystring("BOOK_CD+BYY");
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BQTY5\" type=\"INT\" size=\"256\"/><Column id=\"BQTY6\" type=\"INT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_COST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_JGB\" type=\"STRING\" size=\"256\"/><Column id=\"ISBN_N\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_18", this);
            obj.set_keystring("BOOK_CD+BYY");
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"CAMT1\" type=\"INT\" size=\"256\"/><Column id=\"CAMT2\" type=\"INT\" size=\"256\"/><Column id=\"CAMT3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BQTY5\" type=\"INT\" size=\"256\"/><Column id=\"BQTY6\" type=\"INT\" size=\"256\"/><Column id=\"BAMT1\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT2\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT3\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT4\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT5\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT6\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT7\" type=\"FLOAT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_COST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_JGB\" type=\"STRING\" size=\"256\"/><Column id=\"PANH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_19", this);
            obj.set_keystring("SGRP_CODE");
            obj._setContents("<ColumnInfo><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"CAMT1\" type=\"INT\" size=\"256\"/><Column id=\"CAMT2\" type=\"INT\" size=\"256\"/><Column id=\"CAMT3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BQTY5\" type=\"INT\" size=\"256\"/><Column id=\"BQTY6\" type=\"INT\" size=\"256\"/><Column id=\"BAMT1\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT2\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT3\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT4\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT5\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT6\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT7\" type=\"FLOAT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_20", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"F_SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"EYMD\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"CAMT1\" type=\"INT\" size=\"256\"/><Column id=\"CAMT2\" type=\"INT\" size=\"256\"/><Column id=\"CAMT3\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BQTY5\" type=\"INT\" size=\"256\"/><Column id=\"BQTY6\" type=\"INT\" size=\"256\"/><Column id=\"BAMT1\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT2\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT3\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT4\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT5\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT6\" type=\"FLOAT\" size=\"256\"/><Column id=\"BAMT7\" type=\"FLOAT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_21", this);
            obj.set_keystring("BYMD");
            obj._setContents("<ColumnInfo><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNM\" type=\"STRING\" size=\"256\"/><Column id=\"JCD\" type=\"STRING\" size=\"256\"/><Column id=\"JNM\" type=\"STRING\" size=\"256\"/><Column id=\"SQTY\" type=\"INT\" size=\"256\"/><Column id=\"SAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CQTY2\" type=\"INT\" size=\"256\"/><Column id=\"CQTY3\" type=\"INT\" size=\"256\"/><Column id=\"CAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"COST\" type=\"INT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BQTY4\" type=\"INT\" size=\"256\"/><Column id=\"BAMT\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_22", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"BIQTY\" type=\"INT\" size=\"256\"/><Column id=\"BIAMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY_2017\" type=\"INT\" size=\"256\"/><Column id=\"AMT_2017\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOOK_COST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CAMT1\" type=\"FLOAT\" size=\"256\"/><Column id=\"BQTY1\" type=\"INT\" size=\"256\"/><Column id=\"BAMT1\" type=\"FLOAT\" size=\"256\"/><Column id=\"BQTY2\" type=\"INT\" size=\"256\"/><Column id=\"BAMT2\" type=\"FLOAT\" size=\"256\"/><Column id=\"BQTY3\" type=\"INT\" size=\"256\"/><Column id=\"BAMT3\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01_00_00","70.50%","12",null,"40","1.50%",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_sdate","71.29%","17",null,"30","20.64%",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","10.50%","12",null,"40","37.93%",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01","70.50%","50",null,"40","1.50%",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","40.57%","50",null,"40","37.93%",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00","10.36%","88",null,"40","61.57%",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00_00","10.50%","126",null,"86","64.50%",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00","10.50%","50",null,"40","61.43%",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ioyh","64.43%","127",null,"117","25.71%",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_ccode1");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"35\"/><Column size=\"66\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"코드명\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:code\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"bind:name\" font=\"11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_select","15%","17",null,"30","77.86%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cmd_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_edate","83.79%","17",null,"30","8.50%",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","81.14%","17",null,"30","17.00%",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sbook","41.29%","55",null,"30","52.57%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            obj.set_value("0000000000");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","51.14%","55",null,"30","47.79%",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ebook","54.00%","55",null,"30","39.93%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            obj.set_value("9999999999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ebookcode","60.07%","61",null,"19","38.50%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak","11.57%","98",null,"20","82.14%",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("학년용");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak1","18.79%","98",null,"20","75.14%",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("1학기");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak2","25.86%","98",null,"20","68.64%",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("2학기");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","14.93%","134",null,"26","81%",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("속성코드");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","14.93%","171",null,"26","81.00%",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("속성명");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_subbookcode","19.71%","132",null,"30","74.29%",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new TextArea("ed_bookname","19.64%","169",null,"30","74.29%",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_scrolltype("none");
            obj.set_font("11px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_select","26.07%","129",null,"20","70.21%",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("도서");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_use","26.07%","146",null,"20","70.21%",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("사용x");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_year","26.00%","169",null,"30","69.50%",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_min("2009");
            obj.set_max("9999");
            obj.set_value("2012");
            this.addChild(obj.name, obj);

            obj = new Button("btn_attribute_search","30.64%","173",null,"26","65.14%",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sbookcode","47.57%","61",null,"19","51.00%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sgb","71.29%","55",null,"30","25.29%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_scode","74.29%","55",null,"30","21.79%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_scust","78.21%","61",null,"19","20.36%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_egb","82.79%","55",null,"30","13.50%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ecode","85.79%","55",null,"30","10.00%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ecust","89.93%","62",null,"19","8.64%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","81.07%","56",null,"30","17.71%",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","16.50%","56",null,"30","82.36%",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_syy","11.43%","55",null,"30","83.86%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_circulation("true");
            obj.set_min("2009");
            obj.set_max("9999");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_eyy","17.43%","55",null,"30","77.86%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_circulation("true");
            obj.set_min("2009");
            obj.set_max("9999");
            this.addChild(obj.name, obj);

            obj = new TextArea("E_gubn","11.07%","17",null,"30","85.93%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_maxlength("1");
            obj.set_scrolltype("none");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1.79%","429",null,"63.25%","1.50%",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","92.07%","395",null,"25","1.57%",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("엑셀변환");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_attribute","10.50%","204",null,"144","64.50%",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_binddataset("dsSubbook");
            obj.set_autofittype("none");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"177\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"도서코드\"/><Cell col=\"2\" text=\"년판\"/><Cell col=\"3\" text=\"도서명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:code_key\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:book_year\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:book_name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_01","40.50%","88",null,"40","37.93%",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_A","41.36%","98",null,"20","54.93%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("서울");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_B","46.00%","98",null,"20","49.43%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("A등급");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_C","51.36%","98",null,"20","44.07%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("B등급");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_D","56.50%","98",null,"20","38.93%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("C등급");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_01","70.50%","88",null,"40","1.50%",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","71.36%","97",null,"21","23.57%",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("주)영업담당");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ju","76.50%","93",null,"30","19.29%",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("######");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Button("btn_s_saleuser","80.79%","99",null,"19","17.86%",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00_00_01","40.50%","126",null,"64","41.00%",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_code","40.57%","190",null,"157","41.00%",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_binddataset("ds_cust");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"80\"/><Column size=\"122\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" colspan=\"2\" text=\"조건명\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" colspan=\"2\" text=\"bind:CODE_KEY\" font=\"11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_isbn","23.00%","22",null,"20","73.93%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Isbn");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1.79%","12",null,"40","89.29%",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("선택");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","1.79%","126",null,"222","89.29%",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("속성코드 조회");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","31.86%","88",null,"40","59.21%",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("등급구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","1.79%","50",null,"40","89.29%",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("도서년판");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01","61.86%","88",null,"40","29.00%",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("영업담당자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","1.79%","88",null,"40","89.29%",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("학년구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","61.86%","50",null,"40","29.00%",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("업체구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00","35.36%","126",null,"222","59.14%",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("업체조회");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","31.86%","50",null,"40","59.21%",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("도서코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","61.86%","12",null,"40","29.00%",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("일자구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_CDCHK","27.64%","22",null,"20","67.79%",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("C,D만");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_CDYCHK","33.00%","22",null,"20","62.00%",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("C,D제외");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_RCHK","39.00%","22",null,"20","55.93%",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("반품R만");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_RYCHK","45.00%","22",null,"20","49.14%",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("반품R제외");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cb_pChk","51.64%","22",null,"20","42.79%",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("P제외");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edt_custgb","41.21%","130",null,"30","55.71%",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_value("21");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edt_custcd","44.21%","130",null,"30","52.21%",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","48.14%","133",null,"21","49.07%",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("업체명");
            this.addChild(obj.name, obj);

            obj = new Edit("Edt_custname","50.93%","130",null,"30","41.43%",null,null,null,null,null,this);
            obj.set_taborder("77");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search2","55.21%","162",null,"25","41.57%",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_custend","41.21%","164",null,"20","48.07%",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("거래중지업체 포함");
            this.addChild(obj.name, obj);

            obj = new Grid("grid4","64.36%","244",null,"102","25.64%",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_bjgb");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"35\"/><Column size=\"66\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"코드명\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:cd\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"bind:cd_nm\" font=\"11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00_01","58.79%","153",null,"195","35.50%",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("도서유형");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_bgbr","74.36%","127",null,"117","15.79%",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_bgbr");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"35\"/><Column size=\"66\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"코드명\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:code\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"bind:name\" font=\"11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grid2","74.36%","244",null,"102","15.79%",null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_panh");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"35\"/><Column size=\"66\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"코드명\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:code\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"bind:name\" font=\"11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_00","10.43%","346",null,"43","1.50%",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_saupgubn","58.79%","128",null,"25","35.50%",null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("사업구분(클릭)");
            obj.set_font("8pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grid3","84.21%","127",null,"219","1.50%",null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_mdcode");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"35\"/><Column size=\"66\"/><Column size=\"66\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"대분류\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"소분류\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:mdcode\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"bind:mnm\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"bind:dnm\" font=\"11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("print_select","11.29%","354",null,"30","64.00%",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_innerdataset("ds_select");
            obj.set_datacolumn("name");
            obj.set_codecolumn("value");
            obj.set_text("일자별출반품현황");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_printview","85.14%","355",null,"25","8.00%",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("미리보기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","92.86%","355",null,"25","2.14%",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","1.79%","346",null,"43","89.29%",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("출력물");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_eymd","91.79%","61",null,"1.67%","21",null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("중지업체제외");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1400,1200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD1090F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD1090F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("SD1090F.xfdl","Lib::Lib_sd.xjs");
        this.registerScript("SD1090F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_sd.xjs"); /*include "Lib::Lib_sd.xjs"*/;

        //--------------------------------------------------------------
        // 폼 전역변수 선언
        //--------------------------------------------------------------
        var F_ScreenName    = "";					// 화면명
        var	lovflag = true;
        var qryStr ="";								//쿼리
        var printqry_1 = "";						//쿼리 유형.
        var printqry_2 = "";						//쿼리 유형.
        var Fv_HeadChk1 = 0;                         //체크박스1.
        var Fv_HeadChk2 = 0;                         //체크박스1.
        var Fv_HeadChk3 = 0;                         //체크박스1.
        var Fv_HeadChk4 = 0;                         //체크박스1.
        var Fv_HeadChk5 = 0;                         //체크박스1.
        var Fv_HeadChk6 = 0;                         //체크박스1.
        var Fv_HeadChk7 = 0;                         //체크박스1.
        var Find1_sw  = "N";
        var Find2_sw  = "N";
        var Find3_sw  = "N";
        var Find4_sw  = "N";
        var Find5_sw  = "N";
        var Find6_sw  = "N";
        var Find7_sw  = "N";
        var Find8_sw  = "N";
        var Gv_BookYear = this.lfn_sd_getBookYear(); // 영업관리 년판 세팅 얻어오기
        var bgbrnm;
        var PY_GB;
        var S_CUSTGB;
        var S_CUSTCD;
        var	E_CUSTGB;
        var  all_i = 0;
        var  All1_sw   = "N";
        var  All2_sw   = "N";
        var  All3_sw   = "N";
        var  All_sw    = "N";

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        //----------------------------------------------------------------------------------------
        //
        //  사용자정의 함수..
        //
        //----------------------------------------------------------------------------------------

        this.sqlCreate = function(event_id)
        {
        	//	 도서코드/도서코드 /기간 /기간 / 업체구간 /업체구간 /등급/학기/판매용구분/주/초/중/고/등록자/부수체크/ioyh/bgbr/custgb/속성코드/판매유형/도서구분
        	//rp [0000000000][9999999999][20061220][20061222][200000][299999][00,01][00,01][0][][][][][][busu][][][][][출고,증정][시험지,답안]
        	var s_cust, e_cust, p_yh;
        	var s_sql1, s_sql2, s_sql3, s_sql4, s_sql5, Hak_g;
            var Line_sw, rdopt;
        	bgbrnm    = "";
            Find1_sw  = "N";
            Find2_sw  = "N";
            Find3_sw  = "N";
            Find4_sw  = "N";
            Find5_sw  = "N";
        	Find6_sw  = "N";
            Find7_sw  = "N";
            Find8_sw  = "N";
        	var bgbr      = this.Gridcheck("dsBgbr");
        	var panh      = this.Gridcheck("dspanh");
        	var custcode  = this.Gridcheck("dsCode");
        	var bookcode  = this.Gridcheck("dsSubbook");
        	var subcust   = this.Gridcheck("dsCust");
        	var r_sel     = this.Gridcheck("dsmdcode");
        	var sel_dsjgb = this.Gridcheck("dsjgb");
        	var rdfile = this.selectfile(this.print_select.value);
        	var pSbookcode, pEbookcode;
        	pSbookcode     = this.ed_sbook.value + ")" + this.ed_syy.value;
        	pEbookcode     = this.ed_ebook.value + ")" + this.ed_eyy.value;
            s_cust     =  this.ed_sgb.value + this.ed_scode.value;
            e_cust     =  this.ed_egb.value + this.ed_ecode.value;
            p_yh       =  this.cmb_select.text;
            s_sql1     = "";
            s_sql2     = "";
            s_sql3     = "";
            s_sql4     = "";
        	bgbrnm  = bgbrnm.substr(0,bgbrnm.length-1);
        	if ( Find2_sw  == "N" )
        	{
            	bgbrnm  = "전체";
        	}


            s_sql1     = "";
            s_sql2     = "";
            s_sql3     = "";
            s_sql4     = "";
            all_i         = 0;
            if (( All1_sw == "Y" ) && ( All2_sw == "N" )  && ( All3_sw == "N" ))  all_i      = 1;
            if (( All1_sw == "Y" ) && ( All2_sw == "Y" )  && ( All3_sw == "N" ))  all_i      = 2;
            if (( All1_sw == "Y" ) && ( All2_sw == "N" )  && ( All3_sw == "Y" ))  all_i      = 3;
            if (( All1_sw == "Y" ) && ( All2_sw == "Y" )  && ( All3_sw == "Y" ))  all_i      = 4;
            if (( All1_sw == "N" ) && ( All2_sw == "Y" )  && ( All3_sw == "N" ))  all_i      = 5;
            if (( All1_sw == "N" ) && ( All2_sw == "Y" )  && ( All3_sw == "Y" ))  all_i      = 6;
            if (( All1_sw == "N" ) && ( All2_sw == "N" )  && ( All3_sw == "Y" ))  all_i      = 7;

            if ((this.print_select.value != 5) && (this.print_select.value != 14))
        	{
        		s_sql1     = "    where  a.BOOK_CD >=  '" + this.ed_sbook.value +"'";
        		s_sql1     = s_sql1 + "    AND  a.BOOK_CD <=  '" + this.ed_ebook.value +"'";
        		s_sql1     = s_sql1 + "    AND  a.Byy >=  '" + this.ed_syy.value +"'";
        		s_sql1     = s_sql1 + "    AND  a.Byy <=  '" + this.ed_eyy.value +"'";
        		if ( Find4_sw == "Y" )
        		{
        			s_sql1    = s_sql1 + "   and a.BOOK_CD  in ( " + bookcode +" ) ";
        		}
        		s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) >= '" + s_cust +"'";
        		s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) <= '" + e_cust +"'";
        		if ( Find5_sw == "Y" )
        		{
        			s_sql1    = s_sql1 + "   and ( A.cust_gb || A.CUST_CD )  in ( " + subcust +" ) ";
        		}
        		s_sql1     = s_sql1 + "    and  a.bymd >= '" + this.ed_sdate.value +"'";
        		s_sql1     = s_sql1 + "    and  a.bymd <= '" + this.ed_edate.value +"'";
        		if ( this.C_CDCHK.value == true)
        		{
        			s_sql1     = s_sql1 + "    and  substr(a.jpno,9,1)  >= 'C' ";
        			s_sql1     = s_sql1 + "    and  substr(a.jpno,9,1)  <= 'D' ";
        		}
        		if ( this.C_CDYCHK.value == true)
        		{
        			s_sql1     = s_sql1 + "    and  substr(a.jpno,9,1)  <> 'C' ";
        			s_sql1     = s_sql1 + "    and  substr(a.jpno,9,1)  <> 'D' ";
        		}
        		if ( this.C_RCHK.value == true)    s_sql1     = s_sql1 + "    and  substr(a.jpno,9,1)  = 'R' ";
        		if ( this.C_RYCHK.value == true)   s_sql1     = s_sql1 + "    and  substr(a.jpno,9,1)  <> 'R' ";

        		if ((this.print_select.value == 12) || (this.print_select.value == 13))
        		{
        			s_sql1     = "    where  ( m.d_custgb || m.d_custcd ) >= '" + s_cust +"'";
        			s_sql1     = s_sql1 + "    and  ( m.d_custgb || m.d_custcd ) <= '" + e_cust +"'";
        			if ( Find5_sw == "Y" )
        			{
        				s_sql1    = "   and ( m.d_custgb || m.d_custcd )  in ( " + subcust +" ) ";
        			}
        			s_sql1     = s_sql1 +  "   and  a.BOOK_CD >=  '" + this.ed_sbook.value +"'";
        			s_sql1     = s_sql1 + "    AND  a.BOOK_CD <=  '" + this.ed_ebook.value +"'";
        			s_sql1     = s_sql1 + "    AND  a.Byy >=  '" + this.ed_syy.value +"'";
        			s_sql1     = s_sql1 + "    AND  a.Byy <=  '" + this.ed_eyy.value +"'";
        			if ( Find4_sw == "Y" )
        			{
        				s_sql1    = s_sql1 + "   and a.BOOK_CD  in ( " + bookcode +" ) ";
        			}
        			s_sql1     = s_sql1 + "    and  a.bymd >= '" + this.ed_sdate.value +"'";
        			s_sql1     = s_sql1 + "    and  a.bymd <= '" + this.ed_edate.value +"'";
        		}
        		//======s_sql2
        		if ( Find2_sw == "Y" )
        		{
        			s_sql2    = s_sql2 + "    and  b.cgb  in ( " + custcode +" ) ";
        		}
        		if ( this.ed_ju.value.trim() != "" && this.ed_ju.value != undefined )
        		{
        			s_sql2    = s_sql2 + "   and b.sale_CD  = '" + this.ed_ju.value +"'";
        		}
        		if ( this.C_eymd.value == true )
        			s_sql2    = s_sql2 + "   and rtrim(b.eymd) is null ";

        		Line_Sw    = "N";
        		if (( this.C_A.value == "1" ) || ( this.C_B.value == "1" ) || ( this.C_C.value == "1" ) || ( this.C_D.value == "1" ))
        		{
        			s_sql2    = s_sql2 + "    and  b.dung_cd in (  ";
        			if (  this.C_A.value == "1" )
        			{
        				s_sql2    = s_sql2 + " '01' ";
        				Line_Sw   = "Y";
        			}
        			if (( Line_Sw == "Y"  ) && ( this.C_B.value == "1"  ))
        			{
        				s_sql2     = s_sql2 + ", '02' ";
        				Line_Sw    = "Y";
        			}
        			else if (( Line_Sw == "N"  ) && ( this.C_B.value == "1"  ))
        			{
        				s_sql2     = s_sql2 + " '02' ";
        				Line_Sw    = "Y";
        			}
        			if (( Line_Sw == "Y"  ) && ( this.C_C.value == "1"  ))
        			{
        				s_sql2     = s_sql2 + ", '03' ";
        				Line_Sw    = "Y";
        			}
        			else if (( Line_Sw == "N"  ) && ( this.C_C.value == "1"  ))
        			{
        				s_sql2     = s_sql2 + " '03' ";
        				Line_Sw    = "Y";
        			}
        			if (( Line_Sw == "Y"  ) && ( this.C_D.value == "1"  ))
        			{
        				s_sql2     = s_sql2 + ", '04' ";
        				Line_Sw     = "Y";
        			}
        			else if (( Line_Sw == "N"  ) && ( this.C_D.value == "1"  ))
        			{
        				s_sql2     = s_sql2 + " '04' ";
        				Line_Sw     = "Y";
        			}
        			s_sql2    = s_sql2 + "    )  ";
        		}

        		if ( all_i == 1 )   s_sql2    = s_sql2 + "   and  c2.dcd  in ( " + S_CUSTGB +" ) ";
        		else if ( all_i == 2 )
        		{
        			s_sql2    = s_sql2 + "   and ( c2.dcd  in ( " + S_CUSTGB +" ) ";
        			s_sql2    = s_sql2 + "   or  c2.jcd  in ( " + S_CUSTCD +" )  ) ";
        		}
        		else if ( all_i == 3 )
        		{
        			s_sql2    = s_sql2 + "   and ( c2.dcd  in ( " + S_CUSTGB +" ) ";
        			s_sql2    = s_sql2 + "   or  b.cgb1  in ( " + E_CUSTGB +" )  ) ";
        		}
        		else if ( all_i == 4 )
        		{
        			s_sql2    = s_sql2 + "   and ( c2.dcd  in ( " + S_CUSTGB +" ) ";
        			s_sql2    = s_sql2 + "   or    c2.jcd  in ( " + S_CUSTCD +" ) ";
        			s_sql2    = s_sql2 + "   or  b.cgb1  in ( " + E_CUSTGB +" )  ) ";
        		}
        		else if ( all_i == 5 )
        		{
        			s_sql2    = s_sql2 + "   and  c2.jcd  in ( " + S_CUSTCD +" ) ";
        		}
        		else if ( all_i == 6 )
        		{
        			s_sql2    = s_sql2 + "   and ( c2.jcd  in ( " + S_CUSTCD +" ) ";
        			s_sql2    = s_sql2 + "   or  b.cgb1  in ( " + E_CUSTGB +" )  ) ";
        		}
        		else if ( all_i == 7 )
        		{
        			s_sql2    = s_sql2 + "   and b.cgb1  in ( " + E_CUSTGB +" )  ";
        		}

        		//======s_sql3
        		if ( this.E_gubn.value   == "0" )
                {
        			s_sql3     =  s_sql3 + "  and  c.meip_c = '0'  ";
        		}
        		else if ( this.E_gubn.value   == "1" )
                {
        			s_sql3     =  s_sql3 + " and   c.meip_c = '1'  ";
        		}
        		else if ( this.E_gubn.value   == "2" )
                {
        			s_sql3     =  s_sql3 + " and   c.meip_c = '2'  ";
        		}
        		if ( Find1_sw == "Y" )  s_sql3    = s_sql3 + "    and  c.bgbr_cd in ( " + bgbr +" ) ";

        		Line_sw    =  "N";
        		if (( this.C_hak.value == "1" ) || ( this.C_hak1.value == "1" ) || ( this.C_hak2.value == "1" ))
        		{
        			s_sql3    = s_sql3 + "    and  c.book_hcode in (  ";
        			if ( this.C_hak.value == "1" )
        			{
        				Hak_g     = "학년용";
        				s_sql3    = s_sql3 + " '00' ";
        				Line_sw  = "Y";
        			}
        			if (( Line_sw == "Y"  ) && ( this.C_hak1.value == "1"  ))
        			{
        				Hak_g     = Hak_g + "/1학기";
        				s_sql3    = s_sql3 + ", '01' ";
        				Line_sw   = "Y";
        			}
        			else if (( Line_sw == "N"  ) && ( this.C_hak1.value == "1"  ))
        			{
        				Hak_g     = "1학기";
        				s_sql3    = s_sql3 + " '01' ";
        				Line_sw   = "Y";
        			}
        			if (( Line_sw == "Y"  ) && ( this.C_hak2.value == "1"  ))
        			{
        				Hak_g     = Hak_g + "/2학기";
        				s_sql3    = s_sql3 + ", '02' ";
        				Line_sw   = "Y";
        			}
        			else if (( Line_sw == "N"  ) && ( this.C_hak2.value == "1"  ))
        			{
        				Hak_g     = "2학기";
        				s_sql3    = s_sql3 + " '02' ";
        				Line_sw   = "Y";
        			}
        			s_sql3      = s_sql3 + "    )  ";
        		}
        		else
        		{
                    Hak_g     = "전체";
        		}

        		if ( Find3_sw == "Y" )
        		{
        			s_sql3    = s_sql3 + "   and c.sgrp_code  in ( " + bookcode +" ) ";
        		}
        		if ( Find7_sw == "Y" )
        		{
        			s_sql3    = s_sql3 + "   and substr(c.sgrp_code,1,2) in ( " + r_sel +" ) ";
        		}
        		if ( Find6_sw == "Y" )     s_sql3    = s_sql3 + "   and c.panh_cd  in ( " + panh +" ) ";
        		if ( Find8_sw == "Y" )     s_sql3    = s_sql3 + "   and c.book_jgb  in ( " + sel_dsjgb +" ) ";

        		var rdopt  = "/ragentpath ["+ gv_urlRdDataServer +"]" + " /rp ["+p_yh+"]"+ // 1
        		"["+this.ed_sdate.value+"]"+ //2
        		"["+this.ed_edate.value+"]"+  //3
        		"["+pSbookcode+"]"+ // 4
        		"["+pEbookcode+"]"+ // 5
        		"["+s_cust+"]"+ // 6
        		"["+e_cust+"]"+ // 7
        		"["+bgbrnm+"]"+ // 8
        		"["+Hak_g+"]"+ // 9
        		"["+s_sql1+"]"+ // 10
        		"["+s_sql2+"]"+ // 11
        		"["+s_sql3+"]"; // 12

        	}
        	else if ((this.print_select.value == 5))
        	{
        		s_sql1     = "    where  ( a.cust_gb || a.CUST_CD ) >= '" + s_cust +"'";
        		s_sql1     = s_sql1 + "    and  ( a.cust_gb || a.CUST_CD ) <= '" + e_cust +"'";
        		if ( Find5_sw == "Y" )
        		{
        			s_sql1    = s_sql1 + "   and ( A.cust_gb || A.CUST_CD )  in ( " + subcust +" ) ";
        		}
        		s_sql1     = s_sql1 + "    and  a.bymd >= '" + this.ed_sdate.value +"'";
        		s_sql1     = s_sql1 + "    and  a.bymd <= '" + this.ed_edate.value +"'";
        		s_sql1     = s_sql1 + "    and  a.BOOK_CD >=  '" + this.ed_sbook.value +"'";
        		s_sql1     = s_sql1 + "    AND  a.BOOK_CD <=  '" + this.ed_ebook.value +"'";
        		s_sql1     = s_sql1 + "    AND  a.Byy >=  '" + this.ed_syy.value +"'";
        		s_sql1     = s_sql1 + "    AND  a.Byy <=  '" + this.ed_eyy.value +"'";
        		if ( Find4_sw == "Y" )
        		{
        			s_sql1    = s_sql1 + "   and  a.BOOK_CD  in ( " + bookcode +" ) ";
        		}
        		//======s_sql2
        		if ( Find2_sw == "Y" )
        		{
        			s_sql2    = s_sql2 + "    and  b.cgb  in ( " + custcode +" ) ";
        		}
        		if ( this.ed_ju.value.trim() != "" && this.ed_ju.value != undefined )
        		{
        			s_sql2    = s_sql2 + "   and b.sale_CD  = '" + this.ed_ju.value +"'";
        		}
        		if ( this.C_eymd.value == true )
                s_sql2    = s_sql2 + "   and rtrim(b.eymd) is null ";

        		Line_Sw    = "N";
        		if (( this.C_A.value == "1" ) || ( this.C_B.value == "1" ) || ( this.C_C.value == "1" ) || ( this.C_D.value == "1" ))
        		{
        			s_sql2    = s_sql2 + "    and  b.dung_cd in (  ";
        			if (  this.C_A.value == "1" )
        			{
        				s_sql2    = s_sql2 + " '01' ";
        				Line_Sw   = "Y";
        			}
        			if (( Line_Sw == "Y"  ) && ( this.C_B.value == "1"  ))
        			{
        				s_sql2     = s_sql2 + ", '02' ";
        				Line_Sw    = "Y";
        			}
        			else if (( Line_Sw == "N"  ) && ( this.C_B.value == "1"  ))
        			{
        				s_sql2     = s_sql2 + " '02' ";
        				Line_Sw    = "Y";
        			}
        			if (( Line_Sw == "Y"  ) && ( this.C_C.value == "1"  ))
        			{
        				s_sql2     = s_sql2 + ", '03' ";
        				Line_Sw    = "Y";
        			}
        			else if (( Line_Sw == "N"  ) && ( this.C_C.value == "1"  ))
        			{
        				s_sql2     = s_sql2 + " '03' ";
        				Line_Sw    = "Y";
        			}
        			if (( Line_Sw == "Y"  ) && ( this.C_D.value == "1"  ))
        			{
        				s_sql2     = s_sql2 + ", '04' ";
        				Line_Sw     = "Y";
        			}
        			else if (( Line_Sw == "N"  ) && ( this.C_D.value == "1"  ))
        			{
        				s_sql2     = s_sql2 + " '04' ";
        				Line_Sw     = "Y";
        			}
        			s_sql2    = s_sql2 + "    )  ";
        		}

        		if ( all_i == 1 )   s_sql2    = s_sql2 + "   and  c2.dcd  in ( " + S_CUSTGB +" ) ";
        		else if ( all_i == 2 )
        		{
        			s_sql2    = s_sql2 + "   and ( c2.dcd  in ( " + S_CUSTGB +" ) ";
        			s_sql2    = s_sql2 + "   or  c2.jcd  in ( " + S_CUSTCD +" )  ) ";
        		}
        		else if ( all_i == 3 )
        		{
        			s_sql2    = s_sql2 + "   and ( c2.dcd  in ( " + S_CUSTGB +" ) ";
        			s_sql2    = s_sql2 + "   or  b.cgb1  in ( " + E_CUSTGB +" )  ) ";
        		}
        		else if ( all_i == 4 )
        		{
        			s_sql2    = s_sql2 + "   and ( c2.dcd  in ( " + S_CUSTGB +" ) ";
        			s_sql2    = s_sql2 + "   or    c2.jcd  in ( " + S_CUSTCD +" ) ";
        			s_sql2    = s_sql2 + "   or  b.cgb1  in ( " + E_CUSTGB +" )  ) ";
        		}
        		else if ( all_i == 5 )
        		{
        			s_sql2    = s_sql2 + "   and  c2.jcd  in ( " + S_CUSTCD +" ) ";
        		}
        		else if ( all_i == 6 )
        		{
        			s_sql2    = s_sql2 + "   and ( c2.jcd  in ( " + S_CUSTCD +" ) ";
        			s_sql2    = s_sql2 + "   or  b.cgb1  in ( " + E_CUSTGB +" )  ) ";
        		}
        		else if ( all_i == 7 )
        		{
        			s_sql2    = s_sql2 + "   and b.cgb1  in ( " + E_CUSTGB +" )  ";
        		}
        		//======s_sql3
        		if ( this.E_gubn.value   == "0" )
                {
        			s_sql3     =  s_sql3 + "  and  d.meip_c = '0'  ";
        		}
        		else if ( this.E_gubn.value   == "1" )
                {
        			s_sql3     =  s_sql3 + " and   d.meip_c = '1'  ";
        		}
        		else if ( this.E_gubn.value   == "2" )
                {
        			s_sql3     =  s_sql3 + " and   d.meip_c = '2'  ";
        		}
        		if ( Find1_sw == "Y" )
        		{
        			s_sql3    = s_sql3 + "    and  d.bgbr_cd in ( " + bgbr +" ) ";
        		}

        		Line_sw    =  "N";
        		if (( this.C_hak.value == "1" ) || ( this.C_hak1.value == "1" ) || ( this.C_hak2.value == "1" ))
        		{
        			s_sql3    = s_sql3 + "    and  d.book_hcode in (  ";
        			if ( this.C_hak.value == "1" )
        			{
        				Hak_g     = "학년용";
        				s_sql3    = s_sql3 + " '00' ";
        				Line_sw  = "Y";
        			}
        			if (( Line_sw == "Y"  ) && ( this.C_hak1.value == "1"  ))
        			{
        				Hak_g     = Hak_g + "/1학기";
        				s_sql3    = s_sql3 + ", '01' ";
        				Line_sw   = "Y";
        			}
        			else if (( Line_sw == "N"  ) && ( this.C_hak1.value == "1"  ))
        			{
        				Hak_g     = "1학기";
        				s_sql3    = s_sql3 + " '01' ";
        				Line_sw   = "Y";
        			}
        			if (( Line_sw == "Y"  ) && ( this.C_hak2.value == "1"  ))
        			{
        				Hak_g     = Hak_g + "/2학기";
        				s_sql3    = s_sql3 + ", '02' ";
        				Line_sw   = "Y";
        			}
        			else if (( Line_sw == "N"  ) && ( this.C_hak2.value == "1"  ))
        			{
        				Hak_g     = "2학기";
        				s_sql3    = s_sql3 + " '02' ";
        				Line_sw   = "Y";
        			}
        			s_sql3      = s_sql3 + "    )  ";
        		}
        		else
        		{
                    Hak_g     = "전체";
        		}

        		if ( Find3_sw == "Y" )
        		{
        			s_sql3    = s_sql3 + "   and d.sgrp_code  in ( " + bookcode +" ) ";
        		}
        		if ( Find7_sw == "Y" )
        		{
        			s_sql3    = s_sql3 + "   and substr(d.sgrp_code,1,2) in ( " + r_sel +" ) ";
        		}
        		if ( Find6_sw == "Y" )   s_sql3    = s_sql3 + "   and d.panh_cd  in ( " + panh +" ) ";
        		if ( Find8_sw == "Y" )   s_sql3    = s_sql3 + "   and d.book_jgb  in ( " + sel_dsjgb +" ) ";

        		var rdopt  = "/ragentpath ["+ gv_urlRdDataServer +"]" + " /rp ["+p_yh+"]"+ // 1
        		"["+this.ed_sdate.value+"]"+ //2
        		"["+this.ed_edate.value+"]"+  //3
        		"["+pSbookcode+"]"+ // 4
        		"["+pEbookcode+"]"+ // 5
        		"["+s_cust+"]"+ // 6
        		"["+e_cust+"]"+ // 7
        		"["+bgbrnm+"]"+ // 8
        		"["+Hak_g+"]"+ // 9
        		"["+s_sql1+"]"+ // 10
        		"["+s_sql2+"]"+ // 11
        		"["+s_sql3+"]"; // 12

        	}
        	else if ((this.print_select.value == 14))
        	{
        		s_sql1     = "    where  ( a.gubn || a.code ) >= '" + s_cust +"'";
        		s_sql1     = s_sql1 + "    and  ( a.gubn || a.code ) <= '" + e_cust +"'";
        		if ( Find5_sw == "Y" )
        		{
        			s_sql1    = s_sql1 + "   and ( a.gubn || a.code )  in ( " + subcust +" ) ";
        		}
        		s_sql1     = s_sql1 + "    and  '" + this.ed_eyy.value +"' = b.yy(+) ";
        		//======s_sql2
        		s_sql2     = s_sql2 + "    where a.bymd >= '" + this.ed_sdate.value +"'";
        		s_sql2     = s_sql2 + "    and   a.bymd <= '" + this.ed_edate.value +"'";
        		s_sql2     = s_sql2 + "    and  ( a.cust_gb || a.CUST_CD ) >= '" + s_cust +"'";
        		s_sql2     = s_sql2 + "    and  ( a.cust_gb || a.CUST_CD ) <= '" + e_cust +"'";
        		if ( Find5_sw == "Y" )
        		{
        			s_sql2    = s_sql2 + "   and ( A.cust_gb || A.CUST_CD )  in ( " + subcust +" ) ";
        		}
        		s_sql2     = s_sql2 + "    and  a.BOOK_CD >=  '" + this.ed_sbook.value +"'";
        		s_sql2     = s_sql2 + "    AND  a.BOOK_CD <=  '" + this.ed_ebook.value +"'";
        		s_sql2     = s_sql2 + "    AND  a.Byy >=  '" + this.ed_eyy.value +"'";
        		s_sql2     = s_sql2 + "    AND  a.Byy <=  '" + this.ed_eyy.value +"'";
        		if ( Find4_sw == "Y" )
        		{
        			s_sql2    = s_sql2 + "   and  a.BOOK_CD  in ( " + bookcode +" ) ";
        		}
        		if ( this.E_gubn.value   == "0" )
                {
        			s_sql2     =  s_sql2 + "  and  b.meip_c = '0'  ";
        		}
        		else if ( this.E_gubn.value   == "1" )
                {
        			s_sql2     =  s_sql2 + " and   b.meip_c = '1'  ";
        		}
        		else if ( this.E_gubn.value   == "2" )
                {
        			s_sql2     =  s_sql2 + " and   b.meip_c = '2'  ";
        		}
        		if ( Find1_sw == "Y" )
        		{
        			s_sql2    = s_sql2 + "    and  b.bgbr_cd in ( " + bgbr +" ) ";
        		}

        		Line_sw    =  "N";
        		if (( this.C_hak.value == "1" ) || ( this.C_hak1.value == "1" ) || ( this.C_hak2.value == "1" ))
        		{
        			s_sql2    = s_sql2 + "    and  b.book_hcode in (  ";
        			if ( this.C_hak.value == "1" )
        			{
        				Hak_g     = "학년용";
        				s_sql2    = s_sql2 + " '00' ";
        				Line_sw  = "Y";
        			}
        			if (( Line_sw == "Y"  ) && ( this.C_hak1.value == "1"  ))
        			{
        				Hak_g     = Hak_g + "/1학기";
        				s_sql2    = s_sql2 + ", '01' ";
        				Line_sw   = "Y";
        			}
        			else if (( Line_sw == "N"  ) && ( this.C_hak1.value == "1"  ))
        			{
        				Hak_g     = "1학기";
        				s_sql2    = s_sql2 + " '01' ";
        				Line_sw   = "Y";
        			}
        			if (( Line_sw == "Y"  ) && ( this.C_hak2.value == "1"  ))
        			{
        				Hak_g     = Hak_g + "/2학기";
        				s_sql2    = s_sql2 + ", '02' ";
        				Line_sw   = "Y";
        			}
        			else if (( Line_sw == "N"  ) && ( this.C_hak2.value == "1"  ))
        			{
        				Hak_g     = "2학기";
        				s_sql2    = s_sql2 + " '02' ";
        				Line_sw   = "Y";
        			}
        			s_sql2      = s_sql2 + "    )  ";
        		}
        		else
        		{
                    Hak_g     = "전체";
        		}

        		if ( Find3_sw == "Y" )
        		{
        			s_sql2    = s_sql2 + "   and b.sgrp_code  in ( " + bookcode +" ) ";
        		}
        		if ( Find7_sw == "Y" )
        		{
        			s_sql2    = s_sql2 + "   and substr(b.sgrp_code,1,2) in ( " + r_sel +" ) ";
        		}
        		if ( Find6_sw == "Y" )   s_sql2    = s_sql2 + "   and b.panh_cd  in ( " + panh +" ) ";
        		if ( Find8_sw == "Y" )   s_sql2    = s_sql2 + "   and b.book_jgb  in ( " + sel_dsjgb +" ) ";
        		//======s_sql3
        		s_sql3     = "    where  ( cust_gb || cust_cd ) >= '" + s_cust +"'";
        		s_sql3     = s_sql3 + "    and  ( cust_gb || cust_cd ) <= '" + e_cust +"'";
        		if ( Find5_sw == "Y" )
        		{
        			s_sql3    = s_sql3 + "   and ( cust_gb || cust_cd )  in ( " + subcust +" ) ";
        		}
        		s_sql3     = s_sql3 + "    and  BOOK_CD >=  '" + this.ed_sbook.value +"'";
        		s_sql3     = s_sql3 + "    AND  BOOK_CD <=  '" + this.ed_ebook.value +"'";
        		s_sql3     = s_sql3 + "    AND  yy >=  '" + this.ed_eyy.value +"'";
        		s_sql3     = s_sql3 + "    AND  yy <=  '" + this.ed_eyy.value +"'";
        		//======s_sql4
        		s_sql4     = "    where  ( cust_gb || cust_cd ) >= '" + s_cust +"'";
        		s_sql4     = s_sql4 + "    and  ( cust_gb || cust_cd ) <= '" + e_cust +"'";
        		if ( Find5_sw == "Y" )
        		{
        			s_sql4    = s_sql4 + "   and ( cust_gb || cust_cd )  in ( " + subcust +" ) ";
        		}
        		s_sql4     = s_sql4 + "    and  yy = '" + this.ed_eyy.value +"'";
        		//======s_sql5
        		s_sql5     = s_sql5 + "    and  a.code >=  '" + this.ed_sbook.value +"'";
        		s_sql5     = s_sql5 + "    AND  a.code <=  '" + this.ed_ebook.value +"'";
        		s_sql5     = s_sql5 + "    AND  a.yy >=  '" + this.ed_eyy.value +"'";
        		s_sql5     = s_sql5 + "    AND  a.yy <=  '" + this.ed_eyy.value +"'";

        		var rdopt  = "/ragentpath ["+ gv_urlRdDataServer +"]" + " /rp ["+p_yh+"]"+ // 1
        		"["+this.ed_sdate.value+"]"+ //2
        		"["+this.ed_edate.value+"]"+  //3
        		"["+pSbookcode+"]"+ // 4
        		"["+pEbookcode+"]"+ // 5
        		"["+s_cust+"]"+ // 6
        		"["+e_cust+"]"+ // 7
        		"["+bgbrnm+"]"+ // 8
        		"["+Hak_g+"]"+ // 9
        		"["+s_sql1+"]"+ // 10
        		"["+s_sql2+"]"+ // 11
        		"["+s_sql3+"]"+ // 12
        		"["+s_sql4+"]"+ // 13
        		"["+s_sql5+"]"; // 14
        	}

        	/* 미리 보기 OR 출력 버튼이벤트 시작 */
        	if(event_id == "btn_printview" ) // 미리보기 일때
        	{
        		switch(this.print_select.value)
        		{
        			case '1' : // 일자별출반품현황
        					if ( this.C_isbn.value == false )
        					{
        						this.Div00.set_url("sd::SD1090F_GRID1.xfdl");

        						var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        									 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        									 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        									 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        									 "s_sql5="+nexacro.wrapQuote(s_sql5);
        						var outds = "ds_1=ds_1";
        						var inds = "ds_1=ds_1";
        						trace(strArg);

        						this.gfn_TransactionP("ds1_select","JSP/sd/SD1090F_DS1_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					}
        					else if ( this.C_isbn.value == true )
        					{
        						this.Div00.set_url("sd::SD1090F_GRID1_2.xfdl");

        						var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        									 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        									 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        									 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        									 "s_sql5="+nexacro.wrapQuote(s_sql5);
        						var outds = "ds_1_2=ds_1_2";
        						var inds = "ds_1_2=ds_1_2";
        						trace(strArg);

        						this.gfn_TransactionP("ds1_2_select","JSP/sd/SD1090F_DS1_2_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					}
        					break;
        			case '2' : //거래처별출반품현황
        					this.Div00.set_url("sd::SD1090F_GRID2.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_2=ds_2";
        					var inds = "ds_2=ds_2";
        					trace(strArg);

        					this.gfn_TransactionP("ds2_select","JSP/sd/SD1090F_DS2_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '3' : // 거래처별출반품집계(도서
        					this.Div00.set_url("sd::SD1090F_GRID3.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_3=ds_3";
        					var inds = "ds_3=ds_3";
        					trace(strArg);

        					this.gfn_TransactionP("ds3_select","JSP/sd/SD1090F_DS3_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '4' : // 거래처별출반품집계(전체
        					this.Div00.set_url("sd::SD1090F_GRID4.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_4=ds_4";
        					var inds = "ds_4=ds_4";
        					trace(strArg);

        					this.gfn_TransactionP("ds4_select","JSP/sd/SD1090F_DS4_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '5' : // 도서별출반품매출순위
        					this.Div00.set_url("sd::SD1090F_GRID5.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_5=ds_5";
        					var inds = "ds_5=ds_5";
        					trace(strArg);

        					this.gfn_TransactionP("ds5_select","JSP/sd/SD1090F_DS5_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '6' : // 도서별출반품현황
        					this.Div00.set_url("sd::SD1090F_GRID6.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_6=ds_6";
        					var inds = "ds_6=ds_6";
        					trace(strArg);

        					this.gfn_TransactionP("ds6_select","JSP/sd/SD1090F_DS6_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '7' : // 도서별출반품집계(업체
        					this.Div00.set_url("sd::SD1090F_GRID7.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_7=ds_7";
        					var inds = "ds_7=ds_7";
        					trace(strArg);

        					this.gfn_TransactionP("ds7_select","JSP/sd/SD1090F_DS7_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '8' : // 도서별출반품집계(전체
        					this.Div00.set_url("sd::SD1090F_GRID8.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_8=ds_8";
        					var inds = "ds_8=ds_8";
        					trace(strArg);

        					this.gfn_TransactionP("ds8_select","JSP/sd/SD1090F_DS8_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '9' : // 속성별출반품집계(업체
        					this.Div00.set_url("sd::SD1090F_GRID9.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_9=ds_9";
        					var inds = "ds_9=ds_9";
        					trace(strArg);

        					this.gfn_TransactionP("ds9_select","JSP/sd/SD1090F_DS9_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '10' : // 속성별출반품집계(도서
        					if( this.cb_pChk.value == false )
        					{
        						this.Div00.set_url("sd::SD1090F_GRID10.xfdl");

        						var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        									 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        									 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        									 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        									 "s_sql5="+nexacro.wrapQuote(s_sql5);
        						var outds = "ds_10=ds_10";
        						var inds = "ds_10=ds_10";
        						trace(strArg);

        						this.gfn_TransactionP("ds10_select","JSP/sd/SD1090F_DS10_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					}
        					else if ( this.cb_pChk.value == true )
        					{
        						this.Div00.set_url("sd::SD1090F_GRID10_1.xfdl");

        						var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        									 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        									 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        									 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        									 "s_sql5="+nexacro.wrapQuote(s_sql5);
        						var outds = "ds_10_1=ds_10_1";
        						var inds = "ds_10_1=ds_10_1";
        						trace(strArg);

        						this.gfn_TransactionP("ds10_1_select","JSP/sd/SD1090F_DS10_1_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					}
        					break;
        			case '11' : // 속성별출반품집계
        					this.Div00.set_url("sd::SD1090F_GRID11.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_11=ds_11";
        					var inds = "ds_11=ds_11";
        					trace(strArg);

        					this.gfn_TransactionP("ds11_select","JSP/sd/SD1090F_DS11_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '12' : // 연결업체별출반품집계
        					this.Div00.set_url("sd::SD1090F_GRID12.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_12=ds_12";
        					var inds = "ds_12=ds_12";
        					trace(strArg);

        					this.gfn_TransactionP("ds12_select","JSP/sd/SD1090F_DS12_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;

        			case '13' : // 연결업체별도서출반품집계
        					this.Div00.set_url("sd::SD1090F_GRID13.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_13=ds_13";
        					var inds = "ds_13=ds_13";
        					trace(strArg);

        					this.gfn_TransactionP("ds13_select","JSP/sd/SD1090F_DS13_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;

        			case '14' : // 거래처별출고율적용
        					this.Div00.set_url("sd::SD1090F_GRID14.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_14=ds_14";
        					var inds = "ds_14=ds_14";
        					trace(strArg);

        					this.gfn_TransactionP("ds14_select","JSP/sd/SD1090F_DS14_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;

        			case '15' : // 거래처별출반품현황(분리
        					this.Div00.set_url("sd::SD1090F_GRID15.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_15=ds_15";
        					var inds = "ds_15=ds_15";
        					trace(strArg);

        					this.gfn_TransactionP("ds15_select","JSP/sd/SD1090F_DS15_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;

        			case '16' : // 속성별출반품집계(나열
        					this.Div00.set_url("sd::SD1090F_GRID16.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_16=ds_16";
        					var inds = "ds_16=ds_16";
        					trace(strArg);

        					this.gfn_TransactionP("ds16_select","JSP/sd/SD1090F_DS16_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;

        			case '17' : // 도서별출반품집계(나열
        					if(this.C_isbn.value == false )
        					{
        						this.Div00.set_url("sd::SD1090F_GRID17.xfdl");

        						var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        									 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        									 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        									 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        									 "s_sql5="+nexacro.wrapQuote(s_sql5);
        						var outds = "ds_17=ds_17";
        						var inds = "ds_17=ds_17";
        						trace(strArg);

        						this.gfn_TransactionP("ds17_select","JSP/sd/SD1090F_DS17_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					}
        					else if(this.C_isbn.value == true )
        					{
        						this.Div00.set_url("sd::SD1090F_GRID17_1.xfdl");

        						var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        									 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        									 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        									 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        									 "s_sql5="+nexacro.wrapQuote(s_sql5);
        						var outds = "ds_17_1=ds_17_1";
        						var inds = "ds_17_1=ds_17_1";
        						trace(strArg);

        						this.gfn_TransactionP("ds17_1_select","JSP/sd/SD1090F_DS17_1_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					}
        					break;

        			case '18' : // 도서별출반품집계(금액나열
        					this.Div00.set_url("sd::SD1090F_GRID18.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_18=ds_18";
        					var inds = "ds_18=ds_18";
        					trace(strArg);

        					this.gfn_TransactionP("ds18_select","JSP/sd/SD1090F_DS18_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;

        			case '19' : // 속성별출반품집계(금액나열
        					this.Div00.set_url("sd::SD1090F_GRID19.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_19=ds_19";
        					var inds = "ds_19=ds_19";
        					trace(strArg);

        					this.gfn_TransactionP("ds19_select","JSP/sd/SD1090F_DS19_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;

        			case '20' : // 업체별출반품집계(금액나열
        					this.Div00.set_url("sd::SD1090F_GRID20.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_20=ds_20";
        					var inds = "ds_20=ds_20";
        					trace(strArg);

        					this.gfn_TransactionP("ds20_select","JSP/sd/SD1090F_DS20_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;

        			case '21' : // 속성/거래처채널별출반품집계
        					this.Div00.set_url("sd::SD1090F_GRID21.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_21=ds_21";
        					var inds = "ds_21=ds_21";
        					trace(strArg);

        					this.gfn_TransactionP("ds21_select","JSP/sd/SD1090F_DS21_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;

        			case '22' : // 업체별출반품현황(규제대상
        					this.Div00.set_url("sd::SD1090F_GRID22.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3)+
        								 "s_sql4="+nexacro.wrapQuote(s_sql4)+
        								 "s_sql5="+nexacro.wrapQuote(s_sql5);
        					var outds = "ds_22=ds_22";
        					var inds = "ds_22=ds_22";
        					trace(strArg);

        					this.gfn_TransactionP("ds22_select","JSP/sd/SD1090F_DS22_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;

        		}
        	}
        	else if ( event_id  == "btn_print" ) // 출력일때
        	{
        		this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        	}
        }

        this.btn_attribute_search_onclick = function(obj,e)
        {
        	this.search_bookcode();
        };


        this.search_bookcode = function()
        {
        	if( this.ed_subbookcode.value == undefined || this.ed_subbookcode.value.trim() == "" )
        		this.ed_subbookcode.set_value("");

        	var strArg;
        	var inds 	= "dsSubbook=dsSubbook";
        	var outds 	= "dsSubbook=dsSubbook";
        	var subbookcode = this.ed_subbookcode.value;
        	var bookname = this.ed_bookname.value;
        	var chk      = this.ck_select.value;
        	var pyear    = this.ed_year.value;
        	var c_use    = this.ck_use.value;

        	if (pyear == "") pyear = "NULL";
        	if (subbookcode == "          ") subbookcode = "NULL";

        	if (this.ck_select.value == true)
        	{
        		this.grd_attribute.setCellProperty("head",1,"text","도서코드");
        		this.grd_attribute.setCellProperty("head",2,"text","년판");
        	}
        	else
        	{
        		this.grd_attribute.setCellProperty("head",1,"text","속성코드");
        		this.grd_attribute.setCellProperty("head",2,"text","출판");
        	}
        	strArg = "values1="+nexacro.wrapQuote(subbookcode)
        	                   +"values2="+nexacro.wrapQuote(bookname)
        					   +"values3="+nexacro.wrapQuote(chk)
        					   +"values4="+nexacro.wrapQuote(pyear)
        					   +"values5="+nexacro.wrapQuote(c_use);

        	trace(strArg);
        	this.gfn_TransactionP("subbook_select","JSP/sd/select_subbookcode.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        	//Transaction("select_subbook", "select_ds::select_subbookcode.jsp", inds, outds, strArg, "fnCallback");
        }


        this.btn_scust_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupCustCode_scode", objParam, "common::Cust_2.xfdl", "popupCallBack", this, 10, 58, 590, 550);
        };

        this.btn_ecust_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupCustCode_ecode", objParam, "common::Cust_2.xfdl", "popupCallBack", this, 10, 58, 590, 550);
        };


        this.popupCallBack = function(sFormId, sArg)
        {
        	if(!this.lfn_sd_fnisNull(sArg)) // 리턴값이 널이 아니면 수행
        	{
        		if(sFormId=="popupBookCode_sbook") // 도서시작 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_sbook.set_value(arry[0]);
        		}
        		else if(sFormId=="popupBookCode_ebook") // 도서 끝 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_ebook.set_value(arry[0]);
        		}
        		else if(sFormId=="popupCustCode_scode") // 거래처 시작 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_sgb.set_value(arry[0]);
        			this.ed_scode.set_value(arry[1]);
        		}
        		else if(sFormId=="popupCustCode_ecode") // 거래처 끝 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_egb.set_value(arry[0]);
        			this.ed_ecode.set_value(arry[1]);
        		}
        		else if(sFormId=="popupBookCode_user") // 영업자 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_ju.set_value(arry[0]);
        		}
        	}
        };

        this.btn_sbookcode_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_sbook", objParam, "common::BookCode.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        this.btn_ebookcode_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_ebook", objParam, "common::BookCode.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        this.btn_s_saleuser_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_user", objParam, "sd::frmSaleUser.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };


        this.SD1090F_onload = function(obj,e)
        {
        	if(system.navigatorname.indexOf("nexacro")==-1)
        	{
        		// 현재 hash 에 해당하는 data 를 얻어온다.
        		var hash = MyHistory.getLocationHash();
        		//var data = MyHistory.getData(hash);
        		//trace(hash);
        	}
        	//디폴드 div 셋팅
        	//this.Div00.set_url("sd::SD1090F_GRID1.xfdl")

        	//디폴트 오늘날자.
        	var today = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(today, "yyyyMMdd");
        	//nexacro.getApplication().Gv_BookYear = this.lfn_sd_getBookYear();

        	this.ed_sdate.set_value(strtoDay);
        	this.ed_edate.set_value(strtoDay);
        	this.cmb_select.set_index(3);
        	this.E_gubn.set_value("3");

        	this.ed_sgb.set_value("20");
        	this.ed_scode.set_value("0000");
        	this.ed_egb.set_value("39");
        	this.ed_ecode.set_value("9999");
        	this.ed_sbook.set_value("0000000000");
        	this.ed_ebook.set_value("9999999999");
        	this.ed_syy.set_value(this.lfn_sd_getBookYear("start"));
        	this.ed_eyy.set_value(this.lfn_sd_getBookYear("year"));
        	this.ck_use.set_value(true);
        	this.ed_year.set_value(this.lfn_sd_getBookYear("year"));

        	// 거래처구분 가져오기
        	var strArg = "";
        	var inds 	   = "ds_ccode1=ds_ccode1";
        	var outds 	   = "ds_ccode1=ds_ccode1";

        	this.gfn_TransactionP("custgb_select","JSP/sd/sel_ccode1.jsp", inds, outds, strArg, "fnCallback", false, "P", false, this);

        	//도서구분 가져오기
        	strArg = "";
        	outds = "ds_bgbr=ds_bgbr";
        	inds = "ds_bgbr=ds_bgbr";

        	this.gfn_TransactionP("bgbr_select","JSP/sd/sel_bgbr.jsp", inds, outds, strArg, "fnCallback", false, "P", false, this);


        	strArg = "";
        	outds = "ds_panh=ds_panh";
        	inds = "ds_panh=ds_panh";

        	this.gfn_TransactionP("panh_select","JSP/sd/sel_panh.jsp", inds, outds, strArg, "fnCallback", false, "P", false, this);

        	strArg = "";
        	outds = "ds_mdcode=ds_mdcode";
        	inds = "ds_mdcode=ds_mdcode";

        	this.gfn_TransactionP("mdcode_select","JSP/sd/sel_mdcode.jsp", inds, outds, strArg, "fnCallback", false, "P", false, this);

        	this.ed_sdate.setFocus();
        };

        this.cmb_select_onitemchanged = function(obj,e)
        {
        	if( this.cmb_select.value == "0" )
        		this.E_gubn.set_value("0");
        	else if( this.cmb_select.value == "1" )
        		this.E_gubn.set_value("1");
        	else if( this.cmb_select.value == "2" )
        		this.E_gubn.set_value("2");
        	else if( this.cmb_select.value == "3" )
        		this.E_gubn.set_value("3");
        };

        this.btn_printview_onclick = function(obj,e)
        {
        	trace(obj.id);
        	this.sqlCreate(obj.id);
        };


        this.Gridcheck = function(strdsname)
        {
        	// 그리드 데이터 중에 체크된 데이터를 선별하여 리턴.
        	var strReturn="";
        	var loop = 0;
        	//trace("in Gridcheck" +this.dsIoyh.rowcount);

        	if (strdsname=="dsIoyh")
        	{
        		for (loop=0; loop < this.dsIoyh.rowcount; loop++)
        		{
        			if (this.dsIoyh.getColumn(loop,"chk")==1)
        			{
        			    Find1_sw  = "Y";
        				strReturn = strReturn +"'"+this.dsIoyh.getColumn(loop,"index")+"',";
        			}
        		}
        	}


        	if (strdsname=="dsBgbr")
        	{
        		trace("in dsBgbr ");
        		for (loop=0; loop< this.ds_bgbr.rowcount; loop++)
        		{
        			if ( this.ds_bgbr.getColumn(loop,"chk")==1 )
        			{
        				//trace(this.ds_bgbr.getColumn(loop,"chk") + "        loop: " + loop);
        			    Find2_sw  = "Y";
        			    bgbrnm    = bgbrnm + "'"+nexacro.trim(this.ds_bgbr.getColumn(loop,"name"))+"',";
        				strReturn = strReturn +"'"+this.ds_bgbr.getColumn(loop,"code")+"',";
        			}
        		}
        	}

        	if(strdsname=="dsCode")
        	{
        		for (loop=0; loop< this.ds_ccode1.rowcount; loop++)
        		{
        			if ( this.ds_ccode1.getColumn(loop,"chk")==1 )
        			{
        				//trace(this.ds_bgbr.getColumn(loop,"chk") + "        loop: " + loop);
        			    Find3_sw  = "Y";
        				strReturn = strReturn +"'"+this.ds_ccode1.getColumn(loop,"code")+"',";
        			}
        		}
        	}

        	if ((strdsname=="dsSubbook") && (this.ck_select.value==false))
        	{
        		//trace("in dsSubbook -> ck_select.value = false ");
        		for (loop=0; loop<this.dsSubbook.rowcount; loop++)
        		{
        			if (this.dsSubbook.getColumn(loop,"chk")==1)
        			{
        			    Find4_sw  = "Y";
        				strReturn = strReturn +"'"+this.dsSubbook.getColumn(loop,"code_key").substr(0,9)+ "',";
        			}
        		}
        	}

        	if ((strdsname=="dsSubbook") && (this.ck_select.value==true))
        	{
        		//trace("in dsSubbook -> ck_select.value = true ");
        		for (loop=0; loop<this.dsSubbook.rowcount; loop++)
        		{
        			if (this.dsSubbook.getColumn(loop,"chk")==1)
        			{
        			    Find5_sw  = "Y";
        				//strReturn = strReturn +"'"+this.left(this.dsSubbook.getColumn(loop,"code_key"),10)+ this.left(this.dsSubbook.getColumn(loop,"book_year"),4)+"',";
        				strReturn = strReturn +"'"+this.dsSubbook.getColumn(loop,"code_key").substr(0,10)+ this.dsSubbook.getColumn(loop,"book_year").substr(0,4) +"',";
        			}
        		}
        	}

        	if ((strdsname=="dsbook") && (this.ck_select.value==true))
        	{
        		//trace("in dsSubbook -> ck_select.value = true ");
        		for (loop=0; loop<this.dsSubbook.rowcount; loop++)
        		{
        			if (this.dsSubbook.getColumn(loop,"chk")==1)
        			{
        			    Find5_sw  = "Y";
        				//strReturn = strReturn +"'"+this.left(this.dsSubbook.getColumn(loop,"code_key"),10)+ this.left(this.dsSubbook.getColumn(loop,"book_year"),4)+"',";
        				strReturn = strReturn +"'"+this.dsSubbook.getColumn(loop,"code_key").substr(0,10)+ "',";
        			}
        		}
        	}
        	//마지막 쉼표 삭제.
        	return strReturn.substr(0,strReturn.length-1);
        };


        this.selectfile = function(num)
        {
        	if ( (num == 1) && (this.C_isbn.value == false)  ) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1090r.mrd"; // 일자별출반품현황
        	if ( (num == 1) && (this.C_isbn.value == true)  ) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1090i.mrd"; // 일자별출반품현황+isbn
        	else if (num == 2) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1093r.mrd"; // 거래처별출반품현황
        	else if (num == 3) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1092r.mrd"; // 거래처별출반품집계(도서
        	else if (num == 4) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1095r.mrd"; // 거래처별출반품집계(전체
        	else if (num == 5) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1099_1r.mrd"; // 도서별출반품매출순위
        	else if (num == 6) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1091r.mrd"; // 도서별출반품현황
        	else if (num == 7) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1098r.mrd"; // 도서별출반품집계(업체
        	else if (num == 8) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1094r.mrd"; // 도서별출반품집계(전체
        	else if (num == 9) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1099r.mrd"; // 속성별출반품집계(업체

        	if ( (num == 10) && (this.cb_pChk.value == false)  ) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1096r.mrd"; // 속성별출반품집계(도서
        	if ( (num == 10) && (this.cb_pChk.value == true)  ) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1096r_DIS.mrd"; // 속성별출반품집계(도서+

        	else if (num == 11) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1097r.mrd"; // 속성별출반품집계
        	else if (num == 12) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1092_1r.mrd"; // 연결업체별출반품집계
        	else if (num == 13) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1092_2r.mrd"; // 연결업체별도서출반품집계
        	else if (num == 14) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1090_2011r.mrd"; // 거래처별출고율적용
        	else if (num == 15) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1093_1r.mrd"; // 거래처별출반품현황(분리
        	else if (num == 16) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1097_1r.mrd"; // 속성별출반품집계(나열

        	if ( (num == 17) && (this.C_isbn.value == false)  ) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1094_1r.mrd"; // 도서별출반품집계(나열
        	if ( (num == 17) && (this.C_isbn.value == true)  ) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1094_3r.mrd"; // 도서별출반품집계(나열+isbn

        	else if (num == 18) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1094_2r.mrd"; // 도서별출반품집계(금액나열
        	else if (num == 19) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1097_2r.mrd"; // 속성별출반품집계(금액나열
        	else if (num == 20) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1095_1r.mrd"; //업체별출반품집계(금액나열
        	else if (num == 21) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1090_1r.mrd"; //속성/거래처채널별출반품집계
        	else if (num == 22) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1093r_2.mrd"; //업체별출반품현황(규제대상

        };

        this.btn_excel_onclick = function(obj,e)
        {
        	var filename;

        	this.exportObj = new ExcelExportObject();
        	if ( this.Div00.url == "sd::SD1090F_GRID1.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID1, "Sheet1!A1");
        		filename = "1"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID1_2.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID1_2, "Sheet1!A1");
        		filename = "1_2"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID2.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID2, "Sheet1!A1");
        		filename = "2"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID3.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID3, "Sheet1!A1");
        		filename = "3"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID4.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID4, "Sheet1!A1");
        		filename = "4"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID5.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID5, "Sheet1!A1");
        		filename = "5"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID6.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID6, "Sheet1!A1");
        		filename = "6"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID7.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID7, "Sheet1!A1");
        		filename = "7"; }
        	// 8 (선택도서별 출고집계) 사용 안함
        	else if ( this.Div00.url == "sd::SD1090F_GRID9.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID9, "Sheet1!A1");
        		filename = "9"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID10.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID10, "Sheet1!A1");
        		filename = "10"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID11.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID11, "Sheet1!A1");
        		filename = "11"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID12.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID12, "Sheet1!A1");
        		filename = "12"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID13.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID13, "Sheet1!A1");
        		filename = "13"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID14.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID14, "Sheet1!A1");
        		filename = "14"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID15.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID15, "Sheet1!A1");
        		filename = "16"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID16.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID16, "Sheet1!A1");
        		filename = "16"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID18.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID18, "Sheet1!A1");
        		filename = "17"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID19.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID19, "Sheet1!A1");
        		filename = "18"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID20.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID19, "Sheet1!A1");
        		filename = "18"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID21.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID19, "Sheet1!A1");
        		filename = "18"; }
        	else if ( this.Div00.url == "sd::SD1090F_GRID22.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1090F_GRID19, "Sheet1!A1");
        		filename = "18"; }

        	this.exportObj.set_exporturl(gv_urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();
        };

        this.grd_attribute_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk1 == 0)
        			Fv_HeadChk1 = 1;
        		else
        			Fv_HeadChk1 = 0;

        		this.grd_attribute.setCellProperty("head", 0, "text", Fv_HeadChk1);
        		for(var i = 0; i < this.dsSubbook.rowcount; i++)
        		{
        			this.dsSubbook.setColumn(i, "chk", Fv_HeadChk1);

        		}
        	}
        };


        this.grd_code_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk2 == 0)
        			Fv_HeadChk2 = 1;
        		else
        			Fv_HeadChk2 = 0;

        		this.grd_code.setCellProperty("head", 0, "text", Fv_HeadChk2);
        		for(var i = 0; i < this.ds_ccode1.rowcount; i++)
        		{
        			this.ds_ccode1.setColumn(i, "chk", Fv_HeadChk2);

        		}
        	}
        };

        this.gr_ioyh_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk3 == 0)
        			Fv_HeadChk3 = 1;
        		else
        			Fv_HeadChk3 = 0;

        		this.grd_ioyh.setCellProperty("head", 0, "text", Fv_HeadChk3);
        		for(var i = 0; i < this.ds_ccode1.rowcount; i++)
        		{
        			this.ds_ccode1.setColumn(i, "chk", Fv_HeadChk3);

        		}
        	}
        };

        this.grd_bgbr_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk4 == 0)
        			Fv_HeadChk4 = 1;
        		else
        			Fv_HeadChk4 = 0;

        		this.grd_bgbr.setCellProperty("head", 0, "text", Fv_HeadChk4);
        		for(var i = 0; i < this.ds_bgbr.rowcount; i++)
        		{
        			this.ds_bgbr.setColumn(i, "chk", Fv_HeadChk4);

        		}
        	}
        };


        this.fnCallback = function(svcId, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0)
        		this.alert(ErrorMsg);
        	else if ( svcId == "ds13_select" )
        	{
        	}
        };



        this.btn_search2_onclick = function(obj,e)
        {
        	var strArg;
        	var inds 	= "ds_cust=ds_cust";
        	var outds 	= "ds_cust=ds_cust";
        	var chkstop = "";

        	if (this.chk_custend.value == true) chkstop = "";
        	else chkstop = "null";

        	if( this.Edt_custcd.value == undefined || this.Edt_custcd.value.trim() == "" )
        		this.Edt_custcd.set_value("");

        	strArg = " values1="+nexacro.wrapQuote(this.Edt_custgb.value)+
        	         " values2="+nexacro.wrapQuote(this.Edt_custcd.value)+
        	         " values3="+nexacro.wrapQuote(this.Edt_custname.value)+
        	         " values4="+nexacro.wrapQuote(chkstop);

        	this.gfn_TransactionP("select_custcd","JSP/sd/select_custcode_name.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        };

        this.grid3_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk7 == 0)
        			Fv_HeadChk7 = 1;
        		else
        			Fv_HeadChk7 = 0;

        		this.grid3.setCellProperty("head", 0, "text", Fv_HeadChk7);
        		for(var i = 0; i < this.ds_mdcode.rowcount; i++)
        		{
        			this.ds_mdcode.setColumn(i, "chk", Fv_HeadChk7);

        		}
        	}
        };

        this.grid4_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk5 == 0)
        			Fv_HeadChk5 = 1;
        		else
        			Fv_HeadChk5 = 0;

        		this.grid4.setCellProperty("head", 0, "text", Fv_HeadChk5);
        		for(var i = 0; i < this.ds_bjgb.rowcount; i++)
        		{
        			this.ds_bjgb.setColumn(i, "chk", Fv_HeadChk5);

        		}
        	}
        };

        this.grid2_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk6 == 0)
        			Fv_HeadChk6 = 1;
        		else
        			Fv_HeadChk6 = 0;

        		this.grid2.setCellProperty("head", 0, "text", Fv_HeadChk6);
        		for(var i = 0; i < this.ds_panh.rowcount; i++)
        		{
        			this.ds_panh.setColumn(i, "chk", Fv_HeadChk6);

        		}
        	}
        };

        this.btn_saupgubn_onclick = function(obj,e)
        {
        	if (( All1_sw   == "N" ) && ( All2_sw  == "N" ) && ( All3_sw  == "N" ))
        	 {
              PY_GB   = "N";
             }

        	if (( All1_sw   == "Y" ) || ( All2_sw   == "Y" ) || ( All3_sw   == "Y" ))
        	 {
              PY_GB   = "Y";
          	  S_CUSTGB  = "";
        	  S_CUSTCD  = "";
        	  E_CUSTGB  = "";
              All1_sw   = "N";
              All2_sw   = "N";
              All3_sw   = "N";
             }

        	var objParam = {S_CUSTGB : S_CUSTGB,
        					S_CUSTCD : S_CUSTCD,
        					E_CUSTGB : E_CUSTGB,
        					PY_GB : PY_GB }; //popup 화면으로 전달할 값

        	this.lfn_showModal("popup_SD1090F", objParam, "sd::frmccode21.xfdl", "popupCallBack", this, 10, 58, 520, 550);
        };

        this.popupCallBack = function(sFormId, sArg)
        {
        	if(!this.lfn_sd_fnisNull(sArg)) // 리턴값이 널이 아니면 수행
        	{
        		if(sFormId=="popup_SD1090F") // 도서시작 코드
        		{
        			var arry = sArg.split(":");
        			S_CUSTGB = arry[0];
        			S_CUSTCD = arry[1];
        			E_CUSTGB = arry[2];

        			if ( S_CUSTGB != "" ) All1_sw   = "Y";
        			if ( S_CUSTCD != "" ) All2_sw   = "Y";
        			if ( E_CUSTGB != "" ) All3_sw   = "Y";

        			trace("S_CUSTGB = "+S_CUSTGB);
        			trace("S_CUSTCD = "+S_CUSTCD);
        			trace("E_CUSTGB = "+E_CUSTGB);

        		}
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD1090F_onload,this);
            this.Static00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_ioyh.addEventHandler("onheadclick",this.gr_ioyh_onheadclick,this);
            this.cmb_select.addEventHandler("onitemchanged",this.cmb_select_onitemchanged,this);
            this.btn_ebookcode.addEventHandler("onclick",this.btn_ebookcode_onclick,this);
            this.btn_attribute_search.addEventHandler("onclick",this.btn_attribute_search_onclick,this);
            this.btn_sbookcode.addEventHandler("onclick",this.btn_sbookcode_onclick,this);
            this.btn_scust.addEventHandler("onclick",this.btn_scust_onclick,this);
            this.btn_ecust.addEventHandler("onclick",this.btn_ecust_onclick,this);
            this.E_gubn.addEventHandler("onkeydown",this.E_gubn_onkeydown,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.grd_attribute.addEventHandler("onheadclick",this.grd_attribute_onheadclick,this);
            this.Static00_01_00_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_s_saleuser.addEventHandler("onclick",this.btn_s_saleuser_onclick,this);
            this.Static00_00_01_00_00_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_code.addEventHandler("onheadclick",this.grd_code_onheadclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Edt_custname.addEventHandler("onkeydown",this.ed_code_onkeydown,this);
            this.btn_search2.addEventHandler("onclick",this.btn_search2_onclick,this);
            this.grid4.addEventHandler("onheadclick",this.grid4_onheadclick,this);
            this.Static00_00_01_00_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_bgbr.addEventHandler("onheadclick",this.grd_bgbr_onheadclick,this);
            this.grid2.addEventHandler("onheadclick",this.grid2_onheadclick,this);
            this.Static00_01_00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_saupgubn.addEventHandler("onclick",this.btn_saupgubn_onclick,this);
            this.grid3.addEventHandler("onheadclick",this.grid3_onheadclick,this);
            this.btn_printview.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.Static00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("SD1090F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
