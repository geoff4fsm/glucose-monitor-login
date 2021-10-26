package com.perscholas.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.perscholas.example.model.UserEntry;



@Repository
public interface UserEntryRepository extends JpaRepository<UserEntry, Integer>{
	
}
