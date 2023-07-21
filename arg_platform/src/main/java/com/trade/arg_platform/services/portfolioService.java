package com.trade.arg_platform.services;

import com.trade.arg_platform.dao.portfolioRepository;
import com.trade.arg_platform.entity.portfolio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class portfolioService {

    @Autowired
    private portfolioRepository portfolioRepo;

    public portfolio addStocks(portfolio portfolio) throws Exception
    {
        return  portfolioRepo.save(portfolio);

    }

    public void sellStock(Long pid){
        portfolioRepo.deleteById(pid);
    }
}
