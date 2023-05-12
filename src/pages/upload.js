import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";


const Upload = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get("http://localhost:9191/image/download/1");
        const dataUrl = `data:${response.headers["content-type"]};base64,${response.data.imageData}`;
        // console.log(JSON.stringify(dataUrl));
        setImageSrc(dataUrl);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImage();
  }, []);

  return (
    <>
      <div>upload</div>
      <Image src={imageSrc} alt="Uploaded Image" width={300} height={300} priority />
    </>
  );
};

export default Upload;
