import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemon } from '../pages';

describe('Testa o componente <FavoritePokemon.js />.', () => {
  it('Testa se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos.', () => {
    renderWithRouter(<FavoritePokemon />);

    const favoriteText = screen.getByRole('heading', { name: 'Favorite Pokémon' });
    const p1 = screen.getByText('No favorite Pokémon found');

    expect(favoriteText).toBeInTheDocument();
    expect(p1).toBeInTheDocument();
  });
});
