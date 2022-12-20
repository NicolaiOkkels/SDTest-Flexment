pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Build dependencies') {
            steps {
                dir('server'){
                    echo 'Building backend dependencies..'
                    sh 'npm install'
                }
                dir('client'){
                   echo 'Building frontend dependencies..'
                   sh 'npm install'
                }
            }
        }
        stage('Test and coverage'){
            steps{
                dir('server'){
                    echo 'Testing..'
                    sh 'npx jest --coverage'
                }
            }
        }
    }
}