package com.System.Auction.Repositories;

import com.System.Auction.Entities.Item;
import com.System.Auction.Entities.Category;
import org.springframework.data.repository.CrudRepository;

import java.util.*;

public interface ItemRepository extends CrudRepository<Item, Long> {
    List<Item> findByEndTimeGreaterThan(Date date);
    List<Item> findByCategoryAndTitleLikeIgnoreCaseAndEndTimeGreaterThan(Category category, String keyword, Date date);
}
