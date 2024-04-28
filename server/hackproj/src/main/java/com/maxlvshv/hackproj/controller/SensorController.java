package com.maxlvshv.hackproj.controller;

import com.maxlvshv.hackproj.entity.SensorEntity;
import com.maxlvshv.hackproj.service.SensorService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class SensorController {
    private final SensorService sensorService;

    @GetMapping
    public List<SensorEntity> getAllSensors() {
        return sensorService.showAllSensors();
    }

    @PostMapping
    public SensorEntity createSensor(@RequestBody SensorEntity sensor) {
        return sensorService.addNewSensor(sensor);
    }

    @GetMapping("/test")
    public String sayHi() {
        return "hello";
    }
}
