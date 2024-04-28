package com.maxlvshv.hackproj.repository;

import com.maxlvshv.hackproj.entity.SensorEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SensorRepo extends JpaRepository<SensorEntity, Integer> {
}
