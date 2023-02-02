const express = require('express');
const app = express();
const port = 3000;


const tests = [
    {
        id: 1,
        name: 'Blood Test',
        price: 50,
        subTests: [
            {
                name: 'Complete Blood Count',
                description: 'Measures various components of the blood, such as red and white blood cells, hemoglobin, and platelets.'
            },
            {
                name: 'Liver Function Test',
                description: 'Assesses the function of the liver by measuring levels of certain enzymes and proteins in the blood.'
            },
            {
                name: 'Kidney Function Test',
                description: 'Checks how well the kidneys are working by measuring levels of creatinine and other substances in the blood.'
            }
        ]
    },
    {
        id: 2,
        name: 'Thyroid Test',
        price: 40,
        subTests: [
            {
                name: 'TSH',
                description: 'Measures the level of thyroid-stimulating hormone, which helps to regulate the production of thyroid hormones.'
            },
            {
                name: 'T3',
                description: 'Measures the level of triiodothyronine, a type of thyroid hormone.'
            },
            {
                name: 'T4',
                description: 'Measures the level of thyroxine, a type of thyroid hormone.'
            }
        ]
    },
    {
        id: 3,
        name: 'Diabetes Test',
        price: 30,
        subTests: [
            {
                name: 'Fasting Blood Sugar',
                description: 'Measures the level of glucose in the blood after an 8-hour fast.'
            },
            {
                name: 'Postprandial Blood Sugar',
                description: 'Measures the level of glucose in the blood 2 hours after eating.'
            },
            {
                name: 'HbA1c',
                description: 'Measures the average blood glucose level over the past 2-3 months.'
            }
        ]
    }
];

app.get('/laboratory/tests', (req, res) => {
    res.send(tests);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
