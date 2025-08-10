package com.cognizant.loan.service;
import java.util.Arrays;
import java.util.*;
import org.springframework.stereotype.Service;

import com.cognizant.loan.model.Loan;

@Service
public class LoanService {
	
	List<Loan> loan=Arrays.asList(new Loan(101,"savings",20000,1500,10),
			new Loan(102,"Deposit",30000,1000,15));
	
	
	public List<Loan> getLoan() {
		return loan;
	}
	
	public Loan getLoanById(int accId) {
		
		return loan.stream().filter(p -> p.getNumber()==accId).findFirst().get();
	}

}
