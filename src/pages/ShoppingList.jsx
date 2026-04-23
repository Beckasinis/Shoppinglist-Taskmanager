import { useState } from 'react';
import { useShopping } from '../context/ShoppingContext';
import './ShoppingList.css';

function ShoppingList() {
  const { sections, items, addItem, toggleItem, moveSection, hasReminders, setHasReminders } = useShopping();
  const [newItemName, setNewItemName] = useState('');
  const [selectedSection, setSelectedSection] = useState(sections[0]?.id || '');

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
    // Här läggs klassen för responsivitet in (todo-container eller shopping-container)
    <div className="shopping-container">
      <h2>Inköpslista</h2>

      {/* Kategori-knappar */}
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

      {/* Formulär */}
      <form onSubmit={handleSubmit} className="form-card">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Lägg till vara..."
        />
        <button type="submit" className="btn btn-primary">Lägg till</button>
      </form>

      {/* Påminnelser */}
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

      {/* Listan */}
      {sections.map((section, index) => {
        const sectionItems = items.filter(i => i.sectionId === section.id);
        if (sectionItems.length === 0) return null;

        return (
          <div key={section.id} className="glass-card shopping-section">
            <div className="section-header">
              <h3>{section.name}</h3>
              <div className="sort-buttons">
                {index > 0 && <button onClick={() => moveSection(section.id, 'up')}>⬆️</button>}
                {index < sections.length - 1 && <button onClick={() => moveSection(section.id, 'down')}>⬇️</button>}
              </div>
            </div>
            {sectionItems
              .sort((a, b) => a.done - b.done)
              .map(item => (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`shopping-item ${item.done ? 'done' : ''}`}
                >
                  {item.done ? '✅ ' : '⚪ '} {item.name}
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