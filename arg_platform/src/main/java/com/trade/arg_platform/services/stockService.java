package com.trade.arg_platform.services;

import com.trade.arg_platform.dao.stockRepository;
import com.trade.arg_platform.entity.stock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class stockService {

    @Autowired
    private stockRepository stockRepo;

    public stock Stock(stock stock) throws Exception
    {
       return stockRepo.save(stock);
    }

//    public stock sellstock(stock stock) throws Exception
//    {
//        return stockRepo.save(stock);
//    }


}
