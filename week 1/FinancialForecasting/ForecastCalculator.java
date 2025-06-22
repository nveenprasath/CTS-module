package com.forecasting;

public class ForecastCalculator {

    public static double forecastRecursive(double presentValue, double rate, int years) {
        if (years == 0) return presentValue;
        return forecastRecursive(presentValue * (1 + rate), rate, years - 1);
    }

    public static double forecastOptimized(double presentValue, double rate, int years) {
        return presentValue * Math.pow(1 + rate, years);
    }
}