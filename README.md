# Password-Generator

Worked on a group project to create a random password generator based on 4 criteria (lowercase, uppercase, numbers, and/or symbols).

Here is our rough design/prototype: https://jamboard.google.com/d/1d204wtjKLjDC86HG8t7NN-AxekrJDXWeG6Zm0Zhawcw/viewer?f=0

This was the assignment below: 

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
I am presented with a series of inputs for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
THEN my input should be validated and at least one character type should be selected
WHEN all criteria are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is written to the page
