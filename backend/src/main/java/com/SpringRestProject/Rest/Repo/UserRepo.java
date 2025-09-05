package com.SpringRestProject.Rest.Repo;


import com.SpringRestProject.Rest.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {

    User findByUsername(String username);


}

