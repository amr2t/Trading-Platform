package com.trade.arg_platform.controllers;


import com.trade.arg_platform.entity.stock;
import com.trade.arg_platform.services.stockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class stocksController
{
    @Autowired
    private stockService stockService;

    @PostMapping("/Stock")
    @CrossOrigin(origins="http://localhost:4200")
    public void Stock(@RequestBody stock stock) throws Exception
    {

        //System.out.println("Hi");
        stockService.Stock(stock);
    }

//    @PostMapping("/sellstock")
//    @CrossOrigin(origins="http://localhost:4200")
//    public void sellstock(@RequestBody stock stock) throws Exception
//    {
//
//        //System.out.println("Hi");-
//        stockService.sellstock(stock);
//    }
}
