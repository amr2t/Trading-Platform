package com.trade.arg_platform.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "STOCKS")
public class stock {
    @Id
    private String symbol;
    private String companyName;
    private String sector;
    private String industry;

    @OneToMany(mappedBy = "stock")
    private List<holding> holdingList;

    @OneToMany(mappedBy = "stock")
    private List<order> orderList;

    public stock() {
    }


}
