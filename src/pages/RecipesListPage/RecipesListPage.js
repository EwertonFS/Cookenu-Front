import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import useProtectPage from '../../hooks/use.ProtecdPage';

const RecipesListPage = () => {
  // Com esse hook ele retornaria para pagina de login toda vez que o ususario nao autorizado tentasse ir ate a paggina  
  useProtectPage()
    return (
        <Stack direction="row" spacing={2}>
            <h1>RecipesListPage </h1>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
      </Stack>
    )
 }

 export default RecipesListPage 