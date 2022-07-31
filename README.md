# Team Profile Generator

Utlized jest to pass four unit tests for Employee, Engineer, Intern, and Manager. 

Utilized inquirer package. 

Uses validation to ensure that user input provided is in the proper expected format.

Uses command line inputs to generate html page for a team profile. 

Application has four classes: Employee, Engineer, Intern, and Manager. 

    - Employee Parent Class has the following properties and methods:
        
        - name

        - id

        - email

        - getName()

        - getId()

        - getEmail()

        - getRole() // Returns 'Employee'
    
    - Manager Class extends Employee Class with the following properties and methods:
        
        - officeNumber

        - getRole() // Overridden to return 'Manager'

    - Engineer Class extends Employee Class with the following properties and methods:
        
        - github // GitHub username

        - getGithub()

        - getRole() // Overridden to return 'Engineer'

    - Intern Class extends Employee Class with the following properties and methods:

        - school

        - getSchool()

        - getRole() // Overridden to return 'Intern'

    

## User Story

AS A manager

I WANT to generate a webpage that displays my team's basic info

SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria

GIVEN a command-line application that accepts user input


WHEN I am prompted for my team members and their information

THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML

THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username

THEN that GitHub profile opens in a new tab

WHEN I start the application

THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number

THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option

THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option

THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team

THEN I exit the application, and the HTML is generated

## Video Walkthrough Link:

https://drive.google.com/file/d/1kaarme1HywAktD4j4An-OEu2x8Ohz2lN/view

## Github Repo Link: 

https://github.com/chou8395-XOMYwl/Team-Prof-Gen.git