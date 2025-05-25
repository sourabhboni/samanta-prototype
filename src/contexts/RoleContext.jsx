// src/contexts/RoleContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { ROLES, roleList } from '../config/roles'; // Import our defined roles

// Create the context
const RoleContext = createContext();

// Create a custom hook for easy consumption of the context
export const useRole = () => {
  return useContext(RoleContext);
};

// Create the Provider component
export const RoleProvider = ({ children }) => {
  // Set a default role, e.g., Employee or null if you want to force selection
  const [currentRole, setCurrentRole] = useState(roleList[1].id); // Default to Employee

  const changeRole = (newRoleId) => {
    if (roleList.find((role) => role.id === newRoleId)) {
      setCurrentRole(newRoleId);
      console.log(
        `Role changed to: ${roleList.find((role) => role.id === newRoleId).name}`
      );
    } else {
      console.warn(`Attempted to change to an invalid role: ${newRoleId}`);
    }
  };

  const value = {
    currentRole,
    currentRoleName:
      roleList.find((role) => role.id === currentRole)?.name || '',
    changeRole,
    availableRoles: roleList, // Expose the list of roles
  };

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
};

export default RoleContext; // Exporting the context itself can be useful for some advanced cases
