import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'
 
test('renders page correctly', () => {
    render(<Page />);
    screen.debug(); // 输出页面的 DOM 结构
    // 继续测试...
  });
  