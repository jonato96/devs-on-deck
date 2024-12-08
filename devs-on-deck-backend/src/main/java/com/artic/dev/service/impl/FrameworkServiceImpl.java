package com.artic.dev.service.impl;

import com.artic.dev.dto.FrameworkResponseDto;
import com.artic.dev.entity.Framework;
import com.artic.dev.repository.FrameworkRepository;
import com.artic.dev.service.FrameworkService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FrameworkServiceImpl implements FrameworkService {

    private final FrameworkRepository repository;
    @Override
    public List<FrameworkResponseDto> findAllByLanguages(List<Long> languageIdList) {
        List<Framework> frameworks = repository.findByLanguageIdList(languageIdList);
        return frameworks.stream().map( framework -> FrameworkResponseDto.builder()
                        .id(framework.getId())
                        .name(framework.getName())
                        .logo(framework.getLogo())
                        .build())
                .toList();
    }
}
