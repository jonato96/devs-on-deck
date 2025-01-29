package com.artic.dev.exception;

import lombok.Getter;

@Getter
public class DevException extends RuntimeException {
    private final String errorMessage;

    public DevException (final String errorMessage) {
        this.errorMessage = errorMessage;
    }

}
