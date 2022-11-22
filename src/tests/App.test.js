import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação.', () => {
  it('Testa se o topo da aplicação contém um conjunto fixo de links de navegação.', () => {
    const { history } = renderWithRouter(<App />);

    const homeText = screen.getByRole('link', { name: 'Home' });
    const aboutText = screen.getByRole('link', { name: 'About' });
    const favoriteText = screen.getByRole('link', { name: 'Favorite Pokémon' });

    expect(homeText).toBeInTheDocument();
    expect(aboutText).toBeInTheDocument();
    expect(favoriteText).toBeInTheDocument();

    userEvent.click(homeText);
    expect(history.location.pathname).toBe('/');

    userEvent.click(aboutText);
    expect(history.location.pathname).toBe('/about');

    userEvent.click(favoriteText);
    expect(history.location.pathname).toBe('/favorites');
  });
});
