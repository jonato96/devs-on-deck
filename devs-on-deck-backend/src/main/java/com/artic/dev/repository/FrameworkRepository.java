package com.artic.dev.repository;

import com.artic.dev.entity.Framework;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FrameworkRepository extends JpaRepository<Framework, Long> {

    List<Framework> findByLanguageId(Long id);

}
