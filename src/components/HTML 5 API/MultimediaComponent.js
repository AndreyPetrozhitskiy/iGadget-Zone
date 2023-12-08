import React, { useState, useRef, useEffect } from 'react';
import vidos from "../../video - audio/vidosik.mp4"
import music from "../../video - audio/MGMT_-_Little_Dark_Age_49717933.mp3"
import "./style.scss"

const MultimediaComponent = () => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [drawing, setDrawing] = useState(false);
  const [objectColor, setObjectColor] = useState('red');
  const [drawnPaths, setDrawnPaths] = useState([]);
  const [currentPath, setCurrentPath] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCanvasAnimation = () => {
    requestAnimationFrame(handleCanvasAnimation);
  };

  const handleCanvasMouseDown = (e) => {
    setDrawing(true);
    setCurrentPath([{ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }]);
  };

  const handleCanvasMouseMove = (e) => {
    if (!drawing) return;

    const newPath = [...currentPath, { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }];
    setCurrentPath(newPath);
  };

  const handleCanvasMouseUp = () => {
    setDrawing(false);
    setDrawnPaths([...drawnPaths, currentPath]);
    setCurrentPath([]);
  };

  const handleDropForImage = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOverForImage = (e) => {
    e.preventDefault();
  };

  const handleSaveImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'canvas_image.png';
    link.click();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawPaths = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawnPaths.forEach((path) => {
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);

        path.forEach((point) => {
          ctx.lineTo(point.x, point.y);
        });

        ctx.strokeStyle = objectColor;
        ctx.lineWidth = 5; // Ширина линии
        ctx.stroke();
      });
    };

    drawPaths();
    handleCanvasAnimation();

    return () => cancelAnimationFrame(handleCanvasAnimation);
  }, [drawnPaths, objectColor]);

  return (
    <div className='multimedia'>
      <h1>Практическая работа по разделу 3</h1>

      {/* Видео Плеер */}
      <video id="video_api" className='multimedia__video' ref={videoRef} controls>
        <source src={vidos} type="video/mp4" />
      </video>

      {/* Аудио Плеер */}
      <audio id="audio_api" className='multimedia__audio' ref={audioRef} controls>
        <source src={music} type="audio/mp3" />
      </audio>

      {/* Фото */}
      <div
        onDrop={handleDropForImage}
        onDragOver={handleDragOverForImage}
        className="multimedia__photo"
      >
        <p>Перенесите фото в эту область</p>
        <input type="file" onChange={handleFileChange} ref={fileInputRef} />
        {image && <img src={image} alt="Uploaded" />}
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={1200}
        height={600}
        style={{ border: '1px solid black' }}
        onMouseDown={handleCanvasMouseDown}
        onMouseMove={handleCanvasMouseMove}
        onMouseUp={handleCanvasMouseUp}
      />
      <button className='save_canvas' onClick={handleSaveImage}>Сохранить рисунок</button>
    </div>
  );
};

export default MultimediaComponent;