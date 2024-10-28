package com.artic.dev.controller;

import com.artic.dev.dto.AuthResponseDto;
import com.artic.dev.dto.DeveloperRequestDto;
import com.artic.dev.dto.LoginRequestDto;
import com.artic.dev.dto.OrganizationRequestDto;
import com.artic.dev.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
public class AuthController {

    private final AuthService authService;

    @PostMapping("login")
    public ResponseEntity<AuthResponseDto> login(@RequestBody LoginRequestDto request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping("register/dev")
    public ResponseEntity<AuthResponseDto> registerDev(@RequestBody DeveloperRequestDto request) {
        return ResponseEntity.ok(authService.registerDev(request));
    }

    @PostMapping("register/org")
    public ResponseEntity<AuthResponseDto> registerOrg(@RequestBody OrganizationRequestDto request) {
        return ResponseEntity.ok(authService.registerOrg(request));
    }


}
