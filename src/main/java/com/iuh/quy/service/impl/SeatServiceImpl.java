package com.iuh.quy.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iuh.quy.model.Seat;
import com.iuh.quy.model.Vehicles;
import com.iuh.quy.repository.SeatRepository;
import com.iuh.quy.service.SeatService;

@Service
public class SeatServiceImpl implements SeatService{
	@Autowired
	private SeatRepository seatRepository;
	
	public SeatServiceImpl(SeatRepository seatRepository) {
		super();
		this.seatRepository = seatRepository;
	}

	@Override
	public void chooseSeat(Long seat_id, Long vehicle_id) {
		Seat seats = new Seat();
		seats.setSeat_id(seat_id);
		seats.setIs_selected(true);

        Vehicles vehicle = new Vehicles();
        vehicle.setVehicle_id(vehicle_id);

        seats.setVehicle(vehicle);

        seatRepository.save(seats);
	}

	@Override
	public List<Seat> getAllSeatByVehicleID(Long vehicle_id) {
		// TODO Auto-generated method stub
		return seatRepository.findSeatByVehicleID(vehicle_id);
	}

	

	
}
