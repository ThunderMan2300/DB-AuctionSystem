package com.System.Auction.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.*;

@Data
@Entity(name = "item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "item_id")
    private long itemID;

    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name = "start_price")
    private double startPrice;
    @Column(name = "bid_increment")
    private double bidIncrement;
    @Column(name = "start_time")
    private Date startTime;
    @Column(name = "end_time")
    private Date endTime;
    @Column(name = "img_url")
    private String imgURL;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private Member seller;

    @JsonIgnore
    @OneToOne(mappedBy = "item")
    private Transaction transaction;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @JsonIgnore
    @OneToMany(mappedBy = "item")
    private List<Bid> bidList;
}
