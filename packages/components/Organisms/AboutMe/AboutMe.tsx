import React from 'react'
import styles from "./AboutMe.module.scss"
import {Paragraph,Img,Heading} from "../../Atoms"
import { classNames } from '../../Utils'


interface AboutMeProps{
  heading:string,
  description:string,
  imgSource:string
}

function AboutMe({heading,description,imgSource}:AboutMeProps) {
  const aboutMeClasses = classNames(styles[`about-me-container`])
  const aboutMeDescriptionClasses = classNames(styles[`about-me-description`])
  const aboutMeImageClasses = classNames(styles[`about-me-image`])
  return (
    <div className={aboutMeClasses}>
    <div className={aboutMeDescriptionClasses}>
      <Heading
      size='h3'
      title={heading}
      color='black'
      />
      <Paragraph size='main' color='black'>{description}</Paragraph>
    </div>
    <div className={aboutMeImageClasses}>
    <Img
        src={imgSource}
        alt="A description of the image"
        width={800}
        height={600}
      />
    </div>
    </div>
  )
}

export default AboutMe