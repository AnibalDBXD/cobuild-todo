import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';

const FullSpinner = ({ speed = "1s" }: { speed?: string}): JSX.Element => {
  return (
    <Box
      alignItems="center"
      display="flex"
      height="100vh"
      justifyContent="center"
      width="100%"
    >
      <Spinner size="xl" speed={speed}/>
    </Box>
  );
};

export default FullSpinner;
