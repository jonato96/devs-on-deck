package com.artic.dev.controller;

import com.artic.dev.dto.FrameworkResponseDto;
import com.artic.dev.dto.LanguageResponseDto;
import com.artic.dev.model.ApiGenericResponse;
import com.artic.dev.service.LanguagesService;
import com.artic.dev.util.ApiUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("languages")
@RequiredArgsConstructor
public class LanguageController {

    private final LanguagesService service;

    @GetMapping
    public ResponseEntity<ApiGenericResponse<List<LanguageResponseDto>>> findAll() {
        return ApiUtil.response(() -> this.service.findAll() );
    }

    @GetMapping("{id}/frameworks")
    public ResponseEntity<ApiGenericResponse<List<FrameworkResponseDto>>> findFramework(@PathVariable Long id) {
        return ApiUtil.response(() -> this.service.findFrameworkBy(id) );
    }

}
