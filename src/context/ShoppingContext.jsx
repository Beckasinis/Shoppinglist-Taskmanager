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
      const visibleSectionIds = prev
        .filter(s => items.some(item => item.sectionId === s.id))
        .map(s => s.id);

      const currentIndex = visibleSectionIds.indexOf(id);
      if (currentIndex === -1) return prev;

      // 2. Räkna ut målet (indexet i den synliga listan)
      const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

      // Om vi försöker gå utanför de synliga gränserna, gör inget
      if (targetIndex < 0 || targetIndex >= visibleSectionIds.length) return prev;

      const targetId = visibleSectionIds[targetIndex];

      // 3. Hitta de faktiska positionerna i den stora huvudlistan
      const realCurrentIndex = prev.findIndex(s => s.id === id);
      const realTargetIndex = prev.findIndex(s => s.id === targetId);

      // 4. Byt plats på dem i huvudlistan
      const next = [...prev];
      [next[realCurrentIndex], next[realTargetIndex]] = [next[realTargetIndex], next[realCurrentIndex]];

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