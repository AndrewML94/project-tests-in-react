import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Testa o componente <NotFound.js />.', () => {
  it('Testa se a página contém um heading h2 com o texto Page requested not found e uma imagem.', () => {
    renderWithRouter(<NotFound />);

    const notFoundText = screen.getByRole('heading', { name: 'Page requested not found' });
    const notFoundImage = screen.getByRole('img');

    expect(notFoundText).toBeInTheDocument();
    expect(notFoundImage).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
