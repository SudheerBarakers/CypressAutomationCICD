pipeline {
    agent any

    //  tools {
    //     nodejs 'Node19'
    // }
    
    stages{
        stage('Clone Code'){
            steps{
                git url:"https://github.com/SudheerBarakers/CypressAutomationCICD.git", branch: "main"
            }
        }
           stage('Install Dependencies'){
            steps{
               bat "npm i"
            }
        }
         stage('Run Cypress') {
           
            steps{
               // catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                bat "./node_modules/.bin/cypress run"
               // }
               }
            }
       
       stage('Build docker image'){
            steps{
               bat "docker build -t cypress-apps ."
            }
        }
     
        // Uploading Docker images into Docker Hub
     stage('Push to docker Hub') {
         steps{    
       withCredentials([usernamePassword(credentialsId:'dockerhub', passwordVariable:'dockerhubPass', usernameVariable: 'dockerhubuser')]) {
            bat "docker tag cypress-apps ${env.dockerhubuser}/cypress-apps:latest"
            bat "docker login -u ${env.dockerhubuser} -p ${env.dockerhubPass}"
            bat "docker push ${env.dockerhubuser}/cypress-apps:latest"
        }
      }
    }
    
    }
}