import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import Fab from '@mui/material/Fab';
import Script from 'next/script';
import { useState } from 'react';

const FloatButton = () => {
  const [viewScript, SetViewScript] = useState(false);

  return (
    <>
      {viewScript && (
        <>
          <Script src="https://apps.elfsight.com/p/platform.js" />
          <div className="elfsight-app-4f8ae513-2eab-4fd2-966d-49828a7d5e6c" />
        </>
      )}

      <Fab aria-label="edit" onClick={() => SetViewScript(true)}>
        <SocialDistanceIcon />
      </Fab>
    </>
  );
};

export default FloatButton;
