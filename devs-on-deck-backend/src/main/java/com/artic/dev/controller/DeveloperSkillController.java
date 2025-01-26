package com.artic.dev.controller;

import com.artic.dev.dto.SkillRequestDto;
import com.artic.dev.service.DeveloperSkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("skills")
@RequiredArgsConstructor
public class DeveloperSkillController {

    private final DeveloperSkillService service;

    @GetMapping
    public String saveSkill(@RequestBody SkillRequestDto request) {
        this.service.createSkill(request);
        return "";
    }
}
