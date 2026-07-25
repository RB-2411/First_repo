import { test, expect } from '@playwright/test';

// Pass the { request } fixture as an object parameter
test('first API : Post', async ({ request }) => {
  const loginResponse = await request.post('https://rahulshettyacademy.com/loginpagePractise', {
    data: {
      username: 'rahulshettyacademy',
      password: 'Learning@830$3mK2'
    }
  });
  
  expect(loginResponse.ok()).toBeTruthy(); // Assert Step 1 succeeded
  console.log(loginResponse);
  const loginData = await loginResponse.json();
  const token = loginData.token; // Extract the token
  expect(token).toBeDefined();
});