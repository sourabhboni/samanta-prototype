// src/components/AISuggestionsPanel/AISuggestionsPanel.jsx
import React from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'; // Import motion

const AISuggestionsPanel = ({ suggestions = [] }) => {
  const { t } = useTranslation('common');

  // Animation variants for the list container to stagger children
  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren', // Animate children after the parent
        staggerChildren: 0.1, // Stagger animation of children by 0.1s
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  // Animation variants for each list item
  const itemVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hidden: { opacity: 0, y: 20 }, // Start 20px down and faded out
  };

  return (
    <Paper elevation={3} sx={{ p: 2 /* other styles */ }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          mb: 1.5,
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'medium',
        }}
      >
        <LightbulbIcon sx={{ mr: 1, color: 'primary.main' }} />
        {t('suggestions.panelTitle', 'AI Suggestions')}
      </Typography>
      <Divider sx={{ mb: 1.5 }} />
      {suggestions && suggestions.length > 0 ? (
        <motion.ul // Use motion.ul for the list container
          style={{ listStyle: 'none', padding: 0, margin: 0 }} // Reset browser default ul styles
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          {suggestions.map((suggestion) => {
            const IconComponent = suggestion.icon;
            return (
              // Wrap ListItem content or ListItem itself in motion.li
              // For more control over layout, wrapping content inside ListItem might be easier
              // Or make the ListItem itself a motion component if it doesn't break MUI styles
              <motion.li
                key={suggestion.id}
                variants={itemVariants}
                style={{ padding: 0, margin: 0 }}
              >
                <ListItem sx={{ alignItems: 'flex-start', py: 0.75, px: 0 }}>
                  {IconComponent && (
                    <ListItemIcon
                      sx={{
                        minWidth: 'auto',
                        mr: 1.5,
                        mt: '3px',
                        color: 'text.secondary',
                      }}
                    >
                      <IconComponent fontSize="small" />
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={t(
                      suggestion.textKey,
                      'Suggestion text unavailable...'
                    )}
                    primaryTypographyProps={{
                      variant: 'body2',
                      color: 'text.secondary',
                    }}
                  />
                </ListItem>
              </motion.li>
            );
          })}
        </motion.ul>
      ) : (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontStyle: 'italic' }}
        >
          {t('suggestions.noSuggestions', 'No suggestions at this time.')}
        </Typography>
      )}
    </Paper>
  );
};

export default AISuggestionsPanel;
