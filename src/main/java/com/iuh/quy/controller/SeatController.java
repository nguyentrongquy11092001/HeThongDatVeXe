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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.iuh.quy.model.Seat;
import com.iuh.quy.service.SeatService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SeatController {
	@Autowired
	
	private SeatService seatService;
	
	@PostMapping("/api/seats/{vehicleId}/book/{seatId}")
    public ResponseEntity<String> bookSeat(
            @PathVariable Long vehicleId,
            @PathVariable Long seatId
    ) {
		 try {
	            seatService.chooseSeat(seatId, vehicleId);
	            return ResponseEntity.ok("Ghế đã được đặt thành công");
	        } catch (RuntimeException e) {
	            return ResponseEntity.status(HttpStatus.CONFLICT).body("Ghế đã được đặt");
	        }
    }

	@GetMapping("/api/seats/selected/{vehicleId}")
    public List<Seat> getSelectedSeatsByVehicleId(@RequestParam("vehicleId") Long vehicleId) {
        return seatService.getAllSeatByVehicleID(vehicleId);
    }
	
//	@GetMapping("/api/seats/selected/{vehicleId}")
//	public ResponseEntity<?> getSelectedSeatsByVehicleId(@PathVariable Long vehicle_id) {
//		return new ResponseEntity<>(seatService.getAllSeatByVehicleID(vehicle_id), HttpStatus.OK);
//	}
	
	
}
