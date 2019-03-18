/* Setup files module.
**
** This module will be executed before each test.
**
** This module contains a code to configure or set up the
** testing environment before each test. Since every test
** runs in its own environment, these scripts will be
** executed in the testing environment immediately before
** executing the test code itself.
**
** This module excutes before setupFramework module.
**
*/

import { LocalStorage } from './mocks/localStorage';

global.localStorage = new LocalStorage();

global.__ENV__ = global.__PROD__ = process.env.NODE_ENV;

const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);

const tasks = [
    {
        "id":        "xjh",
        "message":   "Успешно пройти React-интенсив компании Lectrum",
        "completed": false,
        "favorite":  true,
    },
    {
        "id":        "xjr",
        "message":   "Взять автограф у Джареда Лето",
        "completed": false,
        "favorite":  false,
    },
    {
        "id":        "xrh",
        "message":   "Зарегестрировать бабушку в Твиче",
        "completed": false,
        "favorite":  false,
    },
    {
        "id":        "rjh",
        "message":   "Записать собаку на груминг",
        "completed": false,
        "favorite":  false,
    },
    {
        "id":        "xph",
        "message":   "Научиться играть на барабанах",
        "completed": true,
        "favorite":  false,
    }
];

global.__ = {
    errorMessage,
    token,
    error,
    tasks,
};
