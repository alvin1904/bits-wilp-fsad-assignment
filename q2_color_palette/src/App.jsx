import { useState, createContext, useContext, useMemo } from "react";
import "./App.css";

const ColorContext = createContext();

const useColorPalette = () => {
  const [colors, setColors] = useState([
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
  ]);
  const [selectedColor, setSelectedColor] = useState(null);

  const addColor = () => {
    setColors([...colors, getRandomColor()]);
  };

  const removeColor = (index) => {
    setColors(colors.filter((_, i) => i !== index));
  };

  const selectColor = (index) => {
    setSelectedColor(index);
  };

  const contextValue = useMemo(
    () => ({
      colors,
      selectedColor,
      addColor,
      removeColor,
      selectColor,
    }),
    [colors, selectedColor],
  );

  return contextValue;
};

const ColorPalette = () => {
  const { colors, selectedColor, selectColor, removeColor } =
    useContext(ColorContext);

  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`color-box ${selectedColor === index ? "selected" : ""}`}
          style={{ backgroundColor: color }}
          onClick={() => selectColor(index)}
        >
          <button onClick={() => removeColor(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

const ColorControls = () => {
  const { addColor } = useContext(ColorContext);

  return (
    <div className="color-controls">
      <button onClick={addColor}>Add Color</button>
    </div>
  );
};

const App = () => {
  const colorPalette = useColorPalette();

  return (
    <ColorContext.Provider value={colorPalette}>
      <div className="app">
        <ColorPalette />
        <ColorControls />
      </div>
    </ColorContext.Provider>
  );
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default App;
