import { useState } from 'react';

const usePopup = () => {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (popupId) => setActivePopup(popupId);
  const closePopup = () => setActivePopup(null);

  return { activePopup, openPopup, closePopup };
};

export default usePopup;