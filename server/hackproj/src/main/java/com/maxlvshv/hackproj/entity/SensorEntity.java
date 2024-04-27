package com.maxlvshv.hackproj.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "sensors")
public class SensorEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    public Double coordinateWidth;

    public Double coordinateLongitude;

    public String date;

    public Double temperature;

    public Double humidity;

    public Double pressure;

    public Double pm2_5;

    public Double pm10;

    public Double noise;
}
