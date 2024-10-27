package com.artic.dev.model;

import lombok.Builder;
import lombok.Generated;

@Builder
@Generated
public record ApiGenericResponse<T>(String code, String info, T data) {
}
