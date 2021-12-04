package com.System.Auction.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.*;

@Data
@Entity(name = "bid")
public class Bid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bid_id")
    private long bidID;

    @Column(name = "price")
    private double price;

    @Column(name = "bid_time")
    private Date bidTime;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "buyer_id", nullable = false)
    private Member buyer;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "item_id", nullable = false)
    private Item item;

    @JsonIgnore
    @OneToOne(mappedBy = "winBid")
    private Transaction transaction;
}
