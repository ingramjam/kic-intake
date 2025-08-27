# Form Configuration Documentation

This document explains how to modify the intake form questions and structure without needing to understand the underlying code.

## Table of Contents
1. [Question Types](#question-types)
2. [Adding New Questions](#adding-new-questions)
3. [Validation Rules](#validation-rules)
4. [Conditional Logic](#conditional-logic)
5. [Examples](#examples)

## Question Types

The following question types are available:

### StaticMessage
Used for displaying information without input.
```javascript
{
    type: 'StaticMessage',
    title: 'Your Title Here',
    helperText: 'Additional explanation text here'
}
```

### TextInput
Used for single-line text input.
```javascript
{
    type: 'TextInput',
    title: 'Your Question',
    placeholder: 'Enter your answer here',
    required: true
}
```

### TextareaInput
Used for multi-line text input.
```javascript
{
    type: 'TextareaInput',
    title: 'Your Question',
    placeholder: 'Enter your detailed answer here'
}
```

### RadioGroup
Used for selecting one option from many.
```javascript
{
    type: 'RadioGroup',
    title: 'Your Question',
    options: [
        { label: 'Option 1', value: 'value1' },
        { label: 'Option 2', value: 'value2' }
    ]
}
```

### CheckboxGroup
Used for selecting multiple options.
```javascript
{
    type: 'CheckboxGroup',
    title: 'Select all that apply',
    options: [
        { label: 'Option 1', value: 'value1' },
        { label: 'Option 2', value: 'value2' }
    ]
}
```

### CalendarScheduler
Used for date and time selection.
```javascript
{
    type: 'CalendarScheduler',
    required: true
}
```

## Adding New Questions

To add a new question:

1. Open `formConfig.js`
2. Add a new entry with a unique ID
3. Set the question type and properties
4. Set the order number (determines where it appears in the form)

Basic template:
```javascript
uniqueQuestionId: {
    type: 'QuestionType',
    title: 'Your Question',
    required: true,
    order: 10,
    // Other properties as needed
}
```

## Validation Rules

Available validation types:

- `zipCode`: Validates ZIP code format and range
- `phone`: Validates phone number format
- `email`: Validates email format
- `age`: Validates age range
- `date`: Validates date format and range

Example:
```javascript
{
    type: 'TextInput',
    validations: {
        type: 'zipCode',
        min: 90001,
        max: 96162
    },
    errorMessage: 'Please enter a valid California ZIP code'
}
```

## Conditional Logic

To show questions based on previous answers:

```javascript
{
    type: 'RadioGroup',
    showIf: 'age >= 18 && isForSelf === "true"',
    // ... other properties
}
```

Available operators:
- `===` (exact match)
- `>`, `<`, `>=`, `<=` (number comparisons)
- `&&` (AND)
- `||` (OR)

## Examples

### Age Question
```javascript
age: {
    type: 'TextInput',
    title: 'What is your age?',
    validations: {
        type: 'age',
        min: 13
    },
    required: true,
    errorMessage: 'You must be at least 13 years old',
    order: 10
}
```

### Smoking Frequency
```javascript
smokingFrequency: {
    type: 'RadioGroup',
    title: 'How often do you smoke?',
    options: [
        { label: 'Daily', value: 'daily' },
        { label: 'Weekly', value: 'weekly' },
        { label: 'Occasionally', value: 'occasional' }
    ],
    required: true,
    showIf: 'isForSelf === "true"',
    order: 15
}
```

### Contact Agreement
```javascript
contactAgreement: {
    type: 'CheckboxGroup',
    title: 'Contact Preferences',
    options: [
        {
            label: 'I agree to receive phone calls',
            value: 'calls',
            required: true
        },
        {
            label: 'I would like to receive text messages',
            value: 'texts'
        }
    ],
    order: 5
}
```
