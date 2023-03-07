import { ChevronLeftIcon, HStack, Text } from 'native-base';
import React from 'react';


const Header = () => {
    return (
      <HStack mt={12} pl={4} alignItems='center' >
        <ChevronLeftIcon color='white' size={18} />
        <Text ml={2} fontSize={18} color='white' fontWeight='bold' >BEAUTY PARLOUR</Text>
      </HStack>
    )
  }
export default Header

