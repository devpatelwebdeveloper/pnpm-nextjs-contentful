import React from 'react'
import styles from "./Orbit.module.scss"


const analytics=(<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M39.1666 38.3335H38.3333V14.1667C38.3333 13.7067 37.9599 13.3334 37.4999 13.3334H32.4999C32.0399 13.3334 31.6666 13.7067 31.6666 14.1667V38.3334H28.3332V24.1667C28.3332 23.7067 27.9598 23.3334 27.4998 23.3334H22.4998C22.0398 23.3334 21.6665 23.7067 21.6665 24.1667V38.3334H18.3331V20.8334C18.3331 20.3734 17.9598 20 17.4998 20H12.4998C12.0398 20 11.6664 20.3734 11.6664 20.8334V38.3334H8.33305V29.1667C8.33305 28.7067 7.95969 28.3334 7.49969 28.3334H2.5C2.04 28.3334 1.66664 28.7067 1.66664 29.1667V38.3334H0.833359C0.373359 38.3335 0 38.7067 0 39.1667C0 39.6267 0.373359 40.0001 0.833359 40.0001H2.5H7.5H12.5H17.5H22.5H27.5H32.5H37.5H39.1666C39.6266 40.0001 40 39.6267 40 39.1667C40 38.7067 39.6266 38.3335 39.1666 38.3335Z" fill="#133252"></path><path d="M34.9999 0C33.1615 0 31.6665 1.495 31.6665 3.33336C31.6665 3.95 31.8465 4.52 32.1381 5.01672L26.6831 10.4717C26.1865 10.18 25.6165 10 24.9999 10C23.9549 10 23.0315 10.4934 22.4199 11.2484L18.3249 10.08C18.3249 10.0534 18.3332 10.0284 18.3332 10C18.3332 8.16164 16.8382 6.66664 14.9999 6.66664C13.1615 6.66664 11.6665 8.16164 11.6665 10C11.6665 10.485 11.7749 10.9416 11.9615 11.3566L6.75314 15.5116C6.24322 15.1916 5.64486 15 4.99986 15C3.1615 15 1.6665 16.495 1.6665 18.3334C1.6665 20.1717 3.1615 21.6667 4.99986 21.6667C6.83822 21.6667 8.33322 20.1717 8.33322 18.3334C8.33322 17.7484 8.16822 17.205 7.90158 16.7267L13.0066 12.6551C13.5649 13.0751 14.2499 13.3334 14.9999 13.3334C16.2216 13.3334 17.2816 12.6651 17.8616 11.6818L21.7232 12.7834C21.6916 12.9634 21.6666 13.1451 21.6666 13.3334C21.6666 15.1718 23.1616 16.6668 24.9999 16.6668C26.8383 16.6668 28.3333 15.1718 28.3333 13.3334C28.3333 12.7168 28.1533 12.1468 27.8617 11.6501L33.3183 6.19344C33.8133 6.4868 34.3833 6.6668 34.9999 6.6668C36.8383 6.6668 38.3333 5.1718 38.3333 3.33344C38.3332 1.495 36.8382 0 34.9999 0Z" fill="#133252"></path></svg>)

function Orbit() {
  return (
    
    <div className={styles.orbitDiv}>
   <div className={styles.orbit}>
    <div className={styles['center-image']}>
      <img src="https://raw.githubusercontent.com/kevin-powell/seamless-can-i-clone-it/main/src/assets/woman.png" alt=""/>
      <img src="https://raw.githubusercontent.com/kevin-powell/seamless-can-i-clone-it/main/src/assets/man.png" alt=""/>
    </div>
    <ul>
      <li>
        <div><img src={analytics} alt=""/></div>
        <p>Analytics & Reporting</p>
      </li>
      <li>
        <div><img src={analytics} alt=""/></div>
        <p>Time & Attendance</p>
      </li>
      <li>
        <div><img src={analytics} alt=""/></div>
        <p>Onboarding</p>
      </li>
      <li>
        <div><img src={analytics} alt=""/></div>
        <p>HR Information System</p>
      </li>
      <li>
        <div><img src={analytics} alt=""/></div>
        <p>Leaves & Holidays</p>
      </li>
      <li>
        <div><img src={analytics} alt=""/></div>
        <p>Exit & Off-boarding</p>
      </li>
      <li>
        <div><img src={analytics} alt=""/></div>
        <p>Travel & Requisitions</p>
      </li>
      <li>
        <div><img src={analytics} alt=""/></div>
        <p>Disciplinary</p>
      </li>
    </ul>
  </div>
    </div>
  )
}

export default Orbit