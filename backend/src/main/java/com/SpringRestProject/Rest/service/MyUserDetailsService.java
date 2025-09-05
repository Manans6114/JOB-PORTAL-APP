//package com.SpringRestProject.Rest.service;
//
//
//
//import com.SpringRestProject.Rest.Repo.UserRepo;
//import com.SpringRestProject.Rest.Model.User;
//import com.SpringRestProject.Rest.Model.UserPrincipal;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//
//@Service
//public class MyUserDetailsService implements UserDetailsService {
//
//    @Autowired
//    private UserRepo repo;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//
//        User user = repo.findByUsername(username);
//
//        if (user == null) {
//            System.out.println("user not found   404");
//            throw new UsernameNotFoundException("User 404");
//        }
//
//        return new UserPrincipal(user);
//
//    }
//}
