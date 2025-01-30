package com.artic.dev.service.impl;

import com.artic.dev.dto.SkillRequestDto;
import com.artic.dev.entity.Developer;
import com.artic.dev.exception.DevException;
import com.artic.dev.repository.DeveloperLanguageFrameworkRepository;
import com.artic.dev.repository.DeveloperRepository;
import com.artic.dev.repository.FrameworkRepository;
import com.artic.dev.repository.LanguagesRepository;
import com.artic.dev.service.DeveloperSkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DeveloperSkillServiceImpl implements DeveloperSkillService {

    private final DeveloperRepository developerRepository;
    private final LanguagesRepository languagesRepository;
    private final FrameworkRepository frameworkRepository;
    private final DeveloperLanguageFrameworkRepository repository;

    @Override
    public void createSkill(SkillRequestDto request) {

        Developer developer = this.developerRepository.findById(request.getDeveloperId()).orElseThrow( () -> new DevException("Developer not found."));


    }
}
