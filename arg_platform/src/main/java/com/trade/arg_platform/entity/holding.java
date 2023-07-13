package com.trade.arg_platform.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "holdings")
public class holding {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "portfolio_id")
    private portfolio portfolio;

    @ManyToOne
    @JoinColumn(name = "stock_symbol")
    private stock stock;
    private int quantity;
    private BigDecimal purchasePrice;
    private LocalDate purchaseDate;

    public holding() {
    }

    public holding(Long id, com.trade.arg_platform.entity.portfolio portfolio,
                   com.trade.arg_platform.entity.stock stock, int quantity, BigDecimal purchasePrice, LocalDate purchaseDate) {
        this.id = id;
        this.portfolio = portfolio;
        this.stock = stock;
        this.quantity = quantity;
        this.purchasePrice = purchasePrice;
        this.purchaseDate = purchaseDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public com.trade.arg_platform.entity.portfolio getPortfolio() {
        return portfolio;
    }

    public void setPortfolio(com.trade.arg_platform.entity.portfolio portfolio) {
        this.portfolio = portfolio;
    }

    public com.trade.arg_platform.entity.stock getStock() {
        return stock;
    }

    public void setStock(com.trade.arg_platform.entity.stock stock) {
        this.stock = stock;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPurchasePrice() {
        return purchasePrice;
    }

    public void setPurchasePrice(BigDecimal purchasePrice) {
        this.purchasePrice = purchasePrice;
    }

    public LocalDate getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(LocalDate purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    @Override
    public String toString() {
        return "holding{" +
                "id=" + id +
                ", portfolio=" + portfolio +
                ", stock=" + stock +
                ", quantity=" + quantity +
                ", purchasePrice=" + purchasePrice +
                ", purchaseDate=" + purchaseDate +
                '}';
    }
}
