package com.System.Auction.Repositories;

import com.System.Auction.Entities.Category;
import com.System.Auction.Entities.SuperCategory;
import org.springframework.data.repository.CrudRepository;

import java.util.*;

public interface CategoryRepository extends CrudRepository<Category, Long> {
    List<Category> findBySuperCategory(SuperCategory superCategory);
}
