package com.artic.dev.service;

import com.artic.dev.dto.CityResponseDto;

import java.util.List;

public interface CityService {

    List<CityResponseDto> findAllBy(Long stateId);

}
