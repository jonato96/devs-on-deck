package com.artic.dev.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "person")
@Inheritance(strategy = InheritanceType.JOINED)
@Data
public class Person {

    @Id
    private Long id;

    @Column
    private String email;

    @Column
    private String address;

    @Column
    private String password;

    @ManyToOne
    @JoinColumn(name="city_id", nullable=false)
    private City city;


}
