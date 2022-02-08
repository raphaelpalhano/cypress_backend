pipeline {
    agent any

    options {
        ansiColor('xterm') 
    }

    stages {
        stage('Setup') {
            steps {
                powershell "npm ci"
            }
        }
        stage('Tests') {
            steps {
                powershell "npm run cy:run:prod"
            }
        }
    }
    post {
         always {
            script {
               cucumber fileIncludePattern: '**/*.json', jsonReportDirectory: 'reports', sortingMethod: 'ALPHABETICAL'
            }
         }
    }
}
