package com.System.Auction.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity(name = "seller")
public class Seller {
    @Id
    @Column(name = "seller_id")
    private long sellerID;

    @Column(name = "bank_acct_num")
    private String bankAccount;

    @Column(name = "bank_routing_num")
    private String bankRouting;

    @OneToOne(mappedBy = "seller", cascade = CascadeType.ALL)
    private Member member;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "itemID")
    private Item item;
}
