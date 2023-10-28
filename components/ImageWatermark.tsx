'use client';

import '../css/ImageWatermark.css'
import React, { useState } from 'react';
import {fontSizeResolver} from "@mantine/core/lib/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver";

const ImageWatermark = () => {
    const [images, setImages] = useState([]);
    const [logo, setLogo] = useState(null);
    const [previewImages, setPreviewImages] = useState([]);
    const [horizontalPosition, setHorizontalPosition] = useState('center');
    const [verticalPosition, setVerticalPosition] = useState('center');
    const [logoScale, setLogoScale] = useState(0.5); // 0.1 means 10%
    const [logoOpacity, setLogoOpacity] = useState(1); // 1 means fully opaque


    const createWatermark = () => {

        if (!logo) { // Überprüfen, ob das Logo nicht existiert
            alert('Es wurde kein Wasserzeichen hinzugefügt!'); // Ein Alert anzeigen, wenn kein Logo vorhanden ist
            return; // Frühzeitig aus der Funktion aussteigen, wenn kein Logo vorhanden ist
        }
        setPreviewImages([]);

        images.forEach((imageFile) => {
            const image = new Image();
            image.src = URL.createObjectURL(imageFile);

            image.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = image.width;
                canvas.height = image.height;

                ctx.drawImage(image, 0, 0);

                const watermark = new Image();
                watermark.src = URL.createObjectURL(logo);

                watermark.onload = () => {
                    const scaledWidth = canvas.width * logoScale;
                    const scaledHeight = (watermark.height * scaledWidth) / watermark.width;

                    let x, y;

                    if (horizontalPosition === 'left') {
                        x = 10;
                    } else if (horizontalPosition === 'center') {
                        x = (canvas.width - scaledWidth) / 2;
                    } else {
                        x = canvas.width - scaledWidth - 10;
                    }

                    if (verticalPosition === 'top') {
                        y = 10;
                    } else if (verticalPosition === 'center') {
                        y = (canvas.height - scaledHeight) / 2;
                    } else {
                        y = canvas.height - scaledHeight - 10;
                    }



                    ctx.globalAlpha = logoOpacity; // Set the opacity
                    ctx.drawImage(watermark, x, y, scaledWidth, scaledHeight);
                    ctx.globalAlpha = 1; // Reset the opacity

                    const watermarkedImage = canvas.toDataURL('image/jpeg');
                    setPreviewImages((prevImages) => [...prevImages, watermarkedImage]);

                };
            };
        });
    };

    const [uploadedImages, setUploadedImages] = useState([]);

    const handleImageUpload = (e) => {
        const newImages = [...e.target.files];
        setImages(newImages);

        const newImageUrls = newImages.map((file) => URL.createObjectURL(file));
        setUploadedImages(newImageUrls);
    };

    const removeImage = (indexToRemove) => {
        setImages((prevImages) => prevImages.filter((_, index) => index !== indexToRemove));
        setUploadedImages((prevUrls) => prevUrls.filter((_, index) => index !== indexToRemove));
    };

    const downloadOriginalImages = () => {
        images.forEach((imageFile, index) => {
            const url = URL.createObjectURL(imageFile);
            const link = document.createElement('a');
            link.href = url;
            link.download = `original_image_${index+1}.jpg`; // oder .png oder ein anderes Format
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };

    const downloadWatermarkedImages = () => {
        previewImages.forEach((dataUrl, index) => {
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = `watermarked_image_${index+1}.jpg`; // oder .png oder ein anderes Format
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };



    const [selectedFileSize, setSelectedFileSize] = useState('original');
    const [selectedFormat, setSelectedFormat] = useState('image/jpeg');


    const downloadImages = (isWatermarked) => {
        const baseName = prompt("Bitte geben Sie den Basisnamen für die heruntergeladenen Bilder ein:");

        if (baseName === null || baseName.trim() === "") {
            alert("Bitte geben Sie einen gültigen Namen ein.");
            return;
        }

        const filesToDownload = isWatermarked ? previewImages : images;

        filesToDownload.forEach((file, index) => {
            let img = new Image();
            img.src = isWatermarked ? file : URL.createObjectURL(file);

            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                let quality = 0.9;
                let newImageUrl;
                const fileSize = selectedFileSize === 'original' ? Infinity : parseInt(selectedFileSize);
                const format = selectedFormat.split('/')[1]; // Get the file extension

                do {
                    newImageUrl = canvas.toDataURL(selectedFormat, quality);
                    quality -= 0.1;
                } while (newImageUrl.length / 1024 > fileSize && quality > 0);

                const filename = `${baseName}_${index+1}.${format}`;

                const link = document.createElement('a');
                link.href = newImageUrl;
                link.download = filename;
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
        });
    };



    return (
        <div className={"place-self-center"}>
            <div className="upload-container">
                <div className={"button-64"} >
                    <label htmlFor="images" className="text" >Upload Images</label>
                    <input
                        type="file"
                        id="images"
                        name="images"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className={"fileInput"}

                    />
                </div>

                <div className={"button-64"}>
                    <label htmlFor="logo" className="text">Upload Logo</label>
                    <input
                        type="file"
                        id="logo"
                        name="logo"
                        accept="image/*"
                        onChange={(e) => setLogo(e.target.files[0])}
                        className={"fileInput"}
                    />
                </div>
            </div>
            {/* Position Selectors */}
            <h3 className="font-semibold text-xxl-center text-white-600 text-center" style={{ marginTop:"35px", marginBottom:"15px", fontSize:"24px" }}>
                Logo position
            </h3>
            <div className="selector-container">
                <div className="select">
                    <select  onChange={(e) => setHorizontalPosition(e.target.value)} value={horizontalPosition}>
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </div>
                <div className="select">
                    <select  onChange={(e) => setVerticalPosition(e.target.value)} value={verticalPosition}>
                        <option value="top">Top</option>
                        <option value="center">Center</option>
                        <option value="bottom">Bottom</option>
                    </select>
                </div>
            </div>

            <div className="selector-container">
                {/*<label>*/}
                {/*    Scale:*/}
                {/*    <input*/}
                {/*        type="range"*/}
                {/*        min="0.01"*/}
                {/*        max="1"*/}
                {/*        step="0.01"*/}
                {/*        value={logoScale}*/}
                {/*        onChange={(e) => setLogoScale(e.target.value)}*/}

                {/*    />*/}
                {/*</label>*/}
                {/*<label>*/}
                {/*    Opacity:*/}
                {/*    <input*/}
                {/*        type="range"*/}
                {/*        min="0"*/}
                {/*        max="1"*/}
                {/*        step="0.01"*/}
                {/*        value={logoOpacity}*/}
                {/*        onChange={(e) => setLogoOpacity(e.target.value)} />*/}
                {/*</label>*/}

                <div className={"cntr"}>
                    <label>
                        Scale:
                        <input
                            id="range2"
                            className={"range2"}
                            type="range"
                            min="0.01"
                            max="1"
                            step="0.01"
                            value={logoScale}
                            onChange={(e) => setLogoScale(parseFloat(e.target.value))}
                            style={{backgroundSize: `${(logoScale - 0.01) * 100}% 100%`}} // Style für den Fortschrittsbalken des Sliders
                        />
                    </label>
                    <div className={"sliderValue"} style={{left: `calc(${logoScale * 100}% - 15px)`}}> {/* 15px ist die Hälfte der Breite des Labels */}
                        {logoScale}
                    </div>
                </div>

                <div className={"cntr"}>
                    <label>
                        Opacity:
                        <input
                            id="range"
                            className={"range"}
                            type="range"
                            min="0.01"
                            max="1"
                            step="0.01"
                            value={logoOpacity}
                            onChange={(e) => setLogoOpacity(parseFloat(e.target.value))}
                            style={{backgroundSize: `${(logoOpacity - 0.01) * 100}% 100%`}} // Style für den Fortschrittsbalken des Sliders
                        />
                    </label>
                    <div className={"sliderValue"} style={{left: `calc(${logoOpacity * 100}% - 15px)`}}> {/* 15px ist die Hälfte der Breite des Labels */}
                        {logoOpacity}
                    </div>
                </div>
            </div>

            <button className="button-65" onClick={createWatermark}><span className="text">Create Watermark</span></button>

            <div className="py-14">
                <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                    <h3 className="font-semibold text-xxl-center text-white-600 text-center" style={{ marginTop:"15px", marginBottom:"35px" }}>
                        Uploaded Images:
                    </h3>
                    <div className="flex justify-center">
                        <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-8 lg:grid-cols-8">
                            {uploadedImages.map((src, index) => (
                                <li key={index}>
                                    <img src={src} alt="uploaded" style={{ maxWidth: "100px", maxHeight: "100px" }} />
                                    <button onClick={() => removeImage(index)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <hr style={{borderColor:"#00ffa6", marginBottom:"10px"}}/>


            <div>
                <label>
                    Download Format:
                    <div className="select">
                        <select onChange={(e) => setSelectedFormat(e.target.value)} value={selectedFormat}>
                            <option value="image/jpeg">JPEG</option>
                            <option value="image/png">PNG</option>
                            <option value="image/webp">WEBP</option>
                            <option value="image/gif">GIF</option>
                            <option value="image/bmp">BMP</option>
                            <option value="image/tiff">TIFF</option>
                        </select>
                    </div>
                </label>
            </div>

            <div>
                <label>
                    Size image (equal or less):
                    <div className="select">
                        <select onChange={(e) => setSelectedFileSize(e.target.value)} value={selectedFileSize}>
                            <option value="original">Original</option>
                            <option value="1000">1000 KB</option>
                            <option value="750">750 KB</option>
                            <option value="500">500 KB</option>
                            <option value="250">250 KB</option>
                            <option value="125">125 KB</option>
                        </select>
                    </div>

                </label>
            </div>

            <div className="upload-container">
            {images.length > 0 && (
                <button onClick={() => downloadImages(false)} className="button-66"><span className="text">Download Original Images</span></button>
            )}
            <br/>

            {previewImages.length > 0 && (
                <button onClick={() => downloadImages(true)} className="button-66"><span className="text">Download Watermarked Images</span></button>
            )}
            </div>

            {/* Image Preview */}
            <div>
                {/*{previewImages.map((src, index) => (*/}
                {/*    <img key={index} src={src} alt={`watermarked-${index}`} style={{ maxWidth: '35%', marginBottom: '20px' }} />*/}
                {/*))}*/}
            </div>

            <div className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <h3 className="font-semibold text-xxl-center text-white-600 text-center" style={{ marginTop:"50px", marginBottom:"35px" }}>
                        IMAGES PREVIEW
                    </h3>
                    <div className="flex justify-center">
                        <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
                                {previewImages.map((src, index) => (
                                    <li>
                                        <img key={index} src={src} alt={`watermarked-${index}`} className="w-64 my-auto" />
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>







        </div>
    );
};

export default ImageWatermark;