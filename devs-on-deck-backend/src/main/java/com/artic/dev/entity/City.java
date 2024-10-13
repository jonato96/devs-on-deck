package com.artic.dev.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "city")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
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
