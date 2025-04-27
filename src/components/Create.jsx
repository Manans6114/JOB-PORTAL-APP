import React, { useState, useContext } from "react";
import axios from "axios";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from '../ThemeContext';

const initial = { postId:"", postProfile: "", reqExperience: 0, postTechStack: [], postDesc:"" };

const Create = () => {
  const skillSet = [
    {
      name: "Javascript"
    },
    {
      name: "Java"
    },
    {
      name: "Python"
    },
    {
      name: "Django"
    },
    {
      name: "Rust"
    }
  ];

  const navigate = useNavigate();
  const [form, setForm] = useState(initial);
  const { darkMode } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(" https://omaha-skin-usd-lists.trycloudflare.com/jobPost", form)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate('/');
  };

  const { postId, postProfile, reqExperience, postDesc } = form;

  const handleChange = (e) => {
    setForm({...form, postTechStack: [...form.postTechStack, e.target.value]});
  }

  return (
    <Paper 
      sx={{ 
        padding: "1%",
        backgroundColor: darkMode ? 'var(--bg-color)' : 'inherit',
        color: darkMode ? 'var(--text-color)' : 'inherit'
      }} 
      elevation={0}
    >
      <Typography 
        sx={{ 
          margin: "3% auto",
          color: darkMode ? 'var(--text-color)' : 'inherit'
        }} 
        align="center" 
        variant="h5"
      >
        Create New Post
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            min="0"
            type="number"
            sx={{ 
              width: "50%", 
              margin: "2% auto",
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
              },
              "& .MuiOutlinedInput-input": {
                color: darkMode ? 'var(--text-color)' : 'inherit'
              }
            }}
            onChange={(e) => setForm({ ...form, postId: e.target.value })}
            label="Enter your Post ID"
            variant="outlined"
            value={postId}
          />
          <TextField
            type="string"
            sx={{ 
              width: "50%", 
              margin: "2% auto",
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
              },
              "& .MuiOutlinedInput-input": {
                color: darkMode ? 'var(--text-color)' : 'inherit'
              }
            }}
            required
            onChange={(e) => setForm({ ...form, postProfile: e.target.value })}
            label="Job-Profile"
            variant="outlined"
            value={postProfile}
          />
          <TextField
            min="0"
            type="number"
            sx={{ 
              width: "50%", 
              margin: "2% auto",
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
              },
              "& .MuiOutlinedInput-input": {
                color: darkMode ? 'var(--text-color)' : 'inherit'
              }
            }}
            required
            onChange={(e) => setForm({ ...form, reqExperience: e.target.value })}
            label="Years of Experience"
            variant="outlined"
            value={reqExperience}
          />
          <TextField
            type="string"
            sx={{ 
              width: "50%", 
              margin: "2% auto",
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
              },
              "& .MuiOutlinedInput-input": {
                color: darkMode ? 'var(--text-color)' : 'inherit'
              }
            }}
            required
            multiline
            rows={4}
            onChange={(e) => setForm({ ...form, postDesc: e.target.value })}
            label="Job-desc"
            variant="outlined"
            value={postDesc}
          />
          <Box sx={{ margin:"1% auto", color: darkMode ? 'var(--text-color)' : 'inherit' }}>
            <h3>Please mention required skills</h3>
            <ul>
              {skillSet.map(({ name }, index) => {
                return (
                  <li key={index}>
                    <div>
                      <div>
                        <input
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          name={name}
                          value={name}
                          onChange={handleChange}  
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Box>
          <Button
            sx={{ 
              width: "50%", 
              margin: "2% auto",
              backgroundColor: darkMode ? '#1976d2' : undefined
            }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default Create;