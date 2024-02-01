import { Box } from '@chakra-ui/react'

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavigationLink({to, menuOpen, hoverColor, children, color="#fff"}) {
  return (
    <Box
          listStyleType={"none"}
          fontWeight={600}
          ml={{ xl: 5, base: 0 }}
          as="li"
          width={{ xl: "auto", base: "100%" }}
          textAlign={{ xl: "left", base: "center" }}
          mt={{ xl: 0, base: 3 }}
          _hover={{ backgroundColor: hoverColor }}
          borderRadius="8px"
          color={color}
        >
          <NavLink
          onClick={menuOpen}
            style={{
              padding: "5px 10px",
              borderRadius: "8px",
              display: "block",
            }}
            to={to}
          >
            {children}
          </NavLink>
        </Box>
  )
}
