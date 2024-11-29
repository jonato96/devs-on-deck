package com.artic.dev.service.impl;

import com.artic.dev.dto.LanguageResponseDto;
import com.artic.dev.entity.Language;
import com.artic.dev.repository.LanguagesRepository;
import com.artic.dev.service.LanguagesService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LanguageServiceImpl implements LanguagesService {

    private final LanguagesRepository repository;
    @Override
    public List<LanguageResponseDto> findAll() {
        List<Language> languages = repository.findAll();
        return languages.stream().map( language -> LanguageResponseDto.builder()
                .id(language.getId())
                .name(language.getName())
                .build())
                .toList();
    }
}
