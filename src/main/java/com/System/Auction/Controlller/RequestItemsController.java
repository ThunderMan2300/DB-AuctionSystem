package com.System.Auction.Controlller;

import com.System.Auction.Repositories.ItemRepository;
import com.System.Auction.Services.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/items")
public class RequestItemsController {
    Logger logger = LoggerFactory.getLogger(RequestItemsController.class);

    @Autowired
    ItemRepository repository;

    @GetMapping("/")
    @CrossOrigin
    public Response allActiveItems() {
        Date date = new Date(System.currentTimeMillis());
        logger.info("Here");
        return new Response(HttpStatus.OK.toString(), "",
                repository.findByEndTimeGreaterThan(date));
    }
}
