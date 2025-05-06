import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Divider, Chip, Avatar } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Home() {
    return (
        <>
            <div id='home' style={{position: "fixed", top: "0%", width: "100%", background: "white", zIndex: 1000, paddingBottom: '2%'}}>
                <Toolbar sx={{marginLeft: '6.5%', marginTop: '4%'}}>
                    <Typography
                        variant="h4"
                        sx={{
                            textDecoration: 'none',
                            color: 'teal',
                            fontSize: 45,
                            margin: '1%'
                        }}
                    >
                        <b>Portfolio</b>
                    </Typography>
                    
                    <div style={{paddingLeft: '40%', minWidth: '30%'}}>
                        <Button onClick={function() {window.location.href="#"}} sx={{margin: '1%', fontSize: 17}}><b>Home</b></Button>
                        <Button onClick={function() {window.location.href="#aboutMe"}} sx={{margin: '1%', color: 'black', fontSize: 16}}><b>About</b></Button>
                        <Button href="Resume.txt" download sx={{margin: '1%', color: 'black', fontSize: 16}}><b>Resume</b></Button>
                        <Button onClick={function() {window.location.href="#contact"}} sx={{margin: '1%', color: 'black', fontSize: 16}}><b>Contact</b></Button>
                    </div>
                </Toolbar>
            </div>

            <div style={{marginTop: '16%'}}>
                <Typography variant="h4" sx={{color: 'rgb(50, 140, 200)', marginTop: '4%', marginLeft: '9%', fontSize: 32, fontWeight: 549}}>
                    HELLO
                </Typography>
                <Typography variant="h4" sx={{color: 'rgb(50, 140, 200)', marginTop: '1.75%', marginLeft: '9%', fontSize: 42, fontWeight: 549}}>
                    I'M <b>JAGADISH</b> U
                </Typography>
                <Typography variant="h4" sx={{color: 'rgb(50, 140, 200)', marginTop: '0.5%', marginLeft: '9%', fontSize: 42, fontWeight: 549}}>
                    <b>A</b> WEB DEVELOPER
                </Typography>
                <Typography variant="h4" sx={{color: 'rgb(50, 140, 200)', marginTop: '1.5%', marginLeft: '9%', fontSize: 20, fontWeight: 549, maxWidth: '27%'}}>
                    I build fast, responsive websites using clean code, modern tools, and a focus on user experience.
                </Typography>

                <Button href="Resume.txt" download variant="contained" sx={{marginTop: '2.5%', marginLeft: '9%', padding: '1%', paddingLeft: '2%', paddingRight: '2%'}}>
                    Resume
                </Button>
            </div>

            <div style={{position: 'absolute', top: '32%', left: '58%'}}>
                <Avatar sx={{ width: 320, height: 320 }} alt="Jagadish U" src="/photo.jpg"/>
            </div>

            <div id="aboutMe" style={{paddingBottom: '9%', position: 'absolute', top: '100%', padding: '9%', paddingTop: '5%', background: 'white', width: '100%', fontWeight: 549}}>
                <Typography variant="h4">
                    <b>About Me</b>
                </Typography>

                <Typography sx={{marginTop: '4%', width: '80%', fontSize: 20, color: 'rgb(90, 90, 90)'}}>
                    As a web developer, I specialize in creating responsive, user-friendly websites and applications 
                    that deliver seamless digital experiences. My work involves translating design concepts into functional 
                    code using modern web technologies like HTML, CSS, JavaScript, and frameworks such as React or Vue. 
                    I take pride in writing clean, efficient code and ensuring that the final product looks great on all 
                    devices and performs reliably across browsers.
                </Typography>

                <Typography sx={{marginTop: '2%', width: '80%', fontSize: 20, color: 'rgb(90, 90, 90)'}}>
                    I specialize in front-end technologies like React, and JavaScript, 
                    and I love solving real-world problems through smart, intuitive web solutions. Over time, 
                    I’ve built a variety of projects — from to-do apps to grocery management systems — each one 
                    teaching me something new.
                </Typography>

                <Typography sx={{marginTop: '2%', width: '80%', fontSize: 20, color: 'rgb(90, 90, 90)'}}>
                    Outside of development, I’m always exploring new tools, learning design trends, 
                    or planning my next big project. I believe great design is about simplicity and 
                    purpose, and I strive to bring that philosophy into everything I create.
                </Typography>
            </div>

            <div id="contact" style={{position: 'absolute', top: '185%', padding: '9%', paddingTop: '5%', background: 'rgb(20, 20, 20)', width: '100%', fontWeight: 549, maxHeight: '27%'}}>
                <Typography variant="h4" sx={{color: 'white'}}>
                    <b>Contact Me</b>
                </Typography>

                <Typography sx={{marginTop: '2%', color: "white", fontSize: 25}}>
                    <EmailIcon ></EmailIcon> <b>jagadishu@gmail.com</b>
                </Typography>

                <Typography sx={{marginTop: '1%', color: "white", fontSize: 25}}>
                    <LocalPhoneIcon></LocalPhoneIcon> <b>3343202020</b>
                </Typography>

                <Typography sx={{marginTop: '5%', color: "white", fontSize: 25}}>
                    All Rights Reserved By - Jagadish U
                </Typography>
            </div>
        </>
    )
}

export default Home