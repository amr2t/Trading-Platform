package com.trade.arg_platform.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pid;
    private String stockName;
    private String buyingDate;
    private Integer quantity;
    private Integer totalAmount;

    @OneToMany
    @JsonIgnoreProperties({"portfolioList"})
    private List<user> user;
    @OneToOne(cascade = CascadeType.ALL)
    private stock stockList;

    public portfolio() {
    }

    public portfolio(Long pid, String stockName, String buyingDate, Integer quantity, Integer totalAmount, List<com.trade.arg_platform.entity.user> user, stock stockList) {
        this.pid = pid;
        this.stockName = stockName;
        this.buyingDate = buyingDate;
        this.quantity = quantity;
        this.totalAmount = totalAmount;
        this.user = user;
        this.stockList = stockList;
    }

    public Long getPid() {
        return pid;
    }

    public void setPid(Long pid) {
        this.pid = pid;
    }

    public String getStockName() {
        return stockName;
    }

    public void setStockName(String stockName) {
        this.stockName = stockName;
    }

    public String getBuyingDate() {
        return buyingDate;
    }

    public void setBuyingDate(String buyingDate) {
        this.buyingDate = buyingDate;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Integer totalAmount) {
        this.totalAmount = totalAmount;
    }

    public List<com.trade.arg_platform.entity.user> getUser() {
        return user;
    }

    public void setUser(List<com.trade.arg_platform.entity.user> user) {
        this.user = user;
    }

    public stock getStockList() {
        return stockList;
    }

    public void setStockList(stock stockList) {
        this.stockList = stockList;
    }

    @Override
    public String toString() {
        return "portfolio{" +
                "pid=" + pid +
                ", stockName='" + stockName + '\'' +
                ", buyingDate='" + buyingDate + '\'' +
                ", quantity=" + quantity +
                ", totalAmount=" + totalAmount +
                ", user=" + user +
                ", stockList=" + stockList +
                '}';
    }
}
