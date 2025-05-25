// src/pages/DashboardPage.test.jsx
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from '../i18n'; // Adjust path if needed
import { RoleProvider } from '../contexts/RoleContext'; // Adjust path if needed
import DashboardPage from './DashboardPage';

beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('DashboardPage Component', () => {
  test('renders dashboard title and welcome message for default role', () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <RoleProvider>
            {' '}
            {/* RoleProvider will provide a default role */}
            <DashboardPage />
          </RoleProvider>
        </I18nextProvider>
      </MemoryRouter>
    );

    // The default role in RoleContext is Employee.
    // The welcome message in common.json for Employee is "Welcome to Samanta!"
    // The title is "Employee Dashboard"
    expect(screen.getByText(/Employee Dashboard/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Welcome to Samanta! This is your main dashboard area for the Employee role./i
      )
    ).toBeInTheDocument();
  });

  // You could add more tests here, e.g., by wrapping RoleProvider with a specific role
  // to test how the dashboard changes, but that might involve more complex context mocking or setup.
});
