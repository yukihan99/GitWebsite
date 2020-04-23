import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
          <img src="logo.png" alt="Logo" width="300" height="300"></img>
          <h1>
            Beginner's Guide to Git and GitHub
          </h1>
            <h2>
              Git and GitHub
            </h2>
              <p>
              Git is a version control system that allows the management of the different 
                stages of a project. GitHub is the online hosting service for software developers
                to share and network their code. Both are necessary for better project
                collaboration and efficiency.
            </p>
            <h2>
              Basic Terminology
            </h2>
              <p>
                <b>Git Repository</b>: A folder that keeps track of the changes made inside of it.<br></br>
                <b>Branch</b>: A parallel version of a working repository that allows users to make
                changes<br></br>
                <b>Clone</b>: A copy of a repository that lives on the user's computer.<br></br>
                <b>Master</b>: The default or 'main' development branch.
              </p>
            <h2>
              Git Environment
            </h2>
            <p><img src="stages.png" alt="stages" width="600" height="500"></img></p>
            <p>
              The Git environment has several different phases. The working directory has the actual files,
              the staging area is where changes are added or removed, and the local repository contains commits. The
              remote repository are the things not on your local computer.
            </p>
        <h1>
          Step 1: Installation
        </h1>
        <p>
          First, download and install all the necessary tools. Git is a requirement, however if
          you do not wish to use GitHub app or Ubuntu as your terminal, you can use alternatives.
        </p>
        <p><a href="https://git-scm.com/downloads">
          <b>Download Git</b></a>
        </p>
        <p><a href="https://desktop.github.com/">
          <b>Download GitHub</b></a>
        </p>
        <p><a href="https://ubuntu.com/download/desktop">
          <b>Download Ubuntu</b></a>
        </p>
      <h1>
        Step 2: Create a local repository
      </h1>
        <p>
          Make a folder where you want your new project using
          <code>mkdir project_name</code><br></br>
          Then go into the folder using
          <code>cd project_name</code><br></br>
          And finally create a local git repository using
          <code>git init</code>        
        </p>
        <p><img src="git init.PNG" alt="init"></img></p>
      <h1>
        Step 3: Make changes and track
      </h1>
        <p>
          Git has the ability to track changes made within files. As an example, just create 
           a new file within your project folder with <code>touch file_name</code> and use
          <code>git status</code><br></br>
          Git will essentially tell you that they noticed a new file,
          but will leave it alone until further instructions.
        </p>
        <p><img src="git status.PNG" alt="status"></img></p>
      <h1>
        Step 4: Put changes to the stage
      </h1>
        <p>
          To add changes to the staging phase, use <code>git add file_name</code>. If a mistake was made
          and a file was not meant to be added, you can revert the changes with <code>git reset file_name</code>
        </p>
        <p><img src="git add.PNG" alt="add"></img></p>
      <h1>
        Step 5: Commit changes
      </h1>
        <p>
          To put these changes on the local repository, use <code>git commit -m "message"</code>.
          The message should be very clear and related to the commit itself (like "bug fix for X").
          It's important to note that these changes are still not in the remote repository.
        </p>
        <p><img src="git commit.PNG" alt="add"></img></p>
      <h1>
        Step 6: Make branches
      </h1>
        <p>
          To restate, branches are used for developing in parallel with the working repository. This allows
          users to add new features or make changes without affecting the masters (main) branch.<br></br>
          To create a new branch, use <code>git checkout -b feature_x</code>. To go back to master's branch,
          use <code>git checkout master</code>, and to delete a branch, use <code>git branch -d feature_x</code>.
        </p>
        <p><img src="git branch.PNG" alt="add"></img></p>
      <h1>
        Step 7: Make a repository on GitHub and pushing changes
      </h1>
        <p>
          If you are working individually, it is fine to have everything done locally, but when you are collaborating,
          a remote repository is needed on GitHub. After creating it, follow GitHub's instructions for the setup.
        </p>
        <p><img src="hub repo.PNG" alt="repo" width="550" height="630"></img>
        <img src="hub setup.PNG" alt="push" width="550" height="630"></img>
        </p>
        <p>
        In this case, we already have an existing repository, <br></br>so we will use
          <code>git remote add origin git@github.com/username/repo_name.git</code>.<br></br>To send
          our changes to the remote repository we will use <code>git push -u origin master</code>.
        </p>
        <p>
          <img src="git push.PNG" alt="push"></img>
        </p>
      <h1>
        Step 8: Pull and merge
      </h1>
        <p>
          To update your local repository to the newest changes on the remote, use
          <code>git pull</code><br></br>
          To merge branches to active branches (or masters), use <code>git merge branch_name</code>
        </p>
        <p><img src="git pull.PNG" alt="pull"></img></p>
      <h1>
        Additional Resources
      </h1>
        <p>
          While this only scratches the surface of Git's capabilities, this allows you to successfully
          create your first project. Here are extra documention or guides for help.
        </p>
        <p><a href="https://book.git-scm.com/docs">
          <b>Git Documentation</b></a>
        </p>
        
        <p><a href="http://think-like-a-git.net/">
          <b>Think like a git</b></a>
        </p>
        <p><a href="https://help.github.com/en">
          <b>GitHub Help</b></a>
        </p>
    </div>
    </>
  );
}

export default App;
