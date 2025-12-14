import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CleanEnergyDisplay from '../CleanEnergyDisplay';

describe('CleanEnergyDisplay', () => {
    it('renders green text for high clean energy (> 60%)', () => {
        const mockData = { cleanEnergyPercentage: 75 };
        render(<CleanEnergyDisplay dayData={mockData} />);

        const percentageText = screen.getByText('75%');
        expect(percentageText).toBeInTheDocument();
        expect(percentageText).toHaveClass('text-green-300');
    });

    it('renders orange text for medium clean energy (40-60%)', () => {
        const mockData = { cleanEnergyPercentage: 50 };
        render(<CleanEnergyDisplay dayData={mockData} />);

        const percentageText = screen.getByText('50%');
        expect(percentageText).toHaveClass('text-orange-300');
    });

    it('renders red text for low clean energy (< 40%)', () => {
        const mockData = { cleanEnergyPercentage: 30 };
        render(<CleanEnergyDisplay dayData={mockData} />);

        const percentageText = screen.getByText('30%');
        expect(percentageText).toHaveClass('text-red-300');
    });
});