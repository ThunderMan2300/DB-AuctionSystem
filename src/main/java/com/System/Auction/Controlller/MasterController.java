package com.System.Auction.Controlller;

import com.System.Auction.Entities.*;
import com.System.Auction.Repositories.BidRepository;
import com.System.Auction.Repositories.ItemRepository;
import com.System.Auction.Repositories.MemberRepository;
import com.System.Auction.Repositories.TransactionRepository;
import com.System.Auction.Services.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/auction")
public class MasterController {

    @Autowired
    ItemRepository itemRepository;
    @Autowired
    MemberRepository memberRepository;
    @Autowired
    BidRepository bidRepository;
    @Autowired
    TransactionRepository transactionRepository;

    @Transactional
    @PostMapping("/bid")
    public Response newBid(@RequestBody Map<String, String> json) {
        Item item = itemRepository.findById(Long.parseLong(json.get("itemID"))).get();
        Member member = memberRepository.findByEmailEquals(json.get("email"));
        double bid = Double.parseDouble(json.get("display"));

        if(item == null || member == null) {
            return null;
        }
        else if(item.getEndTime().before(new Date(System.currentTimeMillis()))) {
            return null;
        }
        else {
            for(Bid x : item.getBidList()) {
                if(x.getPrice() > bid)
                    return null;
            }

            Bid newBid = new Bid();
            newBid.setBidTime(new Date(System.currentTimeMillis()));
            newBid.setBuyer(member);
            newBid.setItem(item);
            newBid.setPrice(bid);
            bidRepository.save(newBid);
            List<Bid> tmp = item.getBidList();
            tmp.add(newBid);
            item.setBidList(tmp);
            double increment = (Math.ceil( bid / 50) * 5) == 0 ? 5 : (Math.ceil(bid / 50) * 5);
            item.setBidIncrement(increment);
            itemRepository.save(item);
        }

        return null;
    }

    @GetMapping("/bids")
    public Response getBids(@RequestParam String email, @RequestParam String password) {
        Member member = memberRepository.findByEmailEqualsAndPasswordEquals(email, password);
        if(member == null)
            return null;
        return new Response(HttpStatus.OK.toString(), "", member.getBidList());
    }

    @GetMapping("/items")
    public Response getItems(@RequestParam String email, @RequestParam String password) {
        Member member = memberRepository.findByEmailEqualsAndPasswordEquals(email, password);
        if(member == null)
            return null;
        return new Response(HttpStatus.OK.toString(), "", member.getAuctionList());
    }

    @Transactional
    @GetMapping("/transactions")
    public Response getTransactions(@RequestParam String email, @RequestParam String password) {
        Date date = new Date(System.currentTimeMillis());
        List<Item> completedAuctions = itemRepository.findByEndTimeLessThanEqual(date);
        completedAuctions.forEach((item) -> {
            if (!transactionRepository.existsByItem(item)) {
                Bid winBid = bidRepository.findFirstByItemOrderByPriceDescBidTimeDesc(item);
                Transaction newTransaction = new Transaction();
                newTransaction.setSeller(item.getSeller());
                newTransaction.setBuyer(winBid.getBuyer());
                newTransaction.setItem(item);
                newTransaction.setWinBid(winBid);
                newTransaction.setTransactionTime(new Date(System.currentTimeMillis()));
                transactionRepository.save(newTransaction);
            }
        });
        Member member = memberRepository.findByEmailEqualsAndPasswordEquals(email, password);
        if(member == null)
            return null;
        return new Response(HttpStatus.OK.toString(), "", transactionRepository.findBySellerOrBuyer(member, member));
    }
}
