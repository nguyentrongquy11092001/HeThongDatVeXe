package com.iuh.quy.service;

import java.util.Date;
import java.util.List;

import com.iuh.quy.model.Routes;

public interface RouteService {
	Routes saveRoute(Routes route);
	List<Routes> getAllRoutes();
	Routes getRouteById(Long route_id);
	String deleteRoute(Long route_id);
	Routes editRoute(Routes route, Long route_id);
	List<Routes> searchRoutes(String city_from, String city_to);
}
