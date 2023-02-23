package kr.co.chunjae.erp.test.mapper;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@MapperScan("LeftMenuMapper")
public interface LeftMenuMapper {

    List<Map<String, Object>> getLeftMenuList();
}
