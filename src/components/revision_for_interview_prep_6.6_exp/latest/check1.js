#Jest learnings

Start writing unit test cases for Order Summary and ProductList file

by following b2c repo and b2b repo


React Jest (Writing unit test cases for testing):
 Recipes(Common Test patterns):

1.Setup/Teardown:
using beforeEach() and afterEach()

2.act() : this is not used in repo --> this is related to UI interactions
like rendering,user events or data fetching for these things we use act()

3.Rendering: Testing whether behaviour is right for props
it is used here this testing is done in our repo work on it.

4.Data Fetching:
Instead of calling real APIs in all your tests, you can mock requests with dummy data.

this act is something which we import from : import { act } from "react-dom/test-utils";

check this code 


5.Mocking modules:




ProductList.test.js:

on selecting elements and adding them to cart

on clikcing to Go to checkout we go to OrderSummary page

what I can try -->


  # Front end developer role learnings

I am coming back : on Friday 24th to complete designing UI part

Interview questions and learnings:

create cost calculator in React 
where u can add items to cart and calculate price based on the quantity and price of it--> 
design a shopping cart in React JS --> try to do it with json data and with api also(try solving it using useState and useReducer)

always I need to come up with as minimal style in interview which will work

Using flex-wrap property we can wrap the flex items onto one line or allow them to be stacked up into multiple lines

some method in React when used on object returns true if if any one of item in tat object passes the condition else false

completely understand useReducer hook from documentation

# Imp Learnings_git

how to stash changes and retrieve it:
commands:

To save your changes in the stash, run the command:

git stash save "optional message for yourself"

View Stashed Changes
To see what is in your stash, run the command:

git stash list

This returns a list of your saved snapshots in the format stash@{0}: BRANCH-STASHED-CHANGES-ARE-FOR: MESSAGE. 
The stash@{0} part is the name of the stash, and the number in the curly braces ({ }) is the index of that stash. 
If you have multiple change sets stashed, each one will have a different index.

If you forgot what changes were made in the stash, you can see a summary of them with git stash show NAME-OF-STASH


Retrieve Stashed Changes
To retrieve changes out of the stash and apply them to the current branch you’re on, you have two options:

git stash apply STASH-NAME applies the changes and leaves a copy in the stash
git stash pop STASH-NAME applies the changes and removes the files from the stash

stash@{0}: On volta-design: volta-design-backlog-changes is the name of stash 5 files:
CustomChipList.scss
CustomChipList.js
index.js
data.js
CustomChipListdata.js

# DOM manipulation method short notes

DOM Manipulation methods:

Refer to c:/users/rakesh.b/personal_learnings/my-app for code tried : github link: 

with appendChild we can only append html elements like div,span and so on. and also we can append only one element at a time
with append method we can append html elements and also strings and also we can append many elements at once.

after creating element to add content to it we can use : innerText or textContent difference is on printing the content with textContent
it displays the entire content exactly as present with spacings and paddings.

where as innerText prints just the content which is visible on the screen and without spacing things

# React Testing Learning

React Testing:

Note: for testing in jest regarding user interactions , follow this link : 
https://stackoverflow.com/questions/46236578/simulating-user-interaction-with-a-react-component-in-a-jest-test 

mostly we r seeing way of writing tests   applicable for React Testing library

Tutorial 1 :

Jest - JS testing framework or a test runner runs and says whether test is pass or fail
React Testing Library - utility which provides virtual DOM which can be used for testing

Video 3: 

Types of Tests:
Unit Tests
Inegration tests
E2E tests - test on real UI , testing appln flow


to run tests , we have in package.json already test scripts so use : npm test

refer to writing a test like video 7 so tat it can be used  in ProductList or OrderSummary

Video 9:
Test Driven development(TDD):
means write tests first then write code.
three phases : 1. write tests tat fail , 2. change code so test passes , 3.refactor to coptimise and tests should pass also..

Video 11:
to run only ceratin test among many tests use .only or .skip

Video 12:
to group tests , use describe() --> suggests group and write tests within it , can use .only and .skip with describe
 we can write describe block within describe
 
 1 file is 1 test suite
 
 Video 13:
 file name conventions for test files : filename.js , filename.spec.js or file.js within src/__tests__ folder
 typescript file also use same convention. instead of test() we can use it() which signified to single test
 for test.only functionality we have fit() with it() , test.skip() --> xit()
 
 
 Video 14:
 Code coverage: --> run npm coverage or npm run coverage
 
 to get code coverage report:
 go to package.json add in scripts : coverage: --> since it is already added in my code repo package.json use it
 
 this is already present with us
 
 to get a full report : set watchAll to true 
 
 jest also generates html file for coverage when it is run which will be in coverage folder --> cov-report folder --> index.html
 
 we can also set threshold(capacity) to coverage in package.json
 
 Video 15: Assertions --> these decide whether test passes or fails we use expect(value) for assertion along with matcher function
  which contains the expected correct value
  
  Video 16:
   what to test?
    few of guidelines:
	
	1.Test component renders
	2.Test component render with props.
	3.Test component render in different states.
	4. Test components react to events.
	
	what not to test:
	
	. Implementation details
	  Third party code
	  Code tat is not important from user point of view. --> did not get 
	  
	  Video 17: Queries - methods which help to find elements on page
	  
	  Video 19: Options present for getByRole method - name and level --> it is used specific to heading role
	  getByRole method is most important one
	  
	  Video 20: getByLabelText
	  
	  Note : screen is as in tutorial , different thing can be used as per code in my repo
	  this is a query method where based on label text we write a test , for eg: <h1>Name</h1> , then 
	  const s = screen.getByLabelText('Name') ; if two or more elements have same labelText , we pass selector as second arg,
	  where second argument contain type of element for eg : in this case h1 like tat
	  
	  Video 21: getByPlaceholderText - it works with placeholder attribute passed to element
	  
	  note : video 17 to 26 --> gives info abt query methods
	  
	  video 27: Priority order for queries:
	  1.getByRole
	  2.getByLabelText --> really works for form fields
	  3.getByPlaceholderText - not a substitute for label
	  4.getByText - contained in div,span and p tag
	  5.getByDisplayValue 
	  6.getByAltText
	  7.getByTitle
	  8.getByTestId
	  
	  video 28: check it out while writing tests tmrw 
	  
	  video 30: test certain element if it is not rendered in DOM --> for this case we can use queryBy or queryAllBy based on problem
	  
	  queryBy --> returns null if no match found , queryAllBy --> returns an empty array if no match found
	  
	  getByclassOfQueries return true only if single match is present , if more than one match or no match is found
	  it returns false.
	  
	  video 31 - for data that is got by api responses (appearance and disappearance of code) - use findBy,findAllBy methods
	  findBy method has 1000 ms by default and findBy returns a promise , to make sure we have timeout more than 1000 ms we have to pass 
	  timeout value as third argument in test , like {timeout:2000}
	  
	  we should always use above queries and not manual queries like querySelector --> bcoz for eg: getById with querySelector is not visible to 
	  user
	  
	  Video 32:
	  
	  to visualise the DOM tree before running npm test use screen.debug() in my repo I need to check wt I can use
	  
	  to get roles present import logRoles from react-testing-library , then call logRoles(view.container)
	  where view contains render(<Component/>)
	  
	  roles - mean it shows it shows wt type of input element it is eg: it shows this way if btn is present in component: button name of button 
	  
	  video 34:
	  
	  for better testing practice we can make use of  testing playground - chrome extension--> testing playground suggests best query we can use
	  for tat element on inspecting it
	  
	  Video 35: User Interactions
	  
	  use user-event a companion library for react-testing-library , user-event is by default installed 
	  
	  to upgarde in npm : npm upgrade @testing-library/user-event@latest - verify it once before using
	  
	  Video 36: Pointer(mouse-click) Interactions
	  
	  if there is only header tag , we can use screen.getByRole('heading') , eg: if there is h1 and h2 we can write test as : screen.getRole("heading",{level:2}) for h1
	  
	  Imp:
	  check Convenience API's later
	  
	  from video 37 : I am not taking notes , will take notes on Saturday
	  
	  Video 37: Keyboard interactions:
	  for input of type number getByRole is spinbutton
	  
	  
	  Done Today - yes
	  
	  Video 48: Static analysis testing - it deals with how well code is written
	  
	  Static analysis testing tools - 1.ESlint , 2.Prettier , 3.Typescript , 4.Husky, 5.lint action
	  
	  eslint : how to run eslint  script so tat we know if there are any eslint errors in my project --> npm run lint
	  
	  go to package.json in scripts add "lint" : "eslint --ignore-path .gitignore ."  --> this will ignore the files and folders  present in .gitignore
	  
	  the last . represents current directory
	  
	  Video 51: Husky - with husky we get a file smething like a config file(pre-commit script) which has rule tat commit happens only if code is linted properly
	  and formatted properly but it checks for entire data base  for applying only to things we changed tat is changed files --> we need to use lint staged


