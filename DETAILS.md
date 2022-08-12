# Implementation Details

At first load of the appliction (startApp function) the following steps are carried out.

1.  Neccessary variables are initialized (page, url, results).
2.  HTML elements are initialized (table, buttons).
3.  Added click functions to the previous and next buttons.
4.  The getData() is called which is an asynchronous method that passes the api URL to the makeRequest() method that returns a promise.
5.  After the promise has been resolved, initial values are updated accordingly and another method is called to populate the table (populateTable()).
6.  Within the populateTable() method, we check if page is 1 to disable the previous button (checkPrev()).
7.  Using the page number in a forEach() method of the data, set the table row attribute data-entryid to the id of the corresponding data and the row inner text to the corresponding data values.
8.  Set inner text of the label to show the current page view.
9.  The nextBtn() and previousBtn() methods increase/decrease page number accordingly and triggers request from api.

# How does this work
First declared and set page to 1 as well as the url and results parameters then get html elements (table, label, next and previous buttons), registered click functions for both buttons (next and previous) that increases/decreases page number accordingly. There is a checkPrev() function that disables the previous button if page is 1.
The function getData() is then declared and called at initial render, it is an asynchronous function that calles another method makeRequest() that returns a promise of the api response/data and assigned to the results variable and then sent to the populateTable() method which handles mapping through the returned data and assigning to the table rows accordingle and also updating the label text to show the current page.
