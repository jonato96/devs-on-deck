package com.artic.dev.service;

import com.artic.dev.dto.FrameworkResponseDto;
import com.artic.dev.dto.LanguageResponseDto;

import java.util.List;

public interface LanguagesService {
    List<LanguageResponseDto> findAll();
    List<FrameworkResponseDto> findFrameworkBy(Long id);
}
