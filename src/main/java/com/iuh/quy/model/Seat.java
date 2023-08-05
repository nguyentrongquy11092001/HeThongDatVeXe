package com.iuh.quy.model;

import javax.persistence.*;

@Entity
public class Seat {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long seat_id;

    @Column(name = "seat_number")
    private String seat_number;

    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicles vehicle;

    @Column(name = "is_selected")
    private boolean is_selected;
    //

	public Seat() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Seat(String seat_number, Vehicles vehicle, boolean is_selected) {
		super();
		this.seat_number = seat_number;
		this.vehicle = vehicle;
		this.is_selected = is_selected;
	}
	public Long getSeat_id() {
		return seat_id;
	}
	public void setSeat_id(Long seat_id) {
		this.seat_id = seat_id;
	}
	public String getSeat_number() {
		return seat_number;
	}
	public void setSeat_number(String seat_number) {
		this.seat_number = seat_number;
	}
	public Vehicles getVehicle() {
		return vehicle;
	}
	public void setVehicle(Vehicles vehicle) {
		this.vehicle = vehicle;
	}
	public boolean isIs_selected() {
		return is_selected;
	}
	public void setIs_selected(boolean is_selected) {
		this.is_selected = is_selected;
	}
	@Override
	public String toString() {
		return "Seat [seat_id=" + seat_id + ", seat_number=" + seat_number + ", vehicle=" + vehicle + ", is_selected="
				+ is_selected + "]";
	}

	
}
