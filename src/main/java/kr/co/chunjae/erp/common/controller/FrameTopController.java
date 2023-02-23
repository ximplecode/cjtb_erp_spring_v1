package kr.co.chunjae.erp.common.controller;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import kr.co.chunjae.erp.common.service.FrameTopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Map;

@Controller
public class FrameTopController {

    @Autowired
    FrameTopService frameTopService;

    @RequestMapping(value = "/FrameTopSearch.do")
    public NexacroResult LeftMenuList(HttpPlatformRequest response){
        List<Map<String,Object>> dataList = frameTopService.FrameTopSearch();
        NexacroResult result = new NexacroResult();
        result.addDataSet("ds_Multi", dataList);
        return result;
    }
}
