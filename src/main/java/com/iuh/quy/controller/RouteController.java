package com.iuh.quy.controller;

import java.time.LocalDateTime;
import java.util.Date;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.iuh.quy.model.Routes;
import com.iuh.quy.service.RouteService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RouteController {
	@Autowired
	private RouteService routeService;

	//Lưu chuyến xe
	@PostMapping("/saveRoute")
	public ResponseEntity<?> saveRoute(@RequestBody Routes route) {
		return new ResponseEntity<>(routeService.saveRoute(route), HttpStatus.CREATED);
	}

	// Hiển thị tất cả chuyến xe
	@GetMapping("/getAllRoutes")
	public ResponseEntity<?> getAllRoutes() {
		return new ResponseEntity<>(routeService.getAllRoutes(), HttpStatus.OK);
	}

	// Tìm chuyến xe theo id
	@GetMapping("/getRouteById/{route_id}")
	public ResponseEntity<?> getRouteById(@PathVariable Long route_id) {
		return new ResponseEntity<>(routeService.getRouteById(route_id), HttpStatus.OK);
	}

	// Xóa chuyến xe theo id
	@GetMapping("/deleteRoute/{route_id}")
	public ResponseEntity<?> deleteRoute(@PathVariable Long route_id) {
		return new ResponseEntity<>(routeService.deleteRoute(route_id), HttpStatus.OK);
	}

	// Cập nhật chuyến xe
	@PostMapping("/editRoute/{route_id}")
	public ResponseEntity<?> editRoute(@RequestBody Routes route, @PathVariable Long route_id) {
		return new ResponseEntity<>(routeService.editRoute(route, route_id), HttpStatus.CREATED);
	}
	//
	@GetMapping("/api/routes")
    public List<Routes> searchRoutes(
            @RequestParam("cityFrom") String city_rom,
            @RequestParam("cityTo") String city_to) {

        return routeService.searchRoutes(city_rom, city_to);
    }
}
