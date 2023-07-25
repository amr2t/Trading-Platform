package com.trade.arg_platform.controllers;

import com.trade.arg_platform.entity.portfolio;
import com.trade.arg_platform.services.portfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class portfolioController {

//    stock myStock = new stock();

    @Autowired
    private portfolioService portfolioService;
//    @Autowired
//    private stockService stockService;

    @PostMapping("/addStock")
    @CrossOrigin(origins="http://localhost:4200")
    public portfolio addStock(@RequestBody portfolio portfolio) throws Exception
    {

        //System.out.println("Hi");
        return portfolioService.addStocks(portfolio);
    }

    @PostMapping("/sellStocks")
    @CrossOrigin(origins="http://localhost:4200")
    public portfolio sellStocks(@RequestBody portfolio portfolio) throws Exception
    {

        return portfolioService.sellStocks(portfolio);
    }

    @GetMapping("/showStocks/{uid}")
    @CrossOrigin(origins="http://localhost:4200")
    public List<portfolio> showStocks(@PathVariable("uid") long uid)
    {
        return portfolioService.showStocks(uid);
    }

}
