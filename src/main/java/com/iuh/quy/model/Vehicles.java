package com.iuh.quy.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Vehicles {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long vehicle_id; // Định danh xe
	private String brand; // Hãng xe
	private String model; // Mẫu xe
	private String vehicle_number; // biển số xe
	private int seat_number;

	//constructor
	public Vehicles() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vehicles(String brand, String model, String vehicle_number, int seat_number) {
		super();
		this.brand = brand;
		this.model = model;
		this.vehicle_number = vehicle_number;
		this.seat_number = seat_number;
	}

	public long getVehicle_id() {
		return vehicle_id;
	}

	public void setVehicle_id(long vehicle_id) {
		this.vehicle_id = vehicle_id;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getVehicle_number() {
		return vehicle_number;
	}

	public void setVehicle_number(String vehicle_number) {
		this.vehicle_number = vehicle_number;
	}

	public int getSeat_number() {
		return seat_number;
	}

	public void setSeat_number(int seat_number) {
		this.seat_number = seat_number;
	}

	@Override
	public String toString() {
		return "Vehicles [vehicle_id=" + vehicle_id + ", brand=" + brand + ", model=" + model + ", vehicle_number="
				+ vehicle_number + ", seat_number=" + seat_number + "]";
	}

	
}
