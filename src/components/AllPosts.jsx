import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search'; // Fixed SearchIcon import
import {
  Box,
  Card,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

const AllPosts = () => { // Fixed component name
  const [query, setQuery] = useState("");
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  const handleEdit = (id) => {
    navigate("/edit", {state: {id}});
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(` https://omaha-skin-usd-lists.trycloudflare.com/jobPost/keyword/${query}`); // Fixed template literal
      setPost(response.data);
    };
    const fetchInitialPosts = async () => {
      const response = await axios.get(" https://omaha-skin-usd-lists.trycloudflare.com/jobPost"); // Fixed URL
      setPost(response.data);
    }
    fetchInitialPosts();
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);

  const handleDelete = (id) => {
    async function deletePost() {
      await axios.delete(` https://omaha-skin-usd-lists.trycloudflare.com/jobPost/${id}`); // Fixed template literal
    }
    deletePost();
    window.location.reload();
  }

  return (
    <>
      <Grid container spacing={2} sx={{ margin: "2%" }}>
        <Grid item xs={12} sx={12} md={12} lg={12}>
          <Box>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                style: { 
                  color: darkMode ? 'var(--text-color)' : 'inherit',
                  backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'inherit'
                }
              }}
              placeholder="Search..."
              sx={{ 
                width: "75%", 
                padding: "2% auto",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.23)'
                  },
                  "&:hover fieldset": {
                    borderColor: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.23)'
                  }
                },
                "& .MuiInputLabel-root": {
                  color: darkMode ? 'var(--text-color)' : 'inherit'
                }
              }}
              fullWidth
              onChange={(e) => setQuery(e.target.value)}
            />
          </Box>
        </Grid>
        {post &&
          post.map((p) => {
            return (
              <Grid key={p.postId} item xs={12} md={6} lg={4}>
                <Card sx={{ 
                  padding: "3%", 
                  overflow: "hidden", 
                  width: "84%", 
                  backgroundColor: darkMode ? 'var(--card-bg)' : '#ADD8E6',
                  color: darkMode ? 'var(--text-color)' : 'inherit'
                }}>
                  <Typography        
                    variant="h5"
                    sx={{ fontSize: "2rem", fontWeight: "600", fontFamily: "sans-serif" }}
                  >
                    {p.postProfile}
                  </Typography>
                  <Typography sx={{ 
                    color: darkMode ? 'rgba(255, 255, 255, 0.7)' : "#585858", 
                    marginTop: "2%", 
                    fontFamily: "cursive" 
                  }} variant="body1">
                    Description: {p.postDesc}
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h6" sx={{ fontFamily: "unset", fontSize: "400" }}>
                    Experience: {p.reqExperience} years
                  </Typography>
                  <Typography sx={{ fontFamily: "serif", fontSize: "400" }} gutterBottom variant="body1">Skills: </Typography>
                  {p.postTechStack.map((s, i) => {
                    return (
                      <Typography variant="body1" gutterBottom key={i}>
                        {s} .
                        { }
                      </Typography>
                    );
                  })}
                  <DeleteIcon 
                    onClick={() => handleDelete(p.postId)} 
                    sx={{ cursor: 'pointer', marginRight: '8px', color: darkMode ? 'var(--text-color)' : 'inherit' }}
                  />
                  <EditIcon 
                    onClick={() => handleEdit(p.postId)} 
                    sx={{ cursor: 'pointer', color: darkMode ? 'var(--text-color)' : 'inherit' }}
                  />
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default AllPosts; // Fixed export name