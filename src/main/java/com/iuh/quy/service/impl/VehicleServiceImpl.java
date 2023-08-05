package com.iuh.quy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iuh.quy.model.Seat;
import com.iuh.quy.model.Vehicles;
import com.iuh.quy.repository.VehicleRepository;
import com.iuh.quy.service.VehicleService;

@Service
public class VehicleServiceImpl implements VehicleService{

	@Autowired
	private VehicleRepository vehicleRepository;
	
	
	
	
	@Override
	public Vehicles saveVehicles(Vehicles vehicle) {
		// TODO Auto-generated method stub
		return vehicleRepository.save(vehicle);
	}

	@Override
	public List<Vehicles> getAllVehicles() {
		// TODO Auto-generated method stub
		return vehicleRepository.findAll();
	}

	@Override
	public Vehicles getVehicleById(Long vehicle_id) {
		// TODO Auto-generated method stub
		return vehicleRepository.findById(vehicle_id).get();
	}

	@Override
	public String deleteVehicle(Long vehicle_id) {
		// TODO Auto-generated method stub
		Vehicles vehicle = vehicleRepository.findById(vehicle_id).get();
		if(vehicle != null) {
			vehicleRepository.delete(vehicle);
			return "Vehicle Delete Successfully";
		}
		return "Error on Server";
	}

	@Override
	public Vehicles editVehicles(Vehicles vehicle, Long vehicle_id) {
		
		Vehicles oldVehicle = vehicleRepository.findById(vehicle_id).get();
		
		oldVehicle.setBrand(vehicle.getBrand());
		oldVehicle.setModel(vehicle.getModel());
		oldVehicle.setVehicle_number(vehicle.getVehicle_number());
		oldVehicle.setSeat_number(vehicle.getSeat_number());
		
		return vehicleRepository.save(oldVehicle);
	}
}
