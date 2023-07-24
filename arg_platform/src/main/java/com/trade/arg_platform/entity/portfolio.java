package com.trade.arg_platform.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
public class portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pid;
    private String stockName;
    private String buyingDate;
    private Integer quantity;
    private Integer totalAmount;
    private boolean bs;

    @ManyToOne
    @JsonIgnoreProperties({"portfolioList"})
    private user user;

    public portfolio() {
    }

    public portfolio(Long pid, String stockName, String buyingDate, Integer quantity, Integer totalAmount, boolean bs, com.trade.arg_platform.entity.user user) {
        this.pid = pid;
        this.stockName = stockName;
        this.buyingDate = buyingDate;
        this.quantity = quantity;
        this.totalAmount = totalAmount;
        this.bs = bs;
        this.user = user;
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

    public boolean isBs() {
        return bs;
    }

    public void setBs(boolean bs) {
        this.bs = bs;
    }

    public com.trade.arg_platform.entity.user getUser() {
        return user;
    }

    public void setUser(com.trade.arg_platform.entity.user user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "portfolio{" +
                "pid=" + pid +
                ", stockName='" + stockName + '\'' +
                ", buyingDate='" + buyingDate + '\'' +
                ", quantity=" + quantity +
                ", totalAmount=" + totalAmount +
                ", bs=" + bs +
                ", user=" + user +
                '}';
    }
}
