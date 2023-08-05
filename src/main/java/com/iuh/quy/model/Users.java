package com.iuh.quy.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long user_id; // khóa chính, định danh người dùng
	
	private String username; // tên người dùng
	private String password; // mật khẩu người dùng
	private String email; // địa chỉ email người dùng
	private String phone; // số điện thoại người dùng
	private String address; // địa chỉ người dùng
	private Date created_at; // thời điểm tạo tài khoản
	//constructor
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Users(String username, String password, String email, String phone, String address, Date created_at) {
		super();
		this.username = username;
		this.password = password;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.created_at = created_at;
	}
	//get set
	public long getUser_id() {
		return user_id;
	}
	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Date getCreated_at() {
		return created_at;
	}
	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}
	//toString
	@Override
	public String toString() {
		return "Users [user_id=" + user_id + ", username=" + username + ", password=" + password + ", email=" + email
				+ ", phone=" + phone + ", address=" + address + ", created_at=" + created_at + "]";
	}
	
}
