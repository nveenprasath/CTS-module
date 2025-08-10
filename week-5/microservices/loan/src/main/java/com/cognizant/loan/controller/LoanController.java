package com.cognizant.loan.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import com.cognizant.loan.model.Loan;
import com.cognizant.loan.service.LoanService;

@RestController
public class LoanController {
	
	@Autowired
	LoanService service ;
	
	@GetMapping("/loan")
	public List<Loan> getAcc(){
		return service.getLoan();
	}
	
	
	@GetMapping("/loan/{id}")
	public Loan getLoanById(@PathVariable int id){
		
		return service.getLoanById(id);
	}
}
