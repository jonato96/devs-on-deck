package com.artic.dev.controller;

import com.artic.dev.dto.SkillRequestDto;
import com.artic.dev.model.ApiGenericResponse;
import com.artic.dev.service.DeveloperSkillService;
import com.artic.dev.util.ApiUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("skills")
@RequiredArgsConstructor
public class DeveloperSkillController {

    private final DeveloperSkillService service;

    @PostMapping
    public ResponseEntity<ApiGenericResponse<String>> saveSkill(@RequestBody SkillRequestDto request) {
        return ApiUtil.response( () -> this.service.createSkill(request) );
    }
}
