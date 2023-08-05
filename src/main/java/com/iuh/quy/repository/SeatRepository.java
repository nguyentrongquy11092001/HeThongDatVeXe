package com.iuh.quy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.iuh.quy.model.Seat;
import com.iuh.quy.model.Vehicles;
@Repository
public interface SeatRepository  extends JpaRepository<Seat, Long>{
//	@Query("SELECT s FROM Seat s WHERE s.vehicle.vehicle_id = ?1")
//    List<Seat> findSeatByVehicleID(Long vehicle_id);
	@Query("SELECT s FROM Seat s WHERE s.vehicle.vehicle_id = :vehicleId")
    List<Seat> findSeatByVehicleID(@Param("vehicleId") Long vehicleId);
}
