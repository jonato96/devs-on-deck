package com.artic.dev.model;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.util.function.ThrowingSupplier;

public class ApiUtil {

    public static <T> ResponseEntity<ApiGenericResponse<T>> response(ThrowingSupplier<T> supplier) {
        ResponseEntity<ApiGenericResponse<T>> response = null;
        try {
            response = new ResponseEntity<>(
                    ApiGenericResponse.<T>builder().code("Successful").data(supplier.get()).build(),
                    HttpStatusCode.valueOf(200));
        } catch (Exception ex) {

            response = new ResponseEntity<>(
                    ApiGenericResponse.<T>builder().code("Error").info(ex.getMessage()).build(),
                    HttpStatusCode.valueOf(500));
        }
        return response;
    }

}
