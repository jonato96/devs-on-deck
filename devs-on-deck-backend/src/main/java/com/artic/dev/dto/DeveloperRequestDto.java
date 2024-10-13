package com.artic.dev.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DeveloperRequestDto {
        String firstName;
        String lastName;
        String email;
        String address;
        Long cityId;
        String password;
}
