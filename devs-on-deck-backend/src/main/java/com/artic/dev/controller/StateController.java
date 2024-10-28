package com.artic.dev.controller;

import com.artic.dev.dto.CityResponseDto;
import com.artic.dev.dto.StateResponseDto;
import com.artic.dev.model.ApiGenericResponse;
import com.artic.dev.util.ApiUtil;
import com.artic.dev.service.CityService;
import com.artic.dev.service.StateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("state")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
public class StateController {

    private final StateService stateService;
    private final CityService cityService;

    @GetMapping
    public ResponseEntity<ApiGenericResponse<List<StateResponseDto>>> findAll() {
        return ApiUtil.response(() -> this.stateService.findAll() );
    }

    @GetMapping("{stateId}/cities")
    public ResponseEntity<ApiGenericResponse<List<CityResponseDto>>> findAllBy(@PathVariable("stateId") Long stateId) {
        return ApiUtil.response( () -> this.cityService.findAllBy(stateId) );
    }

}
