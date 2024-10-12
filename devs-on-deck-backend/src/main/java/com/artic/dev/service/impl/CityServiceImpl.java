package com.artic.dev.service.impl;

import com.artic.dev.dto.CityResponseDto;
import com.artic.dev.entity.City;
import com.artic.dev.repository.CityRepository;
import com.artic.dev.service.CityService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CityServiceImpl implements CityService {

    private final CityRepository cityRepository;

    @Override
    public List<CityResponseDto> findAllBy(Long stateId) {
        List<City> cities = this.cityRepository.findAllByStateId(stateId);
        return cities.stream().map(city -> CityResponseDto.builder()
                .id(city.getId())
                .name(city.getName())
                .build()
        ).toList();
    }
}
