package com.maxlvshv.hackproj.service;

import com.maxlvshv.hackproj.entity.SensorEntity;
import com.maxlvshv.hackproj.repository.SensorRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SensorService {
    private final SensorRepo sensorRepo;

    public List<SensorEntity> showAllSensors() {
        return sensorRepo.findAll();
    }

    public SensorEntity addNewSensor(SensorEntity sensor) {
        return sensorRepo.save(sensor);
    }

}
