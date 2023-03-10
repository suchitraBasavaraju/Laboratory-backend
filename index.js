const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
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

const fetchLaboratoryTests = (req, res) => {
    res.send(tests);
};

const fetchLaboratoryTestById = (req, res) => {
    const testId = req.params.testId;
    const test = tests.find(t => t.id == testId);
    if (!test) {
        res.status(404).send('Invalid test ID');
    } else {
        res.send(test);
    }
};

const addLaboratoryTest = (req, res) => {
    const test = {
        id: tests.length + 1,
        name: req.body.name,
        price: req.body.price,
        subTests: req.body.subTests
    };
    tests.push(test);
    res.send(test);
};

const modifyExistingLaboratoryTest = (req, res) => {
    const test = tests.find(t => t.id === parseInt(req.params.id));
    if (!test) res.status(404).send('The test with the given ID was not found.');

    test.name = req.body.name;
    test.price = req.body.price;
    test.subTests = req.body.subTests;
    res.send(test);
};

// Delete a test
const deleteLaboratoryTest = (req, res) => {
    const test = tests.find(t => t.id === parseInt(req.params.id));
    if (!test) res.status(404).send('The test with the given ID was not found.');

    const index = tests.indexOf(test);
    tests.splice(index, 1);

    res.send(test);
};

app.get('/laboratory/tests', fetchLaboratoryTests);
app.get('/laboratory/tests/:testId', fetchLaboratoryTestById);
app.post('/laboratory/tests', addLaboratoryTest);
app.put('/laboratory/tests/:id', modifyExistingLaboratoryTest);
app.delete('/laboratory/tests/:id', deleteLaboratoryTest);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
