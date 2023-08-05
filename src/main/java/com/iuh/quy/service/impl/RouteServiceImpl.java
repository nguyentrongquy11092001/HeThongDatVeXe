package com.iuh.quy.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iuh.quy.model.Routes;
import com.iuh.quy.repository.RouteRepository;
import com.iuh.quy.service.RouteService;

@Service
public class RouteServiceImpl implements RouteService{
	@Autowired
	private RouteRepository routeRepository;
	
	
	@Override
	public Routes saveRoute(Routes route) {
		// TODO Auto-generated method stub
		return routeRepository.save(route);
	}

	@Override
	public List<Routes> getAllRoutes() {
		// TODO Auto-generated method stub
		return routeRepository.findAll();
	}

	@Override
	public Routes getRouteById(Long route_id) {
		// TODO Auto-generated method stub
		return routeRepository.findById(route_id).get();
	}

	@Override
	public String deleteRoute(Long route_id) {
		Routes route = routeRepository.findById(route_id).get();
		if(route != null) {
			routeRepository.delete(route);
			return "Booking Delete Successfully";
		}
		return "Error on Server";
	}

	@Override
	public Routes editRoute(Routes route, Long route_id) {
		Routes oldRoute = routeRepository.findById(route_id).get();
		
		oldRoute.setUser_id(route.getUser_id());
		oldRoute.setVehicle_id(route.getVehicle_id());
		oldRoute.setCity_from(route.getCity_from());
		oldRoute.setCity_to(route.getCity_to());
		oldRoute.setTotal_distance(route.getTotal_distance());
		oldRoute.setPickup_location(route.getPickup_location());
		oldRoute.setPickup_datetime(route.getPickup_datetime());
		oldRoute.setDropoff_location(route.getDropoff_location());
		oldRoute.setTravel_time(route.getTravel_time());
		oldRoute.setTotal_amount(route.getTotal_amount());
		
		return null;
	}

	@Override
	public List<Routes> searchRoutes(String city_from, String city_to) {
		// TODO Auto-generated method stub
		return routeRepository.findByCityFromAndCityTo(city_from, city_to);
	}
}
