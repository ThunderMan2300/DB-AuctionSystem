package com.System.Auction.Controlller;

import com.System.Auction.Entities.*;
import com.System.Auction.Repositories.BuyerRepository;
import com.System.Auction.Repositories.MemberRepository;
import com.System.Auction.Repositories.SellerRepository;
import com.System.Auction.Services.Response;
import lombok.extern.java.Log;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/signup")
public class MemberSignup {
    @Autowired
    MemberRepository repository;

    @Autowired
    BuyerRepository buyerRepository;

    @Autowired
    SellerRepository sellerRepository;

    @PostMapping("/")
    public Response newMember(@RequestBody Member member) {
        return new Response(HttpStatus.OK.toString(), "", repository.save(member));
    }

    @PostMapping("/buyer")
    public Response newBuyer(@RequestBody Buyer buyer) {
        if(buyerRepository.existsById(buyer.getBuyerID())) {
            return null; //Error
        }
        else if (!repository.existsById(buyer.getBuyerID())) {
            return null; //Error
        }
        buyer.setMemberProfile(repository.findById(buyer.getBuyerID()).get());
        return new Response(HttpStatus.OK.toString(), "", buyerRepository.save(buyer));
    }

    @PostMapping("/seller")
    public Response newSeller(@RequestBody Seller seller) {
        if(sellerRepository.existsById(seller.getSellerID())) {
            return null; //Error
        }
        else if (!repository.existsById(seller.getSellerID())) {
            return null; //Error
        }
        seller.setMemberProfile(repository.findById(seller.getSellerID()).get());
        return new Response(HttpStatus.OK.toString(), "", sellerRepository.save(seller));
    }
}
