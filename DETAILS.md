# Implementation Details

At first load of the appliction (startApp function) the following steps are carried out.

1.  Neccessary values are initialized (page, url, data).
2.  HTML elements are initialized (table, buttons).
3.  Added click functions to the previous and next buttons.
4.  The getData() is called which is an asynchronous method that passes the api URL to the makeRequest() method that returns a promise.
5.  After the promise has been resolved, initial values are updated accordingly and another method is called to populate the table (populateTable()).
6.  Within the populateTable() method, we check the if page is 1 to disable the previous button (checkPrev()).
7.  Using the page number in a forEach() method of the data, set the table row attribute data-entryid to the id of the corresponding data and the row inner text to the corresponding data values.
8.  Set inner text of the label to show the current page view.
9.  The nextBtn() and previousBtn() methods increase/decrease page number accordingly and triggers request from api.
