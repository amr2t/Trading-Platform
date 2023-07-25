package com.trade.arg_platform.services;

import com.trade.arg_platform.dao.portfolioRepository;
import com.trade.arg_platform.dao.userRepository;
import com.trade.arg_platform.entity.portfolio;
import com.trade.arg_platform.entity.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class portfolioService {

    @Autowired
    private portfolioRepository portfolioRepo;

    @Autowired
    private userRepository userRepo;

    public portfolio addStocks(portfolio portfolio) throws Exception
    {

        return  portfolioRepo.save(portfolio);

    }

    public portfolio sellStocks (portfolio portfolio) throws Exception
    {
        return portfolioRepo.save(portfolio);
    }

//    public Cart getUserCart(UUID id) {
//        User tempUser = repo.findById(id).orElse(null);
//        Cart tempObj = tempUser.getCart();
//        return tempObj;
//    }

    public List<portfolio> showStocks(long uid)
    {
        user tempUser = userRepo.findById(uid).orElse(null);
        List<portfolio> tempPortfolioList = tempUser.getPortfolioList();
        return tempPortfolioList;

    }

//    public double getAmount(long uid) {
//        return portfolioRepo.amount(uid);
//    }

}
