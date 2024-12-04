package com.artic.dev.service.impl;

import com.artic.dev.dto.FrameworkResponseDto;
import com.artic.dev.dto.LanguageResponseDto;
import com.artic.dev.entity.Framework;
import com.artic.dev.entity.Language;
import com.artic.dev.repository.FrameworkRepository;
import com.artic.dev.repository.LanguagesRepository;
import com.artic.dev.service.LanguagesService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LanguageServiceImpl implements LanguagesService {

    private final LanguagesRepository repository;
    private final FrameworkRepository frameworkRepository;
    @Override
    public List<LanguageResponseDto> findAll() {
        List<Language> languages = repository.findAll();
        return languages.stream().map( language -> LanguageResponseDto.builder()
                .id(language.getId())
                .name(language.getName())
                .logo(language.getLogo())
                .build())
                .toList();
    }

    @Override
    public List<FrameworkResponseDto> findFrameworkBy(Long id) {
        List<Framework> frameworks = frameworkRepository.findByLanguageId(id);
        return frameworks.stream().map( framework -> FrameworkResponseDto.builder()
                        .id(framework.getId())
                        .name(framework.getName())
                        .logo(framework.getLogo())
                        .build())
                .toList();
    }


}
