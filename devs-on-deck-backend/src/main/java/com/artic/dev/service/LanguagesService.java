package com.artic.dev.service;

import com.artic.dev.dto.LanguageResponseDto;

import java.util.List;

public interface LanguagesService {
    List<LanguageResponseDto> findAll();
}
