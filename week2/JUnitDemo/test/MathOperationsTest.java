package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class MathOperationsTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println("Setup method executed");
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        System.out.println("Teardown method executed");
        calculator = null;
    }

    @Test
    public void testAddition() {
        int a = 10;
        int b = 5;

        int result = calculator.add(a, b);

        assertEquals(15, result);
    }

    @Test
    public void testAnotherAddition() {
        int a = 7;
        int b = 8;

        int result = calculator.add(a, b);

        assertEquals(15, result);
    }
}