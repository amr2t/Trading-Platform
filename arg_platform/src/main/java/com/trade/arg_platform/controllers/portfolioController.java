package com.trade.arg_platform.controllers;

import com.trade.arg_platform.entity.portfolio;
import com.trade.arg_platform.services.portfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:4200")
public class portfolioController {

    @Autowired
    private portfolioService portfolioService;

    @PostMapping("/addStock")
    @CrossOrigin(origins="http://localhost:4200")
    public portfolio addStock(@RequestBody portfolio portfolio) throws Exception
    {
        System.out.println("Hiii");
        return portfolioService.addStocks(portfolio);
    }

    @DeleteMapping("/sellStocks/{pid}")
    @CrossOrigin(origins="http://localhost:4200")
    public boolean sellStocks(@PathVariable ("pid") Long pid)
    {
        portfolioService.sellStock(pid);
        return true;
    }
}
