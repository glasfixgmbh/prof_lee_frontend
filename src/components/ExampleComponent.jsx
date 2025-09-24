import React, { useState, useEffect } from "react";
import { get, post } from "../services/apiClient";

const DataManager = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await get("/posts");

        setItems(data.slice(0, 10));
      } catch (err) {
        setError("there is problem to get data!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleAddItem = async () => {
    const newItem = {
      title: "new item ",
      body: " some content",
      userId: 1,
    };

    try {
      const createdItem = await post("/posts", newItem);
      alert(`new item created ID: ${createdItem.id}`);
      setItems((prevItems) => [createdItem, ...prevItems]);
    } catch (err) {
      alert("creating new item with error");
    }
  };

  return (
    <div>
      <h2>wie nützen axios in component</h2>
      <button onClick={handleAddItem} style={{ marginBottom: "20px" }}>
       create new item(POST)
      </button>

      <h3>Itm Lists GET</h3>
      {isLoading && <p>loading .....</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataManager;
