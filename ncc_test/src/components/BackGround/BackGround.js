import React from "react";
import styles from "./BackGround.module.css";
import css from "../../photo/css-icon 1.png";
import html from "../../photo/html-icon 1.png";
import url from "../../photo/url-icon 1.png";
import logo_ncc from "../../photo/logoNCC 1.png";
import Footer from "./Footer/Footer";

export default function BackGround() {
  const img = [css, html, url];
  const listTxt = img.map((item) => (
    <div className={styles.list}>
      <p>Lorem ipsum dolor sit amet</p>
      <div>
        <img src={item} alt="anh dep"></img>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec
        </p>
      </div>
      <div>
        imperdiet suscipit accumsan. Aenean consequat condimentum velit ut
        tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices
        liquam egestasnunc at ullamcorper ultricies. Donec feugiat velit nulla,
        vel sodales est ullamcorper id. Aenean consequat condimentum velit ut
        tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices
        vestibulum mattis.
      </div>
    </div>
  ));
  return (
    <div className={styles.background}>
      <img className={styles.logo} src={logo_ncc} alt="anh dep"></img>
      <div className={styles.question}>
        <p>Lorem ipsum dolor sit asmet?</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div className={styles.listTxt}>{listTxt}</div>
      <Footer></Footer>
    </div>
  );
}
