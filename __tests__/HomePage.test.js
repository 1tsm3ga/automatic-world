import React from 'react';
import {render} from '@testing-library/react';
import Home from '../pages/index';

describe('Home page', () => {
	it('renders title', () => {
	const {getByText} = render(<Home />);
	const titleElement = getByText(/Create Next App/i);
	expect(titleElement).toBeInTheDocument();

	it('renders navigation links'), () => {
	const {getByRole} = render(<Home />);
	const aboutLink = getByRole('link', {name: /about/i});
	const contactLink = getByRole('link', {name: /contact/i});
	expect(aboutLink).toBeInTheDocument();
	expect(contactLink).toBeInTheDocument();
	};
    },
