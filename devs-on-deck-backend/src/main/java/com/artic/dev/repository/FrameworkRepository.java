package com.artic.dev.repository;

import com.artic.dev.entity.Framework;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FrameworkRepository extends JpaRepository<Framework, Long> {

    List<Framework> findByLanguageId(Long id);
    @Query("SELECT f FROM Framework f WHERE f.languageId IN :idList")
    List<Framework> findByLanguageIdList(@Param("idList") List<Long> languageIdList);

}
