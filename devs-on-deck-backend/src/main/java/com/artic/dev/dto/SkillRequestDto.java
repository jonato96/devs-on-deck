package com.artic.dev.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SkillRequestDto {
    Long developerId;
    List<Long> languajeIdList;
    List<Long> frameworkIdList;
}
