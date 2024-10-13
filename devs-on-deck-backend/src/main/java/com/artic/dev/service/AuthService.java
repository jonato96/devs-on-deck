package com.artic.dev.service;

import com.artic.dev.dto.AuthResponseDto;
import com.artic.dev.dto.DeveloperRequestDto;
import com.artic.dev.dto.LoginRequestDto;
import com.artic.dev.dto.OrganizationRequestDto;

public interface AuthService {
    AuthResponseDto login(LoginRequestDto request);
    AuthResponseDto registerDev(DeveloperRequestDto request);
    AuthResponseDto registerOrg(OrganizationRequestDto request);
}
