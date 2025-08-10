package com.cognizant.account.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import com.cognizant.account.model.Account;
import com.cognizant.account.service.AccountService;

@RestController
public class AccountController {
	
	@Autowired
	AccountService service ;
	
	@GetMapping("/account")
	public List<Account> getAcc(){
		return service.getAccount();
	}
	
	
	@GetMapping("/account/{acc}")
	public Account getAccById(@PathVariable int acc){
		
		return service.getAccountById(acc);
	}
}
