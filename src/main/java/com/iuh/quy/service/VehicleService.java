package com.iuh.quy.service;

import java.util.List;

import com.iuh.quy.model.Vehicles;

public interface VehicleService {
	Vehicles saveVehicles(Vehicles vehicle);
	List<Vehicles> getAllVehicles();
	Vehicles getVehicleById(Long vehicle_id);
	String deleteVehicle(Long vehicle_id);
	Vehicles editVehicles(Vehicles vehicle, Long vehicle_id);
}
