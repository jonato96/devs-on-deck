package com.artic.dev.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "organization")
@PrimaryKeyJoinColumn(name = "person_id")
@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
public class Organization extends Person {

    @Column(name = "org_name", nullable = false)
    private String orgName;

}
