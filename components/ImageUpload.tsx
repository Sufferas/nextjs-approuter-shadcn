"use client";
import React, { useState, useEffect } from 'react';

import { IonIcon } from '@ionic/react';
import { cloudUploadOutline } from 'ionicons/icons';

const ImageUpload: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const [width, setWidth] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);
    // Zustand für die skalierten Abmessungen
    const [scaledWidth, setScaledWidth] = useState<number | null>(null);
    const [scaledHeight, setScaledHeight] = useState<number | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Set image URL
        const imageURL = URL.createObjectURL(file);
        setImage(imageURL);

        // Get image dimensions
        const img = new Image();
        img.src = imageURL;
        img.onload = () => {
            setWidth(img.width);
            setHeight(img.height);
        };
    };
    // Zustand für die Bildgröße
    const [imageScale, setImageScale] = useState<number>(100);

    // Funktion zum Vergrößern des Bildes
    const enlargeImage = () => {
        setImageScale(prevScale => Math.min(400, prevScale + 1));
    };
    const enlargeImageX10 = () => {
        setImageScale(prevScale => Math.min(400, prevScale + 10));
    };

    // Funktion zum Verkleinern des Bildes
    const shrinkImage = () => {
        setImageScale(prevScale => Math.max(1, prevScale - 1)); // Minimum auf 1% setzen
    };
    const shrinkImageX10 = () => {
        setImageScale(prevScale => Math.max(1, prevScale - 10)); // Minimum auf 1% setzen
    };

    // Effekt, um Bildgröße bei imageScale-Änderungen zu aktualisieren
    useEffect(() => {
        const imgElement = document.getElementById('uploaded-image') as HTMLImageElement;
        if (imgElement && width && height) {
            // Skalierte Breite und Höhe berechnen und setzen
            const newWidth = (width * imageScale) / 100;
            const newHeight = (height * imageScale) / 100;

            setScaledWidth(newWidth);
            setScaledHeight(newHeight);

            imgElement.style.width = `${newWidth}px`;
            imgElement.style.height = `${newHeight}px`;
        }
    }, [imageScale, width, height]);

    return (
        <div style={{ textAlign: 'center' }}>

            <p className="anpassungen">Adjust the image size:</p>
            <div className="button-group">
                <div className="column">
                    <p className="headerbutton">Reduce</p>
                    <button onClick={shrinkImage} className="button-21">
                        x1
                    </button>
                    <button onClick={shrinkImageX10} className="button-21">
                        x10
                    </button>

                </div>
                <div className="column">
                    <p className="headerbutton">Expand</p>
                    <button onClick={enlargeImage} className="button-22">
                        x1
                    </button>
                    <button onClick={enlargeImageX10} className="button-22">
                        x10
                    </button>
                </div>
            </div>

            <div className="file">
                <label htmlFor="file">Upload
                    <IonIcon className="uploadicon" icon={cloudUploadOutline}></IonIcon>

                </label>
                <input id="file" type="file" onChange={handleImageUpload} />
            </div>

            {/*<input className="Input" type="file" onChange={handleImageUpload} />*/}
            {image && (
                <>
                    <p>
                        Original Width: {width}px | Original Height: {height}px
                    </p>
                    {/* Hier werden die skalierten Breite und Höhe angezeigt */}
                    <p style={{ marginBottom: '20px' }}>
                        Width: {scaledWidth?.toFixed(2)}px | Height: {scaledHeight?.toFixed(2)}px
                    </p>
                    <img src={image} alt="Uploaded preview" id="uploaded-image" />
                </>
            )}
        </div>
    );
};

export default ImageUpload;
