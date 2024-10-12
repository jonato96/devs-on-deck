package com.artic.dev.dto;

import lombok.Builder;

@Builder
public record CityResponseDto(Long id, String name) {
}
