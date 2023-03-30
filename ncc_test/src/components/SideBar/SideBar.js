import React from 'react'
import styles from './SideBar.module.css'

export default function SideBar() {
  const list = ['Home','Services','News','Blog','Contact']; 
  const listMenu = list.map((item) => 
        <li className = {styles.item}>{item}</li>
    )
  return (
    <div className={styles.sidebar}>
        <ul>{listMenu}</ul>
    </div>
  )
}
