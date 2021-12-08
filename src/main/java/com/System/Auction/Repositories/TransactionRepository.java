package com.System.Auction.Repositories;

import com.System.Auction.Entities.Transaction;
import com.System.Auction.Entities.Member;
import com.System.Auction.Entities.Item;
import org.springframework.data.repository.CrudRepository;

import java.util.*;

public interface TransactionRepository extends CrudRepository<Transaction, Long> {
    List<Transaction> findBySellerOrBuyer(Member seller, Member buyer);
    boolean existsByItem(Item item);
}
