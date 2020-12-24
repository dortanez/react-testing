import { render, fireEvent } from '@testing-library/react';
import CoinFlip from './CoinFlip';

it('should render without crashing',() => {
    render(<CoinFlip/>)
})

it('matches snapshot',() => {
    const {asFragment} = render(<CoinFlip/>);
    expect(asFragment()).toMatchSnapshot();
})

it('should not show coin image when page loads',() => {
    const {getByAltText} = render(<CoinFlip/>);
    const img = getByAltText('');
    expect(img).toHaveAttribute('src', '');
})