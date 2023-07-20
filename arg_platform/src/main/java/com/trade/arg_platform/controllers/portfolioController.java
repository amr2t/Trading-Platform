package com.trade.arg_platform.controllers;

import com.trade.arg_platform.entity.portfolio;
import com.trade.arg_platform.services.portfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class portfolioController {

    @Autowired
    private portfolioService portfolioService;

    @PostMapping("/addStock")
    @CrossOrigin(origins="http://localhost:4200")
    public portfolio addStock(@RequestBody portfolio portfolio) throws Exception
    {
        return portfolioService.addStocks(portfolio);
    }
}
