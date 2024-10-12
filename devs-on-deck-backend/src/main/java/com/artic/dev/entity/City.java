package com.artic.dev.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "city")
@Data
public class City {

    @Id
    private Long id;

    @Column
    private String name;

    @Column(name = "state_id")
    private Long stateId;

    @ManyToOne
    @JoinColumn(name = "state_id", insertable = false, updatable = false)
    private State state;

}
