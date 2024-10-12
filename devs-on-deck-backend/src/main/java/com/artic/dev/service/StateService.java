package com.artic.dev.service;

import com.artic.dev.dto.StateResponseDto;

import java.util.List;

public interface StateService {
    List<StateResponseDto> findAll();
}
