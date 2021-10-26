package com.perscholas.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table( name = "glucose_login" )
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column (name = "fname")
	private String fname;
	
	@Column (name = "lname")
	private String lname;
	
	@Column (name = "emailid")
	private String emailid;
	
	@Column (name = "password")
	private String password;

	public User() {
		
	}
	
	public User(int id, String fname, String lname, String emailid, String password) {
		super();
		this.id = id;
		this.fname = fname;
		this.lname = lname;
		this.emailid = emailid;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
