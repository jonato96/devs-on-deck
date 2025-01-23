package com.artic.dev.service.impl;

import com.artic.dev.repository.DeveloperLanguageFrameworkRepository;
import com.artic.dev.service.DeveloperSkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DeveloperSkillServiceImpl implements DeveloperSkillService {

    private final DeveloperLanguageFrameworkRepository repository;

    @Override
    public void createSkill() {

    }
}
