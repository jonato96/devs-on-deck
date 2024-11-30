package com.artic.dev.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "framework")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Framework {

    @Id
    private long id;

    @Column
    private String name;

    @Column
    private String logo;

    @Column(name="language_id", nullable = false)
    private Long languageId;

    @ManyToOne
    @JoinColumn(name="language_id", insertable = false, updatable = false)
    private Language language;

}
