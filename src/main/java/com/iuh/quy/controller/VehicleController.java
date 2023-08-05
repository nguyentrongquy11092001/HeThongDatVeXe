package com.iuh.quy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iuh.quy.model.Seat;
import com.iuh.quy.model.Vehicles;
import com.iuh.quy.service.VehicleService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class VehicleController {
	@Autowired
	private VehicleService vehicleService;

	//Lưu phương tiện
	@PostMapping("/saveVehicle")
	public ResponseEntity<?> saveVehicles(@RequestBody Vehicles vehicle){
		return new ResponseEntity<>(vehicleService.saveVehicles(vehicle), HttpStatus.CREATED);
	}
	
	//Hiển thị tất cả phương tiện
	@GetMapping("/")
	public ResponseEntity<?> getAllVehicles(){
		return new ResponseEntity<>(vehicleService.getAllVehicles(), HttpStatus.OK);
	}
	
	//Tìm phương tiện theo id
	@GetMapping("/findVehicleById/{id}")
	public ResponseEntity<?> getVehicleById(@PathVariable Long id){
		return new ResponseEntity<>(vehicleService.getVehicleById(id), HttpStatus.OK);
	} 
	
	//Xóa phương tiện theo id
	@GetMapping("/deleteVehicle/{id}")
	public ResponseEntity<?> deleteVehicle(@PathVariable Long id){
		return new ResponseEntity<>(vehicleService.deleteVehicle(id), HttpStatus.OK);
	}
	
	//Cập nhật phương tiện
	@PostMapping("/editVehicle/{id}")
	public ResponseEntity<?> editVehicles(@RequestBody Vehicles vehicle, @PathVariable Long id){
		return new ResponseEntity<>(vehicleService.editVehicles(vehicle, id), HttpStatus.CREATED);
	}
}
