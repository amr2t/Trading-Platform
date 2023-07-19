package com.trade.arg_platform.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class stock {
    @Id
    private int sid;
    private String smallName;
    private String companyName;
    private String proName;

    @ManyToOne
    private portfolio portfolio;

    public stock() {
    }

    public stock(int sid, String smallName, String companyName, String proName, portfolio portfolio) {
        this.sid = sid;
        this.smallName = smallName;
        this.companyName = companyName;
        this.proName = proName;
        portfolio = portfolio;
    }

    public int getSid() {
        return sid;
    }

    public void setSid(int sid) {
        this.sid = sid;
    }

    public String getSmallName() {
        return smallName;
    }

    public void setSmallName(String smallName) {
        this.smallName = smallName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getProName() {
        return proName;
    }

    public void setProName(String proName) {
        this.proName = proName;
    }

    public portfolio getPortfolio() {
        return portfolio;
    }

    public void setPortfolio(portfolio portfolio) {
        portfolio = portfolio;
    }

    @Override
    public String toString() {
        return "stock{" +
                "sid=" + sid +
                ", smallName='" + smallName + '\'' +
                ", companyName='" + companyName + '\'' +
                ", proName='" + proName + '\'' +
                ", portfolio=" + portfolio +
                '}';
    }
}
