package com.cognizant.account.service;

import java.util.Arrays;
import java.util.*;
import org.springframework.stereotype.Service;

import com.cognizant.account.model.Account;

@Service
public class AccountService {
	
	List<Account> acc=Arrays.asList(new Account(101,"savings",2000),
			new Account(102,"Deposit",3000));
	
	
	public List<Account> getAccount() {
		return acc;
	}
	
	public Account getAccountById(int accId) {
		
		return acc.stream().filter(p -> p.getNumber()==accId).findFirst().get();
	}

}
