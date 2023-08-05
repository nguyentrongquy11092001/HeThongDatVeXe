package com.iuh.quy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iuh.quy.model.Vehicles;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicles, Long>{
	
}
