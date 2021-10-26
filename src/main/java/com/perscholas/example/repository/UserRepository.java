package com.perscholas.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.perscholas.example.model.User;



@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	
}