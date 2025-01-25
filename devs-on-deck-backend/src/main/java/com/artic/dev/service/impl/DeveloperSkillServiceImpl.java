package com.artic.dev.service.impl;

import com.artic.dev.dto.SkillRequestDto;
import com.artic.dev.repository.DeveloperLanguageFrameworkRepository;
import com.artic.dev.repository.FrameworkRepository;
import com.artic.dev.repository.LanguagesRepository;
import com.artic.dev.service.DeveloperSkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DeveloperSkillServiceImpl implements DeveloperSkillService {

    private final DeveloperLanguageFrameworkRepository repository;
    private final LanguagesRepository languagesRepository;
    private final FrameworkRepository frameworkRepository;

    @Override
    public void createSkill(SkillRequestDto request) {

    }
}
