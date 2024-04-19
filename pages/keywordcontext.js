// In a file like context/KeywordsContext.js
import { createContext, useContext, useState } from 'react';
const KeywordsContext = createContext(); /*KeywordsContext Provide Value of useState*/
export const KeywordsProvider = ({ children }) => {
  const [keywords, setKeywords] = useState([]);

  return (
    <KeywordsContext.Provider value={{ keywords, setKeywords }}>
      {children}
    </KeywordsContext.Provider>
  );
};
export const useKeywords = () => { /*Use This inside work component*/
  return useContext(KeywordsContext);
};
const KeywordsProviderWrapper = ({ children }) => {
  return <KeywordsProvider>{children}</KeywordsProvider>;
};

export default KeywordsProviderWrapper;