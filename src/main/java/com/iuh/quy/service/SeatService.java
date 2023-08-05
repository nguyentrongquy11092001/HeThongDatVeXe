package com.iuh.quy.service;

import java.util.List;

import com.iuh.quy.model.Seat;

public interface SeatService {
	void chooseSeat(Long seat_id, Long vehicle_id);
	List<Seat> getAllSeatByVehicleID(Long vehicle_id);
}
