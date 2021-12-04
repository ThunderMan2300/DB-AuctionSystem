package com.System.Auction.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.*;

@Data
@Entity(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tid")
    private long transactionID;

    @Column(name = "buyer_rating")
    private long buyerRating;
    @Column(name = "seller_rating")
    private long sellerRating;
    @Column(name = "buyer_feedback")
    private String buyerFeedback;
    @Column(name = "seller_feedback")
    private String sellerFeedback;
    @Column(name = "tx_time")
    private Date transactionTime;

    //buyerID
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "buyer_id", nullable = false)
    private Member buyer;

    //sellerID
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private Member seller;

    //itemID
    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "item_id", nullable = false)
    private Item item;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "win_bid", nullable = false)
    private Bid winBid;
}
