package com.artic.dev.controller;

import com.artic.dev.service.DeveloperSkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("skills")
@RequiredArgsConstructor
public class DeveloperSkillController {

    private final DeveloperSkillService service;
}
