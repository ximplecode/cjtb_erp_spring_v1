package kr.co.chunjae.erp.test.service;

import kr.co.chunjae.erp.test.mapper.LeftMenuMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service("LeftMenuService")
public class LeftMenuService {

    @Resource
    LeftMenuMapper mapper;

    public List<Map<String, Object>> getLeftMenuList() {
        return mapper.getLeftMenuList();
    }
}
