package com.example.demo.entities;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="login")
public class Login {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int l_id;
	String uid;
	String pwd;
	@ManyToOne
	@JoinColumn(name="role_id")
	Role role_id;
	boolean status;
	
	public Login()
	{
		super();
	}
	
	public Login(String uid, String pwd, Role role_id, boolean status) {
		super();
		this.uid = uid;
		this.pwd = pwd;
		this.role_id = role_id;
		this.status = status;
	}

	public int getLogin_id() {
		return l_id;
	}
	public void setLogin_id(int login_id) {
		this.l_id = login_id;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public Role getRole_id() {
		return role_id;
	}
	public void setRole_id(Role role_id) {
		this.role_id = role_id;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	
	
}
