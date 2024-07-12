import React from 'react'
import "./Home.css"
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="top-navbar">
                    <img src="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" />
                    <div className="but">
                        <Link to={"/Login"} className='button'>Login</Link>
                        <Link to={"/Register"} className='button'>Registration</Link>
                    </div>
                </div>
                <div className="mid">
                    <div className="mid-1">
                        <p>EchoSphere</p>
                        <h2>Best Social Media PlateForm</h2>
                        <p>"Connect, Share, Inspire - Your World, Your Community"</p>
                        <Link to={"/Login"} className='download-button'>Start Endless <HikingOutlinedIcon fontSize='medium' /></Link>
                    </div>
                    <div className="mid-2">
                        <div className="content1">
                            <img src="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nobis quod possimus corporis fugit repudiandae, velit rem iusto autem perspiciatis vero, dolore ipsa impedit doloribus optio aut aliquid illo voluptates? Recusandae animi qui perspiciatis.</p>
                        </div>
                        <div className="content2">
                            <img src="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nobis quod possimus corporis fugit repudiandae, velit rem iusto autem perspiciatis vero, dolore ipsa impedit doloribus optio aut aliquid illo voluptates? Recusandae animi qui perspiciatis.</p>
                        </div>
                        <div className="content3">
                            <img src="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nobis quod possimus corporis fugit repudiandae, velit rem iusto autem perspiciatis vero, dolore ipsa impedit doloribus optio aut aliquid illo voluptates? Recusandae animi qui perspiciatis.</p>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <a href="#terms">Terms and Conditions</a>
                    <a href="#privacy">Privacy</a>
                    <a href="#cookies">Cookies</a>
                    <a href="#license">License Agreement</a>
                    <a href="#refund">Refund Policy</a>
                    <br />
                    Copyright © 2024 EchoSphere. All rights reserved. The order process, tax issue, and invoicing to end users are conducted by EchoSphere Technology Group Co., Ltd.
                </div>
            </div>
        </>
    )
}
