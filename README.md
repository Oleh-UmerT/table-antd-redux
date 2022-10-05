1. Build a sample app using reactjs and antd
2. The app show a table data (first name, last name, date of birth, street address, city zip) with 5 rows. Please use dummy data
3. Each row has "View Details" action / option
4. View Details should take user to new page. On this new page, we show 2 tables
5. Table 1 : first name, last name, date of birth, street address, city zip. from previous page row Table 2: Use the name and date of birth of the row selected and call an api to fetch data for table 2. You can assume any dummy rows for this table
6. KEY AND IMPORTANT : When clicked on View details in step 4, the row context should be shared with View 2 in CLEAN fashion using React context API or Redux. When view 2 loads, the data (name, date of birth) from this context should be used to make the API call in step 5, this is very important and required. API call should only be using data from the context
Let me know if you have any questions or concerns.