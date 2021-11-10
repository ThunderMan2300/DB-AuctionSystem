package com.System.Auction.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@Entity(name = "buyer")
public class Buyer {
    @Id
    @Column(name = "buyer_id")
    private long buyerID;

    @Column(name = "ship_addr")
    private String shippingAddress;

    @OneToOne(mappedBy = "buyer", cascade = CascadeType.ALL)
    @JoinColumn(name = "MID")
    private Member member;

    @OneToMany(mappedBy = "buyer")
    private List<Bid> bidList;
}
