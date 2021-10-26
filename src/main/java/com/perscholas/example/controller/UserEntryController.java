package com.perscholas.example.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perscholas.example.exception.ResourceNotFoundException;
//import com.perscholas.example.model.User;
import com.perscholas.example.model.UserEntry;
import com.perscholas.example.repository.UserEntryRepository;
//import com.perscholas.example.repository.UserRepository;

@CrossOrigin( origins = "http://localhost:3001")
//@CrossOrigin
@RestController
@RequestMapping ("/api/")


public class UserEntryController {
	
	@Autowired
	private UserEntryRepository userEntryRepository;
	
		// create user rest api
	
		@PostMapping("/users")
		public UserEntry createUserEntry(@RequestBody UserEntry userEntry) 
		{
			return userEntryRepository.save(userEntry);
		}		
	
		// get user by id rest api
		
		@GetMapping("/users/{id}")
		public ResponseEntity <UserEntry> getUserById(@PathVariable int id) 
		{
			UserEntry userEntry = userEntryRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException
							("User not exist with id :" + id));
			
			return ResponseEntity.ok(userEntry);
		}
		
		// update user rest api
		
		@PutMapping("/users/{id}")
		public ResponseEntity<UserEntry> updateUserEntry(@PathVariable int id, @RequestBody UserEntry userEntryDetails)
		{
			UserEntry userEntry = userEntryRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException
							("User not exist with id :" + id));
			
			userEntry.setFname(userEntryDetails.getFname());
			userEntry.setLname(userEntryDetails.getLname());
			userEntry.setEntrydate(userEntryDetails.getEntrydate());
			userEntry.setEntrytime(userEntryDetails.getEntrytime());
			userEntry.setGlucose(userEntryDetails.getGlucose());
			userEntry.setIn_range(userEntryDetails.getIn_range());
			userEntry.setNote(userEntryDetails.getNote());

			
			UserEntry updatedUserEntry = userEntryRepository.save(userEntry);
			return ResponseEntity.ok(updatedUserEntry);
		}

		// delete employee rest api
		
				@DeleteMapping("/users/{id}")
				public ResponseEntity<Map<String, Boolean>>deleteUser(@PathVariable int id){
					UserEntry userEntry = userEntryRepository.findById(id)
							.orElseThrow(() -> new ResourceNotFoundException("User entry not exist with id :" + id));
					
					userEntryRepository.delete(userEntry);
					Map<String, Boolean> response = new HashMap<>();
					response.put("deleted", Boolean.TRUE);
					return ResponseEntity.ok(response);
				}
}
