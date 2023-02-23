package kr.co.chunjae.erp.common.service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import kr.co.chunjae.erp.common.mapper.FrameTopMapper;
import kr.co.chunjae.erp.test.service.LeftMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class FrameTopService {
    @Resource
    FrameTopMapper mapper;

    public List<Map<String, Object>> FrameTopSearch() {
        return mapper.FrameTopSearch();
    }
}
