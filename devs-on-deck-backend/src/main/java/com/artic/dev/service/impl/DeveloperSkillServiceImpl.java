package com.artic.dev.service.impl;

import com.artic.dev.dto.SkillDto;
import com.artic.dev.dto.SkillRequestDto;
import com.artic.dev.entity.Developer;
import com.artic.dev.entity.DeveloperLanguageFramework;
import com.artic.dev.entity.Framework;
import com.artic.dev.entity.Language;
import com.artic.dev.exception.DevException;
import com.artic.dev.repository.DeveloperLanguageFrameworkRepository;
import com.artic.dev.repository.DeveloperRepository;
import com.artic.dev.repository.FrameworkRepository;
import com.artic.dev.repository.LanguagesRepository;
import com.artic.dev.service.DeveloperSkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class DeveloperSkillServiceImpl implements DeveloperSkillService {

    private final DeveloperRepository developerRepository;
    private final LanguagesRepository languagesRepository;
    private final FrameworkRepository frameworkRepository;
    private final DeveloperLanguageFrameworkRepository repository;

    @Transactional
    @Override
    public String createSkill(SkillRequestDto request) {

        Developer developer = this.developerRepository.findById(request.getDeveloperId())
                .orElseThrow( () -> new DevException("Developer not found."));

        for( SkillDto skill : request.getSkills()) {
            Language language = languagesRepository.findById(skill.getLanguageId())
                    .orElseThrow( () -> new DevException("Language nor found"));
            Framework framework = null;
            if (Objects.nonNull(skill.getFrameworkId())) {
                framework = frameworkRepository.findById(skill.getFrameworkId())
                        .orElseThrow( () -> new DevException("Framework not found"));
            }
            DeveloperLanguageFramework relationship = new DeveloperLanguageFramework();
            relationship.setDeveloper(developer);
            relationship.setLanguage(language);
            relationship.setFramework(framework);
            repository.save(relationship);
        }
        return "Developer Skills Created";

    }
}
