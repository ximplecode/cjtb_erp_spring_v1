package kr.co.chunjae.erp.test.controller;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import kr.co.chunjae.erp.test.service.LeftMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Map;

@Controller
@JsonAutoDetect
public class TestController {

    private final LeftMenuService leftMenuService;

    @Autowired
    public TestController(LeftMenuService leftMenuService) {  this.leftMenuService = leftMenuService; }

    @RequestMapping(value = "/LeftMenuList.do")
    public NexacroResult LeftMenuList(HttpPlatformRequest response){
        List<Map<String,Object>> dataList = leftMenuService.getLeftMenuList();
        NexacroResult result = new NexacroResult();
        result.addDataSet("ds_Multi", dataList);
        return result;
    }
}