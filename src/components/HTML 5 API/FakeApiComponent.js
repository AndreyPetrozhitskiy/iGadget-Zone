import React, { useState, useRef } from 'react';
import './style.scss';

const FakeApiComponent = () => {
  // Состояния компонента
  const [data, setData] = useState([]); // Состояние для хранения данных
  const [loading, setLoading] = useState(false); // Состояние для отображения состояния загрузки
  const [error, setError] = useState(null); // Состояние для отображения ошибок
  const [limit, setLimit] = useState(''); // Состояние для установки лимита данных
  const draggedItem = useRef(null); // Реф для отслеживания перетаскиваемого элемента

  // Функция для получения данных с Fake API
  const fetchData = async (endpoint, fields, customLimit) => {
    try {
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
      const result = await response.json();

      // Отображаем только выбранные поля
      const filteredData = result.map((item) => {
        const filteredItem = {};
        fields.forEach((field) => {
          filteredItem[field] = item[field];
        });
        return filteredItem;
      });

      // Ограничиваем количество элементов
      const finalLimit = customLimit || limit;
      const limitedData = finalLimit ? filteredData.slice(0, finalLimit) : filteredData;
      setData(limitedData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Обработчик начала перетаскивания элемента
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
    draggedItem.current = data[index];
  };

  // Обработчик завершения перетаскивания
  const handleDragEnd = () => {
    draggedItem.current = null;
  };

  // Обработчик события "перетаскивание завершено"
  const handleDrop = (e, index) => {
    e.preventDefault();
    if (draggedItem.current) {
      const updatedData = [...data];
      const draggedIndex = updatedData.findIndex((item) => item === draggedItem.current);
      updatedData.splice(index, 0, updatedData.splice(draggedIndex, 1)[0]);
      setData(updatedData);
      draggedItem.current = null;
    }
  };

  
  return (
    <div className="fakeApi">
      <h1>Fake API Component</h1>
      <div className="fakeApi__container">
        <div className="fakeApi__list">
          {/* Ввод лимита */}
          <label>
            Лимит:
            <input
            id='input_fake-api'
              type="number"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              placeholder="Введите лимит"
            />
          </label>
          {/* Кнопки для загрузки данных */}
          <div className="fakeApi__button-block">
            <button id='fake_api-users'
              onClick={() =>
                fetchData('users', ['id', 'name', 'username', 'email', 'address', 'phone'])
              }
            >
              Загрузить пользователей
            </button>
            <button
              onClick={() =>
                fetchData('posts', ['id', 'title', 'body'])
              }
            >
              Загрузить посты
            </button>
          </div>
          {/* Отображение ошибок и состояния загрузки */}
          {error && <p>Ошибка: {error}</p>}
          {loading && <p>Загрузка...</p>}
          {/* Список с перетаскиваемыми элементами */}
          <div className="fakeApi-posts">
            <ul>
              {data.map((item, index) => (
                <li
                  key={index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragEnd={handleDragEnd}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragOver={(e) => e.preventDefault()}
                  className={draggedItem.current ? 'dragged' : ''}
                >
                  {/* Отображение данных в элементе списка */}
                  {Object.keys(item).map((key) => (
                    <div key={key}>
                      <strong>{key}:</strong> {JSON.stringify(item[key])}
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakeApiComponent;