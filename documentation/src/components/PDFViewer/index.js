import React from 'react';
import {isMobile} from "react-device-detect";

export default function PDFViewer(props) {
  return (
        <>
            {
                isMobile ? <>
                        <p><a href={props.src}>Open {props.title} PDF file </a>.</p></> :
                <iframe src={props.src} width="100%" height="500px">
                </iframe>
            }
        </>
  );
}
