package com.artic.dev.service.impl;

import com.artic.dev.dto.AuthResponseDto;
import com.artic.dev.dto.DeveloperRequestDto;
import com.artic.dev.dto.LoginRequestDto;
import com.artic.dev.dto.OrganizationRequestDto;
import com.artic.dev.entity.Developer;
import com.artic.dev.entity.Organization;
import com.artic.dev.entity.Person;
import com.artic.dev.exception.DevException;
import com.artic.dev.jwt.JwtService;
import com.artic.dev.repository.DeveloperRepository;
import com.artic.dev.repository.OrganizationRepository;
import com.artic.dev.repository.PersonRepository;
import com.artic.dev.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final PersonRepository personRepository;
    private final DeveloperRepository developerRepository;
    private final OrganizationRepository organizationRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    @Transactional(readOnly = true)
    public AuthResponseDto login(LoginRequestDto request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        Person user = personRepository.findByEmail(request.getEmail()).orElseThrow( () -> new DevException("User not found.") );
        String token = jwtService.getToken(user);
        return AuthResponseDto.builder()
                .user(user.getId().toString())
                .token(token)
                .build();
    }

    @Override
    @Transactional
    public AuthResponseDto registerDev(DeveloperRequestDto request) {
        Developer developer = Developer.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .address(request.getAddress())
                .cityId(request.getCityId())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();
        developerRepository.save(developer);
        return AuthResponseDto.builder()
                .user(developer.getEmail())
                .token(jwtService.getToken(developer))
                .build();
    }

    @Override
    @Transactional
    public AuthResponseDto registerOrg(OrganizationRequestDto request) {
        Organization organization = Organization.builder()
                .orgName(request.getOrgName())
                .email(request.getEmail())
                .address(request.getAddress())
                .cityId(request.getCityId())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();
        organizationRepository.save(organization);
        return AuthResponseDto.builder()
                .user(organization.getUsername())
                .token(jwtService.getToken(organization))
                .build();
    }
}
