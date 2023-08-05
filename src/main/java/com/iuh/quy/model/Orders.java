package com.iuh.quy.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long order_id;
	
	private long user_id;
	
	private long booking_id;
	
	private boolean round_trip;
	
	private double total_price;
	
	private Date created_at;
	//

	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Orders(long user_id, long booking_id, boolean round_trip, double total_price, Date created_at) {
		super();
		this.user_id = user_id;
		this.booking_id = booking_id;
		this.round_trip = round_trip;
		this.total_price = total_price;
		this.created_at = created_at;
	}
	public long getOrder_id() {
		return order_id;
	}
	public void setOrder_id(long order_id) {
		this.order_id = order_id;
	}
	public long getUser_id() {
		return user_id;
	}
	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}
	public long getBooking_id() {
		return booking_id;
	}
	public void setBooking_id(long booking_id) {
		this.booking_id = booking_id;
	}
	public boolean isRound_trip() {
		return round_trip;
	}
	public void setRound_trip(boolean round_trip) {
		this.round_trip = round_trip;
	}
	public double getTotal_price() {
		return total_price;
	}
	public void setTotal_price(double total_price) {
		this.total_price = total_price;
	}
	public Date getCreated_at() {
		return created_at;
	}
	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}
	@Override
	public String toString() {
		return "Orders [order_id=" + order_id + ", user_id=" + user_id + ", booking_id=" + booking_id + ", round_trip="
				+ round_trip + ", total_price=" + total_price + ", created_at=" + created_at + "]";
	}
	
}