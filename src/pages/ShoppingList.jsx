import { useState } from 'react';
import { useShopping } from '../context/ShoppingContext';
import './ShoppingList.css';

function ShoppingList() {
  const {
    sections,
    items,
    addItem,
    toggleItem,
    moveSection,
    hasReminders,
    setHasReminders,
    removeItem,
    updateItem
  } = useShopping();

  const [newItemName, setNewItemName] = useState('');
  const [selectedSection, setSelectedSection] = useState(sections[0]?.id || '');

  // --- BERÄKNINGAR (Viktigt att dessa ligger efter useShopping) ---
  const visibleSections = sections.filter(section =>
    items.some(item => item.sectionId === section.id)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) return;
    addItem(newItemName, selectedSection);
    setNewItemName('');
  };

  const handleCheckout = () => {
    let msg = "PÅMINNELSE!\n";
    if (hasReminders.coupons) msg += "🎟️ Glöm inte kuponger!\n";
    if (hasReminders.bottles) msg += "🍾 Glöm inte pantkvitton!\n";
    if (!hasReminders.coupons && !hasReminders.bottles) {
      msg = "Inga särskilda påminnelser. Kör hårt! 🏁";
    }
    alert(msg);
  };

  return (
    <div className="shopping-container">
      <h2>Shoppinglista</h2>

      <div className="category-chips">
        {[...sections].sort((a, b) => a.name.localeCompare(b.name)).map(s => (
          <button
            key={s.id}
            onClick={() => setSelectedSection(s.id)}
            className={`btn-category ${selectedSection === s.id ? 'active' : ''}`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="form-card">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Lägg till vara..."
        />
        <button type="submit" className="btn btn-primary">Lägg till</button>
      </form>

      <div className="reminder-container">
        <label className={`reminder-card ${hasReminders.coupons ? 'active' : ''}`}>
          <input
            type="checkbox"
            checked={hasReminders.coupons}
            onChange={e => setHasReminders({ ...hasReminders, coupons: e.target.checked })}
          />
          <span className="reminder-icon">🎟️</span>
          <span className="reminder-text">Kuponger</span>
        </label>

        <label className={`reminder-card ${hasReminders.bottles ? 'active' : ''}`}>
          <input
            type="checkbox"
            checked={hasReminders.bottles}
            onChange={e => setHasReminders({ ...hasReminders, bottles: e.target.checked })}
          />
          <span className="reminder-icon">🍾</span>
          <span className="reminder-text">Pantkvitto</span>
        </label>
      </div>

      {/* --- HÄR RENDERAS DE SYNLIGA SEKTIONERNA --- */}
      {visibleSections.map((section, index) => {
        const sectionItems = items.filter(i => i.sectionId === section.id);

        return (
          <div key={section.id} className="glass-card shopping-section">
            <div className="section-header">
              <h3>{section.name}</h3>
              <div className="sort-buttons">
                {index > 0 && (
                  <button type="button" onClick={() => moveSection(section.id, 'up')}>⬆️</button>
                )}
                {index < visibleSections.length - 1 && (
                  <button type="button" onClick={() => moveSection(section.id, 'down')}>⬇️</button>
                )}
              </div>
            </div>

            {sectionItems
              .sort((a, b) => a.done - b.done)
              .map(item => (
                <div key={item.id} className="shopping-item-container">
                  <div
                    onClick={() => toggleItem(item.id)}
                    className={`shopping-item ${item.done ? 'done' : ''}`}
                  >
                    {item.done ? '✅ ' : '⚪ '} {item.name}
                  </div>

                  <div className="item-actions">
                    <button onClick={() => {
                      const newName = prompt("Ändra namn:", item.name);
                      if (newName) updateItem(item.id, newName);
                    }}>✏️</button>
                    <button onClick={() => {
                      if (window.confirm(`Radera "${item.name}"?`)) removeItem(item.id);
                    }}>🗑️</button>
                  </div>
                </div>
              ))}
          </div>
        );
      })}

      <button onClick={handleCheckout} className="btn-checkout">
        🏁 Till kassan
      </button>
    </div>
  );
}

export default ShoppingList;