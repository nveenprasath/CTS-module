package com.cognizant.account.model;

public class Account {
	
	private int number;
	private String type;
	private int balance;
	
	public Account(int i, String string, int j) {
		this.number=i;
		this.type=string;
		this.balance=j;
	}
	
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getBalance() {
		return balance;
	}
	public void setBalance(int balance) {
		this.balance = balance;
	}
	
	
	
	
	
}
