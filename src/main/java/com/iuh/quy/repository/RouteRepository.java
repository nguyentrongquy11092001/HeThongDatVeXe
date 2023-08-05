package com.iuh.quy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.iuh.quy.model.Routes;

@Repository
public interface RouteRepository extends JpaRepository<Routes, Long>{
	@Query("SELECT r FROM Routes r WHERE r.city_from = ?1 AND r.city_to = ?2")
    List<Routes> findByCityFromAndCityTo(String city_from, String city_to);
}
