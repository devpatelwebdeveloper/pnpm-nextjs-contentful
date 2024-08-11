import React, { FC } from 'react';
import styles from "./Paragraph.module.scss";
import {classNames} from "../../Utils";

interface ParagraphProps {
  children: string;
  size:'main'|'large'
  color:'black'|'red'|'green'
}


const Paragraph: FC<ParagraphProps> = ({ children,size,color='black'  }) => {
  
  const combinedClassName = classNames(
    styles.body,
    styles[`body-${size}`],
    styles[`color-${color}`]
  );

  return (
    <p className={combinedClassName}>
    {children}
    </p>
  )
}


export default Paragraph