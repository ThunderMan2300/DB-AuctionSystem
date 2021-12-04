package com.System.Auction.Services;

import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;

public abstract class AbstractServices<T> {
    protected CrudRepository repository;

    public Response findAll() {
        return new Response(HttpStatus.OK.toString(), "", repository.findAll());
    }

    public Response findById(long id) {
        return new Response(HttpStatus.OK.toString(), "", repository.findById(id));
    }

    public Response save(T object) {
        return new Response(HttpStatus.OK.toString(), "", repository.save(object));
    }
}