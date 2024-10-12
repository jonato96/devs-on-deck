package com.artic.dev.repository;

import com.artic.dev.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CityRepository extends JpaRepository<City, Long> {

    List<City> findAllByStateId(long id);

}
