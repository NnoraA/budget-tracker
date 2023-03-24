import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '@budget-tracker/components/button/button';

describe('Button', () => {
  describe('by default', () => {
    it('should render', () => {
      const button = render(<Button />);

      expect(button).toBeDefined();
      expect(() => button.getByTestId('icon')).toThrow(
        'Unable to find an element by: [data-testid="icon"]'
      );
    });
  });

  describe('with icon', () => {
    it('should render icon', () => {
      const button = render(<Button icon="write" />);

      expect(button.getByTestId('icon')).toBeDefined();
    });
  });
});
