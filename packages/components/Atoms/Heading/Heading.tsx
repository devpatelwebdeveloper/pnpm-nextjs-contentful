import React, { FC } from 'react';
import styles from "./Paragraph.module.scss";
import {classNames} from "../../Utils";

interface HeadingProps {
  size: 'h1'|'h2'|'h3'|'h4'|'h5'
  title:string,
  color:'black'|'red'|'green'
}

const Heading: FC<HeadingProps> = ({ title,size='h1',color='black'  }) => {

  const headingClass=classNames(
    styles.heading,
    styles[size],
  styles[`heading-${color}`]
  )

  switch (size) {
    case 'h1':
      return <h1 className={headingClass}>{title}</h1>;
    case 'h2':
      return <h2 className={headingClass}>{title}</h2>;
    case 'h3':
      return <h3 className={headingClass}>{title}</h3>;
    case 'h4':
      return <h4 className={headingClass}>{title}</h4>;
    case 'h5':
      return <h5 className={headingClass}>{title}</h5>;
    default:
      return <p className={headingClass}>{title}</p>; // Default case if no size matches
  }
}


export default Heading