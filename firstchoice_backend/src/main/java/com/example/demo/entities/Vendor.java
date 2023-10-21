package com.example.demo.entities;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

	
	@Entity
	@Table(name="vendor")
	public class Vendor {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int v_id;
		@Column
		private String v_name;
		@Column
		private String email;
		@Column
		private String contact;
		@Column
		private String address;
		@Column
		private String shop_licence_id;
		@OneToOne
		@JoinColumn(name="l_id")
		Login l_id;
//		@JsonIgnoreProperties("product")
//		@OneToMany(cascade = CascadeType.ALL)
//		List<Product> product;
	
		public Vendor() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		public Vendor(String v_name, String email, String contact, String address, String shop_licence_id,
				Login l_id) {
			super();
			this.v_name = v_name;
			this.email = email;
			this.contact = contact;
			this.address = address;
			this.shop_licence_id = shop_licence_id;
			this.l_id = l_id;
		}

		
		
		

		public int getV_id() {
			return v_id;
		}

		public void setV_id(int v_id) {
			this.v_id = v_id;
		}

		public String getV_name() {
			return v_name;
		}

		public void setV_name(String v_name) {
			this.v_name = v_name;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getContact() {
			return contact;
		}

		public void setContact(String contact) {
			this.contact = contact;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getShop_licence_id() {
			return shop_licence_id;
		}

		public void setShop_licence_id(String shop_licence_id) {
			this.shop_licence_id = shop_licence_id;
		}

		public Login getL_id() {
			return l_id;
		}

		public void setL_id(Login l_id) {
			this.l_id = l_id;
		}

		@Override
		public String toString() {
			return "Vendor [ven_id=" + v_id + ", name=" + v_name + ", phone=" + contact + ",address=" + address
					+ ", email=" + email + ", shop_licence_id=" + shop_licence_id+"]";
		}
		
		
		
	}


