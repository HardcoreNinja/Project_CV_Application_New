import React, { Component } from 'react';
import './Nav.css';
import html2canvas from "html2canvas";

export default class Nav extends Component {

    exportAsImage = async (el, imageFileName) => {
        const canvas = await html2canvas(document.getElementById('preview'));
        const image = canvas.toDataURL("image/png", 1.0);
        this.downloadImage(image, imageFileName);
    };

    downloadImage = (blob, fileName) => {
        const fakeLink = window.document.createElement("a");
        fakeLink.style = "display:none;";
        fakeLink.download = fileName;

        fakeLink.href = blob;

        document.body.appendChild(fakeLink);
        fakeLink.click();
    };


    render() {
        return (
            <nav id='nav'>
                <div id='logo'>
                    <span className="material-symbols-outlined">
                        contact_page
                    </span>
                    <h1>CV Editor</h1>

                </div>
                <button id='print' onClick={this.exportAsImage}>Print</button>
            </nav>
        );
    }
}