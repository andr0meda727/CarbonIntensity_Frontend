import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OptimalWindowResult from '../OptimalWindowResult';

describe('OptimalWindowResult', () => {
    const mockProps = {
        startTime: '2025-12-14T10:00:00.000Z',
        endTime: '2025-12-14T13:00:00.000Z',
        cleanEnergyPercentage: 85
    };

    it('calculates and displays the correct duration in hours', () => {
        render(<OptimalWindowResult {...mockProps} />);

        // 10:00 to 13:00 is 3 hours
        expect(screen.getByText('3h')).toBeInTheDocument();
    });

    it('displays the correct percentage', () => {
        render(<OptimalWindowResult {...mockProps} />);
        expect(screen.getByText('85%')).toBeInTheDocument();
    });

    it('renders start and end time sections', () => {
        render(<OptimalWindowResult {...mockProps} />);
        expect(screen.getByText('Start')).toBeInTheDocument();
        expect(screen.getByText('End')).toBeInTheDocument();
    });
});