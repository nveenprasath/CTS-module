package com.ecommerce;

import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(103, "Keyboard", "Electronics"),
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Chair", "Furniture"),
            new Product(104, "Mouse", "Electronics")
        };

        Product result1 = SearchAlgorithms.linearSearch(products, 102);
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));

        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        Product result2 = SearchAlgorithms.binarySearch(products, 104);
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
    }
}