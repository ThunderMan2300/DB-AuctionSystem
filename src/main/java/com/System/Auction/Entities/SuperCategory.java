package com.System.Auction.Entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity(name = "supercategory")
public class SuperCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "supcat_id")
    private long supcatID;

    private String name;
    private String description;

    @OneToMany(mappedBy = "superCategory")
    private List<Category> categoryList;
}
