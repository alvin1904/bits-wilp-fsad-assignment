import { useState, createContext, useContext, useMemo } from "react";
import "./App.css";

// Create a context to manage the color palette
const ColorContext = createContext();
// Custom hook: useColorPalette
const useColorPalette = () => {
  // State for managing colors and selected color
  const [colors, setColors] = useState(["#ff5733", "#33ff57", "#5733ff"]);
  const [selectedColor, setSelectedColor] = useState(null);
  // Placeholder functions for adding, removing, and selecting colors
  const addColor = () => {
    // TODO: Implement the logic to add a new color to the palette
  };
  const removeColor = () => {
    // TODO: Implement the logic to remove a color from the palette
  };
  const selectColor = () => {
    // TODO: Implement the logic to select a color from the palette
  };
  // Memoize the context value to avoid unnecessary re-renders
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
// ColorPalette component to display and customize the color palette
const ColorPalette = () => {
  // Accessing the color-related functions and data from the context
  const { colors, selectedColor, selectColor, removeColor } =
    useContext(ColorContext);
  return (
    <div className="color-palette">
      {/* Mapping over colors to render color boxes */}
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
// ColorControls component to add new colors to the palette
const ColorControls = () => {
  // TODO: Implement the UI for adding new colors to the palette
};
// App component using the ColorProvider and rendering ColorPalette and
ColorControls;
const App = () => {
  // Use the custom hook
  return <p>Coding playground of the given task</p>;
};
// Helper function to generate a random hex color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
export default App;
