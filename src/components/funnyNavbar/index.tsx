import React from "react";
import { Link } from "react-router-dom";
import classes from './styles.module.css';
export class FunnyNavbar extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-transparent navbar-dark">
                    <div className="container-fluid">
                        <Link to={'/'} className={`navbar-brand ${classes.customNavbarBrand}`}>سوژه یاب</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={'/funnyform'} className="nav-link">فرم ثبت سوژه</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}