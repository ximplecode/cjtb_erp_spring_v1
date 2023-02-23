package kr.co.chunjae.erp.common.mapper;

import org.mybatis.spring.annotation.MapperScan;

import java.util.List;
import java.util.Map;

@MapperScan("FrameTopMapper")
public interface FrameTopMapper {
    List<Map<String, Object>> FrameTopSearch();
}