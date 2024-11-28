package com.artic.dev.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "language")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Language {

    @Id
    private long id;

    @Column
    private String name;

}
