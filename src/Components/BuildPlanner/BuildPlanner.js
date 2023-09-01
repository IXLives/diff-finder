import React, { useState } from 'react';
import './BuildPlanner.css'; // Import the component-specific CSS

const BuildPlanner = () => {
  const [selectedChampion, setSelectedChampion] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [finalBuild, setFinalBuild] = useState([]);

  const handleChampionChange = (event) => {
    setSelectedChampion(event.target.value);
  };

  const handleItemChange = (event) => {
    const itemId = event.target.value;
    // Check if the item is already selected
    if (selectedItems.includes(itemId)) {
      // If selected, remove it from the list
      const updatedItems = selectedItems.filter((item) => item !== itemId);
      setSelectedItems(updatedItems);
    } else {
      // If not selected, add it to the list
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleAddItem = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleRemoveItem = (item) => {
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem !== item);
    setSelectedItems(updatedItems);
  };

  const handleSaveBuild = () => {
    setFinalBuild(selectedItems);
  };

  const handleResetBuild = () => {
    setSelectedChampion(null);
    setSelectedItems([]);
    setFinalBuild([]);
  };

const championList = [
  { id: 'Aatrox', name: 'Aatrox' },
  { id: 'Ahri', name: 'Ahri' },
  { id: 'Akali', name: 'Akali' },
  { id: 'Akshan', name: 'Akshan' },
  { id: 'Alistar', name: 'Alistar' },
  { id: 'Amumu', name: 'Amumu' },
  { id: 'Anivia', name: 'Anivia' },
  { id: 'Annie', name: 'Annie' },
  { id: 'Aphelios', name: 'Aphelios' },
  { id: 'Ashe', name: 'Ashe' },
  { id: 'AurelionSol', name: 'Aurelion Sol' },
  { id: 'Azir', name: 'Azir' },
  { id: 'Bard', name: 'Bard' },
  { id: 'Belveth', name: 'Belveth' },
  { id: 'Blitzcrank', name: 'Blitzcrank' },
  { id: 'Brand', name: 'Brand' },
  { id: 'Braum', name: 'Braum' },
  { id: 'Caitlyn', name: 'Caitlyn' },
  { id: 'Camille', name: 'Camille' },
  { id: 'Cassiopeia', name: 'Cassiopeia' },
  { id: 'ChoGath', name: "Cho'Gath" },
  { id: 'Corki', name: 'Corki' },
  { id: 'Darius', name: 'Darius' },
  { id: 'Diana', name: 'Diana' },
  { id: 'DrMundo', name: 'Dr. Mundo' },
  { id: 'Draven', name: 'Draven' },
  { id: 'Ekko', name: 'Ekko' },
  { id: 'Elise', name: 'Elise' },
  { id: 'Evelynn', name: 'Evelynn' },
  { id: 'Ezreal', name: 'Ezreal' },
  { id: 'Fiddlesticks', name: 'Fiddlesticks' },
  { id: 'Fiora', name: 'Fiora' },
  { id: 'Fizz', name: 'Fizz' },
  { id: 'Galio', name: 'Galio' },
  { id: 'Gangplank', name: 'Gangplank' },
  { id: 'Garen', name: 'Garen' },
  { id: 'Gnar', name: 'Gnar' },
  { id: 'Gragas', name: 'Gragas' },
  { id: 'Graves', name: 'Graves' },
  { id: 'Gwen', name: 'Gwen' },
  { id: 'Hecarim', name: 'Hecarim' },
  { id: 'Heimerdinger', name: 'Heimerdinger' },
  { id: 'Illaoi', name: 'Illaoi' },
  { id: 'Irelia', name: 'Irelia' },
  { id: 'Ivern', name: 'Ivern' },
  { id: 'Janna', name: 'Janna' },
  { id: 'JarvanIV', name: 'Jarvan IV' },
  { id: 'Jax', name: 'Jax' },
  { id: 'Jayce', name: 'Jayce' },
  { id: 'Jhin', name: 'Jhin' },
  { id: 'Jinx', name: 'Jinx' },
  { id: 'KaiSa', name: "Kai'Sa" },
  { id: 'Kalista', name: 'Kalista' },
  { id: 'Karma', name: 'Karma' },
  { id: 'Karthus', name: 'Karthus' },
  { id: 'Kassadin', name: 'Kassadin' },
  { id: 'Katarina', name: 'Katarina' },
  { id: 'Kayle', name: 'Kayle' },
  { id: 'Kayn', name: 'Kayn' },
  { id: 'Kennen', name: 'Kennen' },
  { id: 'Khazix', name: "Kha'Zix" },
  { id: 'Kindred', name: 'Kindred' },
  { id: 'Kled', name: 'Kled' },
  { id: 'KogMaw', name: "Kog'Maw" },
  { id: 'Ksante', name: 'Ksante' },
  { id: 'LeBlanc', name: 'LeBlanc' },
  { id: 'LeeSin', name: 'Lee Sin' },
  { id: 'Leona', name: 'Leona' },
  { id: 'Lillia', name: 'Lillia' },
  { id: 'Lissandra', name: 'Lissandra' },
  { id: 'Lucian', name: 'Lucian' },
  { id: 'Lulu', name: 'Lulu' },
  { id: 'Lux', name: 'Lux' },
  { id: 'Malphite', name: 'Malphite' },
  { id: 'Malzahar', name: 'Malzahar' },
  { id: 'Maokai', name: 'Maokai' },
  { id: 'MasterYi', name: 'Master Yi' },
  { id: 'MissFortune', name: 'Miss Fortune' },
  { id: 'Mordekaiser', name: 'Mordekaiser' },
  { id: 'Morgana', name: 'Morgana' },
  { id: 'Nafiri', name: 'Nafiri' },
  { id: 'Nami', name: 'Nami' },
  { id: 'Nasus', name: 'Nasus' },
  { id: 'Nautilus', name: 'Nautilus' },
  { id: 'Neeko', name: 'Neeko' },
  { id: 'Nidalee', name: 'Nidalee' },
  { id: 'Nilah', name: 'Nilah' },
  { id: 'Nocturne', name: 'Nocturne' },
  { id: 'NunuWillump', name: 'Nunu & Willump' },
  { id: 'Olaf', name: 'Olaf' },
  { id: 'Orianna', name: 'Orianna' },
  { id: 'Ornn', name: 'Ornn' },
  { id: 'Pantheon', name: 'Pantheon' },
  { id: 'Poppy', name: 'Poppy' },
  { id: 'Pyke', name: 'Pyke' },
  { id: 'Qiyana', name: 'Qiyana' },
  { id: 'Quinn', name: 'Quinn' },
  { id: 'Rakan', name: 'Rakan' },
  { id: 'Rammus', name: 'Rammus' },
  { id: 'RekSai', name: 'Rek\'Sai' },
  { id: 'Rell', name: 'Rell' },
  { id: 'Vex', name: 'Vex' },
  { id: 'Renata Glasc', name: 'Renata Glasc' },
  { id: 'Rengar', name: 'Rengar' },
  { id: 'Riven', name: 'Riven' },
  { id: 'Rumble', name: 'Rumble' },
  { id: 'Ryze', name: 'Ryze' },
  { id: 'Samira', name: 'Samira' },
  { id: 'Sejuani', name: 'Sejuani' },
  { id: 'Senna', name: 'Senna' },
  { id: 'Seraphine', name: 'Seraphine' },
  { id: 'Sett', name: 'Sett' },
  { id: 'Shaco', name: 'Shaco' },
  { id: 'Shen', name: 'Shen' },
  { id: 'Shyvana', name: 'Shyvana' },
  { id: 'Singed', name: 'Singed' },
  { id: 'Sion', name: 'Sion' },
  { id: 'Sivir', name: 'Sivir' },
  { id: 'Skarner', name: 'Skarner' },
  { id: 'Sona', name: 'Sona' },
  { id: 'Soraka', name: 'Soraka' },
  { id: 'Swain', name: 'Swain' },
  { id: 'Sylas', name: 'Sylas' },
  { id: 'Syndra', name: 'Syndra' },
  { id: 'TahmKench', name: 'Tahm Kench' },
  { id: 'Taliyah', name: 'Taliyah' },
  { id: 'Talon', name: 'Talon' },
  { id: 'Taric', name: 'Taric' },
  { id: 'Teemo', name: 'Teemo' },
  { id: 'Thresh', name: 'Thresh' },
  { id: 'Tristana', name: 'Tristana' },
  { id: 'Trundle', name: 'Trundle' },
  { id: 'Tryndamere', name: 'Tryndamere' },
  { id: 'TwistedFate', name: 'Twisted Fate' },
  { id: 'Twitch', name: 'Twitch' },
  { id: 'Udyr', name: 'Udyr' },
  { id: 'Urgot', name: 'Urgot' },
  { id: 'Varus', name: 'Varus' },
  { id: 'Vayne', name: 'Vayne' },
  { id: 'Veigar', name: 'Veigar' },
  { id: 'VelKoz', name: 'Vel\'Koz' },
  { id: 'Vex', name: 'Vex' },
  { id: 'Vi', name: 'Vi' },
  { id: 'Viego', name: 'Viego' },
  { id: 'Viktor', name: 'Viktor' },
  { id: 'Vladimir', name: 'Vladimir' },
  { id: 'Volibear', name: 'Volibear' },
  { id: 'Warwick', name: 'Warwick' },
  { id: 'Wukong', name: 'Wukong' },
  { id: 'Xayah', name: 'Xayah' },
  { id: 'Xerath', name: 'Xerath' },
  { id: 'XinZhao', name: 'Xin Zhao' },
  { id: 'Yasuo', name: 'Yasuo' },
  { id: 'Yone', name: 'Yone' },
  { id: 'Yorick', name: 'Yorick' },
  { id: 'Yuumi', name: 'Yuumi' },
  { id: 'Zac', name: 'Zac' },
  { id: 'Zed', name: 'Zed' },
  { id: 'Zeri', name: 'Zeri' },
  { id: 'Ziggs', name: 'Ziggs' },
  { id: 'Zilean', name: 'Zilean' },
  { id: 'Zoe', name: 'Zoe' },
  { id: 'Zyra', name: 'Zyra' }
];

const itemList = [
    { id: '1001', name: 'Boots of Speed' },
    { id: '1004', name: 'Faerie Charm' },
    { id: '1011', name: 'Giant\'s Belt' },
    { id: '1026', name: 'Blasting Wand' },
    { id: '1027', name: 'Sapphire Crystal' },
    { id: '1028', name: 'Ruby Crystal' },
    { id: '1031', name: 'Chain Vest' },
    { id: '1033', name: 'Null-Magic Mantle' },
    { id: '1036', name: 'Long Sword' },
    { id: '1037', name: 'Pickaxe' },
    { id: '1038', name: 'B.F. Sword' },
    { id: '1042', name: 'Dagger' },
    { id: '1043', name: 'Recurve Bow' },
    { id: '1052', name: 'Amplifying Tome' },
    { id: '1053', name: 'Vampiric Scepter' },
    { id: '1054', name: 'Doran\'s Shield' },
    { id: '1055', name: 'Doran\'s Blade' },
    { id: '1056', name: 'Doran\'s Ring' },
    { id: '1082', name: 'The Dark Seal' },
    { id: '1083', name: 'Cull' },
    { id: '2003', name: 'Health Potion' },
    // Add more items here...
  ];
  

  return (
    <div className="build-planner-container">
      <div className="champion-selection">
        <h2>Champion Selection</h2>
        <select value={selectedChampion} onChange={handleChampionChange}>
          <option value="">Select a Champion</option>
          {championList.map((champion) => (
            <option key={champion.id} value={champion.id}>
              {champion.name}
            </option>
          ))}
        </select>
      </div>
      <div className="item-selection">
        <h2>Item Selection</h2>
        <div className="item-list">
          {itemList.map((item) => (
            <label key={item.id}>
              <input
                type="checkbox"
                value={item.id}
                checked={selectedItems.includes(item.id)}
                onChange={handleItemChange}
              />
              {item.name}
            </label>
          ))}
        </div>
      </div>
      <div className="selected-champion">
        {selectedChampion ? <p>Selected Champion: {selectedChampion}</p> : null}
      </div>
      <div className="selected-items">
        {selectedItems.map((item) => (
          <div key={item} className="item">
            <p>{item}</p>
            <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="final-build">
        {finalBuild.length > 0 ? (
          <>
            <h3>Final Build</h3>
            <ul>
              {finalBuild.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
      <div className="action-buttons">
        <button onClick={handleSaveBuild}>Save Build</button>
        <button onClick={handleResetBuild}>Reset Build</button>
      </div>
    </div>
  );
};

export default BuildPlanner;
