package com.trade.arg_platform.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class stock {
    @Id
    private int sid;
    private boolean bs;
//    private String smallName;
//    private String companyName;
//    private String proName;

    @OneToOne(mappedBy = "stockList")
    @JsonIgnoreProperties({"stockList"})
    private portfolio portfolio;

    public stock() {
    }

    public stock(int sid, boolean bs, com.trade.arg_platform.entity.portfolio portfolio) {
        this.sid = sid;
        this.bs = bs;
        this.portfolio = portfolio;
    }

    public int getSid() {
        return sid;
    }

    public void setSid(int sid) {
        this.sid = sid;
    }

    public boolean isBs() {
        return bs;
    }

    public stock setBs(boolean bs) {
        this.bs = bs;
        return null;
    }

    public com.trade.arg_platform.entity.portfolio getPortfolio() {
        return portfolio;
    }

    public void setPortfolio(com.trade.arg_platform.entity.portfolio portfolio) {
        this.portfolio = portfolio;
    }

    @Override
    public String toString() {
        return "stock{" +
                "sid=" + sid +
                ", bs=" + bs +
                ", portfolio=" + portfolio +
                '}';
    }
}
