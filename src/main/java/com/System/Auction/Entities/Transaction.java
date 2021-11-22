package com.System.Auction.Entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
    //sellerID
    //itemID
}
