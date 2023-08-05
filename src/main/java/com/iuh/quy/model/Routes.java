package com.iuh.quy.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Routes {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long route_id; // khóa chính, định danh đặt xe
	
	private long user_id; // khóa ngoại tham chiếu đến bảng "Users"
	private long vehicle_id; // khóa ngoại tham chiếu đến bảng "Vehicles"
	private String pickup_location; // địa điểm lấy xe
	private String city_from; //Thành phố đi
	private String city_to; //TP đến
	private String dropoff_location; // địa điểm trả xe
	private Date pickup_datetime; // thời gian lấy xe
	private String travel_time; // thời gian chuyến xe
	private double total_distance; //Quãng đường
	private double total_amount; // tổng số tiền thanh toán
	private Date created_at; // thời điểm đặt xe
	//constructor
	public Routes() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Routes(long user_id, long vehicle_id, String pickup_location, String city_from, String city_to,
			String dropoff_location, Date pickup_datetime, String travel_time, double total_distance,
			double total_amount, Date created_at) {
		super();
		this.user_id = user_id;
		this.vehicle_id = vehicle_id;
		this.pickup_location = pickup_location;
		this.city_from = city_from;
		this.city_to = city_to;
		this.dropoff_location = dropoff_location;
		this.pickup_datetime = pickup_datetime;
		this.travel_time = travel_time;
		this.total_distance = total_distance;
		this.total_amount = total_amount;
		this.created_at = created_at;
	}
	public long getRoute_id() {
		return route_id;
	}
	public void setRoute_id(long route_id) {
		this.route_id = route_id;
	}
	public long getUser_id() {
		return user_id;
	}
	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}
	public long getVehicle_id() {
		return vehicle_id;
	}
	public void setVehicle_id(long vehicle_id) {
		this.vehicle_id = vehicle_id;
	}
	public String getPickup_location() {
		return pickup_location;
	}
	public void setPickup_location(String pickup_location) {
		this.pickup_location = pickup_location;
	}
	public String getCity_from() {
		return city_from;
	}
	public void setCity_from(String city_from) {
		this.city_from = city_from;
	}
	public String getCity_to() {
		return city_to;
	}
	public void setCity_to(String city_to) {
		this.city_to = city_to;
	}
	public String getDropoff_location() {
		return dropoff_location;
	}
	public void setDropoff_location(String dropoff_location) {
		this.dropoff_location = dropoff_location;
	}
	public Date getPickup_datetime() {
		return pickup_datetime;
	}
	public void setPickup_datetime(Date pickup_datetime) {
		this.pickup_datetime = pickup_datetime;
	}
	public String getTravel_time() {
		return travel_time;
	}
	public void setTravel_time(String travel_time) {
		this.travel_time = travel_time;
	}
	public double getTotal_distance() {
		return total_distance;
	}
	public void setTotal_distance(double total_distance) {
		this.total_distance = total_distance;
	}
	public double getTotal_amount() {
		return total_amount;
	}
	public void setTotal_amount(double total_amount) {
		this.total_amount = total_amount;
	}
	public Date getCreated_at() {
		return created_at;
	}
	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}
	@Override
	public String toString() {
		return "Routes [route_id=" + route_id + ", user_id=" + user_id + ", vehicle_id=" + vehicle_id
				+ ", pickup_location=" + pickup_location + ", city_from=" + city_from + ", city_to=" + city_to
				+ ", dropoff_location=" + dropoff_location + ", pickup_datetime=" + pickup_datetime + ", travel_time="
				+ travel_time + ", total_distance=" + total_distance + ", total_amount=" + total_amount
				+ ", created_at=" + created_at + "]";
	}
	
}