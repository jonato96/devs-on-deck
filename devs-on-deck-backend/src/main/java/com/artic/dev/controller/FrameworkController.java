package com.artic.dev.controller;

import com.artic.dev.dto.FrameworkResponseDto;
import com.artic.dev.model.ApiGenericResponse;
import com.artic.dev.service.FrameworkService;
import com.artic.dev.util.ApiUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("frameworks")
@RequiredArgsConstructor
public class FrameworkController {

    private final FrameworkService service;

    @PostMapping
    public ResponseEntity<ApiGenericResponse<List<FrameworkResponseDto>>> findFrameworkByLanguages(
            @RequestBody List<Long> languageIdList
    ) {
        return ApiUtil.response(() -> this.service.findAllByLanguages(languageIdList) );
    }

}
