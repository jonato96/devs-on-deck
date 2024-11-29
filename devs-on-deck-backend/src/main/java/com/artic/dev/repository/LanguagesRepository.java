package com.artic.dev.repository;

import com.artic.dev.entity.Language;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LanguagesRepository extends JpaRepository<Language, Long> {
}
