package com.artic.dev.controller;

import com.artic.dev.exception.DevException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionController {

    @ExceptionHandler(value = {DevException.class})
    public ResponseEntity<Object> handleDevsException(DevException e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getErrorMessage());
    }

    @ExceptionHandler(value = {Exception.class})
    public ResponseEntity<Object> handleException(Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
    }
}
