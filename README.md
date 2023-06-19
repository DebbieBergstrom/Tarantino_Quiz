# **The Ultimate Tarantino Quiz**

Welcome to 

![amiresponsive](image url)

*Please have a look at the deployed website ![here.](site url)*

&nbsp;

## **CONTENT**

## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Returning Visitor Goals](#returning-visitor-goals)
    3. [Site Owner Goals](#site-owner-goals)
    4. [Developer Goals](#developer-goals)
2. [User Experience](#user-experience)
    1. [User Stories](#user-stories)
3. [Design](#design)
    1. [Colour](#colours)
    2. [Fonts](#fonts)
    3. [Structure](#structure)
    4. [Wireframes](#wireframes)
4.  [Features](#features)
5. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Device testing](#performing-tests-on-various-devices)
    6. [Browser compatibility](#browser-compatability)
    7. [Testing user stories](#testing-user-stories)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)

&nbsp;

## **GOALS**
### **Project Goals**


### **User Goals**

- 

### **Returning Visitor Goals**

- 

### **Site Owner Goals**

- 

### **Developer Goals**

- 

&nbsp;

## **USER EXPERIENCE**


&nbsp;
### **USER STORIES**
#### **First time users**
1. _As a first-time user, I want to 
2. _As a first-time user, I want to 
3. _As a first-time user, I want to 
4. _As a first-time user, I want to 
5. _As a first-time user, I want to 
6. _As a first-time user, 
#### **Returning users**
8. _As a returning user, I want to
9. _As a returning user, I want to
10. _As a returning user, I want to
11. _As a returning user, I want to 

#### **Site owner**
14. _As the site owner, I want users to 
15. _As the site owner, I want users to 
16. _As the site owner, I want users to 
17. _As the site owner, I want users to 

&nbsp;

## **FEATURES**

The website has NUMBER OF responsive pages, although the "Home" page consists of NUMBER OF sections that corresponds to approximatley NUMBER OF pages. By using correct HTML markup and labels it is ensured screen readers can accurately interpret the pages.

&nbsp;

### **HEADER & NAVIGATION BAR**


### **LANDING PAGE / HERO IMAGE**


&nbsp;

### **FOOTER**

- The footer is fixed on every page and contains the social media links. It's important these links are easily accessed because 
- User stories covered: 

&nbsp;

### **404 - PAGE NOT FOUND ERROR MESSAGE**

A custom-made 404 error page was made since it is a simple yet effective way to improve the user experience on your website and keep users happy even if an error page occurs. It has the header, footer and colors from the original design.
- User stories covered: 

![](image url)

&nbsp;

## **DESIGN**

### **Colors**
- Color scheme inspiration was taken from 
- A complementary color was added for sharp contrast 
- These design choices was thought to help create a visually appealing and cohesive website that will leave a positive impression on our visitors.

![](image url)

### **Fonts**

- Logo /h1: Arial??? 

### **Structure**
The site has been designed with a user-friendly and intuitive structure. Upon arrival, the user is greeted with a ????????????????????????????????

The website is composed of :

- The homepage, which features ?????????????????

By organizing the content into distinct pages, the website makes it easy for users to navigate and find the information they are looking for. Additionally, the use of a consistent navigation bar and footer throughout the website ensures that users can always find their way back to the main sections of the website and find the social media links.

### **Wireframes**

<details><summary>Home</summary>
<img src="">
</details>

&nbsp;

## **Technologies Used**

### **Languages**
- HTML
- CSS
- JavaScript

### **Frameworks & Tools**
- Git
- GitHub
- Gitpod
- Tinypng
- Paint (for Windows)
- Balsamiq
- Google Fonts
- Adobe Photo Shop
- Font Awsome
- Favicon.io 
- W3C validator
- Jigsaw CSS validator
- WAVE Web Accessibility Evaluation Tool

&nbsp;

## **Testing**

### **HTML Validation**

The W3C Markup Validation Service was used to validate the HTML of the website. All pages pass with no errors except index-page. It states a contrast error of the Google-map at the bottom of the page.

index.html [results](https://validator.w3.org/??????????????????????????)

404.html [results](https://validator.w3.org/??????????????????????????)

&nbsp;

### **CSS Validation**

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website.

<details><summary>style.css</summary>
<img src="">
</details>

&nbsp;

### **Accessibility**
The WAVE WebAIM web accessibility evaluation tool was used to ensure the website met high accessibility standards. All pages pass with 0 errors.

index.html [results](https://wave.webaim.org/report???????????????????)

404.html [results](https://wave.webaim.org/report???????????????????)

&nbsp;

### **Performance**
Google Lighthouse in Google Chrome Developer Tools was used to test the performance of the website. 

<details><summary>Home</summary>
<img src="docs/validation/lighthouse_index.png">
</details>
<details><summary>Courses</summary>
<img src="docs/validation/lighthouse_courses.png">
</details>
<details><summary>Dive Sites</summary>
<img src="docs/validation/lighthouse_divesites.png">
</details>
<details><summary>Gallery</summary>
<img src="docs/validation/lighthouse_gallery.png">
</details>

### **Performing tests on various devices**
The website was tested on the following devices:
- Desktop screen 4k
- Samsung s22 Ultra
- iPhone XR
- Samsung 360 Laptop

### **Browser compatability**
The website was tested on the following browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Egde
- Apple Safari

&nbsp;

### **Testing User Stories**

1. As a first-time user, I want to 

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|


<details><summary>Screenshots</summary>
<img src="">
</details>


&nbsp;

2. As a returning user, I want to 

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|


3. As the site owner, I want users to have a custom made 404 error message with the websites familiar design to direct them back to the website when needed.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| 404 error page | On 404 error page click on link ?????????????????????????????????? (link starts at Home) or any link up in the navigation bar | Find back to home page | Works as expected |

<details><summary>Screenshots</summary>
<img src="">
</details>

&nbsp;

## **Bugs**

| **Bug** | **Fix** |
| ----------- | ----------- |
| 1. When reloading page, both Home Page and Quiz is visible, but quiz should be hidden | Added !important to the hidden class with display:none|
| 2. Couldn't get the quearySelector to get elements by ID| I changed to getElementsById |
| 3. Can't get the images to size properly in the game-box contaner| Changed image sizes and width to 100%, height auto.|
| 4. Couldn't get the next button in the quiz to move to next question| I found the mixup between variables allQuestions and quizQuestions and corrected it.|
| 5. When the quiz restarts, the images doesn't get displayed | Solutions to be fixed **************|
| 6. Couldn't get the exit-buttons to work except for one place| Had to make several exit-buttons with different IDs|
| 7. Couldn't get the btn-to-name-first to work except for one place| Had to make another button with different ID|
| 8. The timer kept counting down below 0 and showed negative numbers| Changed the code to (currentTime <= 0) instead of (currentTime === 0) |
| 9. The timer numbers became jumpy when counting down| TO BE SOLVED**************** |
| 10. Couldn't get the scoreList array to collect userScore and display them in highscore-box| TO BE SOLVED**************** |


&nbsp;

## **Deployment**

**To deploy the website, the following steps were taken using GitHub Pages:**

1. Navigate to the Settings tab in the GitHub repository.
2. Select Pages from the left-hand menu.
3. Choose the branch Main as the source.
After the webpage refreshes, a ribbon will appear at the top saying that "Your site is published at https://debbiebergstrom.github.io/CI_PP1_DS/".

**To fork the repository, follow these steps:**

1. Go to the GitHub repository.
2. Click on the Fork button located in the upper right-hand corner.

**To clone the repository, follow these steps:**

1. Go to the GitHub repository.
2. Click on the Code button located above the list of files.
3. Select your preferred method of cloning using HTTPS, SSH, or Github CLI, and click the copy button to copy the URL to your clipboard.
4. Open Git Bash.
5. Change the current working directory to the one where you want the cloned directory to be.
6. Type "git clone" and paste the URL from the clipboard (e.g., "$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY").
7. Press Enter to create your local clone.

&nbsp;

## **Credits**

### Here's a collection of sites that were helpful in creating this website:
&nbsp;

To better help me understand toggling between elements: https://softauthor.com/javascript-toggle-class-element/
To better help me understand the use of quearyselectors: https://www.w3schools.com/jsref/met_document_queryselector.asp
To better help me understand arrays of different kinds: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array, https://javascript.info/array, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Quiz tutorials:
https://www.youtube.com/watch?v=xZXW5SnCiWI&t=224s
https://www.youtube.com/watch?v=PBcqGxrr9g8

Create some of the text content: Worked together with [ChatGPT](https://openai.com/)

&nbsp;

### **Media**
Pictures taken from 

Timer icon taken from:
https://www.flaticon.com/free-icon/stopwatch_10028890?term=timer&page=1&position=19&origin=tag&related_id=10028890

&nbsp;

## **Acknowledgements**

I would like to take the opportunity to thank:
- My mentor Mo Shami for his support, advice and for pushing me in the right way. 
- My family for being really supportive.
- To the teachers at Code Institute and Slack for providing help and updates.
- Friends who shared amazing photos of our dive trips. 
- My boss at my job who's been supportive and helpful with working scheduls.