package com.System.Auction.Controlller;

import com.System.Auction.Entities.Item;
import com.System.Auction.Entities.Member;
import com.System.Auction.Repositories.ItemRepository;
import com.System.Auction.Repositories.MemberRepository;
import com.System.Auction.Repositories.SellerRepository;
import com.System.Auction.Services.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/items")
public class RequestItemsController {
    Logger logger = LoggerFactory.getLogger(RequestItemsController.class);

    @Autowired
    ItemRepository repository;
    @Autowired
    MemberRepository memberRepository;

    @GetMapping("/")
    @CrossOrigin
    public Response allActiveItems() {
        Date date = new Date(System.currentTimeMillis());
        logger.info("Here");
        return new Response(HttpStatus.OK.toString(), "",
                repository.findByEndTimeGreaterThan(date));
    }

    @Transactional
    @PostMapping("/new")
    @CrossOrigin
    public Response insertItem(@RequestBody Map<String, String> json) {
        Item item = new Item();
        item.setTitle(json.get("title"));
        item.setStartPrice(Double.parseDouble(json.get("startPrice")));
        item.setImgURL(json.get("imgURL"));
        //item.setCategory();
        item.setBidIncrement( Math.ceil(item.getStartPrice() / 50) * 5 );
        item.setSeller(memberRepository.findByEmailEqualsAndPasswordEquals(json.get("email"), json.get("password")));
        item.setStartTime(new Date(System.currentTimeMillis()));
        item.setEndTime(new Date(System.currentTimeMillis() + 604800000 ) );

        return new Response(HttpStatus.OK.toString(), "",
                repository.save(item));
    }
}
