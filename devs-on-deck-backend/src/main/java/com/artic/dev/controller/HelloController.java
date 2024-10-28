package com.artic.dev.controller;

import com.artic.dev.model.ApiGenericResponse;
import com.artic.dev.util.ApiUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("health")
public class HelloController {

    @GetMapping
    public ResponseEntity<ApiGenericResponse<String>> hello() {
        return ApiUtil.response(() -> "Hello from server for devs on deck.");
    }
}
