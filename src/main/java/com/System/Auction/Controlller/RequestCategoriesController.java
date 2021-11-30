package com.System.Auction.Controlller;

import com.System.Auction.Entities.*;
import com.System.Auction.Repositories.CategoryRepository;
import com.System.Auction.Repositories.SuperCategoryRepository;
import com.System.Auction.Services.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/categories")
public class RequestCategoriesController {
    Logger logger = LoggerFactory.getLogger(RequestCategoriesController.class);

    @Autowired
    SuperCategoryRepository superCategoryRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("/")
    @CrossOrigin
    public Response getAllSuperCategories() {
        logger.info("Here");
        return new Response(HttpStatus.OK.toString(), "",
                superCategoryRepository.findAll());
    }

    @GetMapping("/{supcat_id}")
    @CrossOrigin
    public Response getAllCategories(@PathVariable("supcat_id") long supcat_id) {
        if (!superCategoryRepository.existsById(supcat_id)) {
          return new Response(HttpStatus.NOT_FOUND.toString(), "",
                  null);
        }
        SuperCategory searchSuperCategory = superCategoryRepository.findById(supcat_id).get();
        logger.info("Here");
        return new Response(HttpStatus.OK.toString(), "",
                categoryRepository.findBySuperCategory(searchSuperCategory));
    }
}
