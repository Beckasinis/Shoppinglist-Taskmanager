import { createContext, useContext, useState, useEffect } from 'react';

const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const initialSections = [
    { id: '1', name: 'Frukt & Grönt' }, { id: '2', name: 'None-Food' },
    { id: '3', name: 'Kött & Chark' }, { id: '4', name: 'Delikatess' },
    { id: '5', name: 'Mejeri' }, { id: '6', name: 'Skafferi' },
    { id: '7', name: 'Fryst' }, { id: '8', name: 'Övrigt' },
    { id: '9', name: 'Djurmat' }, { id: '10', name: 'Förbutik' },
    { id: '11', name: 'Drycker' }, { id: '12', name: 'Hygien' },
    { id: '13', name: 'Städ' }, { id: '14', name: 'Hushåll' },
  ];

  const [sections, setSections] = useState(() => {
    const saved = localStorage.getItem('shopping_sections');
    return saved ? JSON.parse(saved) : initialSections;
  });

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('shopping_items');
    return saved ? JSON.parse(saved) : [];
  });

  const [hasReminders, setHasReminders] = useState({ coupons: false, bottles: false });

  useEffect(() => {
    localStorage.setItem('shopping_sections', JSON.stringify(sections));
    localStorage.setItem('shopping_items', JSON.stringify(items));
  }, [sections, items]);

  const addItem = (name, sectionId) => {
    const newItem = { id: Date.now().toString(), name, sectionId, done: false };
    setItems([...items, newItem]);
  };

  const toggleItem = (id) => {
    setItems(items.map(item => (item.id === id ? { ...item, done: !item.done } : item)));
  };

  const moveSection = (id, direction) => {
    setSections(prev => {
      const index = prev.findIndex(s => s.id === id);
      if (index === -1) return prev;
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= prev.length) return prev;
      const next = [...prev];
      [next[index], next[newIndex]] = [next[newIndex], next[index]];
      return next;
    });
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateItem = (id, newName) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, name: newName } : item
    ));
  };

  return (
    <ShoppingContext.Provider value={{
      sections, items, addItem, toggleItem, moveSection,
      hasReminders, setHasReminders, removeItem, updateItem
    }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShopping = () => useContext(ShoppingContext);