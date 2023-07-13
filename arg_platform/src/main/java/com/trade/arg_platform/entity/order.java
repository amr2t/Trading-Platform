package com.trade.arg_platform.entity;


import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "order")
public class order {



        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @ManyToOne
        @JoinColumn(name = "user_id")
        private user user;

        @ManyToOne
        @JoinColumn(name = "stock_symbol")
        private stock stock;

        private int quantity;
        private BigDecimal price;
        private LocalDateTime orderDateTime;

    public order(Long id, user user, com.trade.arg_platform.entity.stock stock, int quantity, BigDecimal price, LocalDateTime orderDateTime) {
        this.id = id;
        this.user = user;
        this.stock = stock;
        this.quantity = quantity;
        this.price = price;
        this.orderDateTime = orderDateTime;
    }

    public order() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public user getUser() {
        return user;
    }

    public void setUser(user user) {
        this.user = user;
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

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public LocalDateTime getOrderDateTime() {
        return orderDateTime;
    }

    public void setOrderDateTime(LocalDateTime orderDateTime) {
        this.orderDateTime = orderDateTime;
    }

    @Override
    public String toString() {
        return "order{" +
                "id=" + id +
                ", user=" + user +
                ", stock=" + stock +
                ", quantity=" + quantity +
                ", price=" + price +
                ", orderDateTime=" + orderDateTime +
                '}';
    }
}

