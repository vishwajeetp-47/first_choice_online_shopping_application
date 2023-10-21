package com.example.demo.entities;


import javax.persistence.*;


@Entity
@Table(name="categories")
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int c_id;
	private String c_name;

	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Category(String c_name) {
		super();
		this.c_name = c_name;
	}
	


	public Category(int c_id) {
		super();
		this.c_id = c_id;
	}


	public Category(int c_id, String c_name) {
		super();
		this.c_id = c_id;
		this.c_name = c_name;
	}
	public int getC_id() {
		return c_id;
	}
	public void setC_id(int c_id) {
		this.c_id = c_id;
	}

	
	public String getC_name() {
		return c_name;
	}

	public void setC_name(String c_name) {
		this.c_name = c_name;
	}

	@Override
	public String toString() {
		return "Category [c_id=" + c_id +  "]";
	}
	
	 
}

