package com.artic.dev.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.Set;

@Entity
@Table(name = "state")
@Data
public class State {

    @Id
    private Long id;

    @Column
    private String name;

    @OneToMany(fetch = FetchType.EAGER)
    private Set<City> city;

}
