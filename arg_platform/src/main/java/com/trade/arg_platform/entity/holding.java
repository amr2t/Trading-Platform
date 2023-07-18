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
    private portfolio portfolio;

    @ManyToOne
    private stock stock;
    private int quantity;
    private BigDecimal purchasePrice;
    private LocalDate purchaseDate;

    public holding() {
    }
}
