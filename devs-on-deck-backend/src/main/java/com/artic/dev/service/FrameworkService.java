package com.artic.dev.service;

import com.artic.dev.dto.FrameworkResponseDto;

import java.util.List;

public interface FrameworkService {

    List<FrameworkResponseDto> findAllByLanguages(List<Long> languajeIdList);

}
