package com.artic.dev.dto;

import lombok.Builder;

@Builder
public record StateResponseDto(Long id, String name) {
}
