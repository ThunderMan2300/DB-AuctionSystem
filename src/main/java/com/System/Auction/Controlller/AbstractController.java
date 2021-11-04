package com.System.Auction.Controlller;

import com.System.Auction.Entities.Member;
import com.System.Auction.Services.AbstractServices;
import com.System.Auction.Services.Response;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.*;

public abstract class AbstractController<T> {
    AbstractServices services;

    @GetMapping(path = "/")
    public Response findAll() {
        return services.findAll();
    }

    @GetMapping(path = "/{id}")
    public Response findById(@RequestBody long id) {
        return services.findById(id);
    }

    @PostMapping(path = "/new")
    public Response save(@RequestBody T object) {
        return services.save(object);
    }
}
