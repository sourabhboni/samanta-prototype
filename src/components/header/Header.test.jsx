// src/components/Header/Header.test.jsx
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom'; // Needed if your component uses Link or other router features
import i18n from '../../i18n'; // Your i18n instance
import { RoleProvider } from '../../contexts/RoleContext';
import Header from './Header';

// Mock ResizeObserver, as MUI components might use it and it can cause issues in JSDOM
// (JSDOM is the environment Jest/Vitest uses, which doesn't have full browser APIs)
beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {
      // do nothing
    }
    unobserve() {
      // do nothing
    }
    disconnect() {
      // do nothing
    }
  };
});

describe('Header Component', () => {
  test('renders the application title', () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <RoleProvider>
            <Header />
          </RoleProvider>
        </I18nextProvider>
      </MemoryRouter>
    );

    // Assuming your 'appTitle' key in common.json is "Samanta - AI HR Assistant" for English
    // screen.debug(); // Uncomment to see the DOM output in the console during test run
    const titleElement = screen.getByText(/Samanta - AI HR Assistant/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders language selection buttons', () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <RoleProvider>
            <Header />
          </RoleProvider>
        </I18nextProvider>
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: /EN/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ES/i })).toBeInTheDocument();
  });

  // Add more tests: e.g., role switcher is present
});
