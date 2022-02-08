pipeline {
    agent any

    options {
        ansiColor('xterm') 
    }

    stages {
        stage('Setup') {
            steps {
                bat "npm ci"
            }
        }
        stage('Tests') {
            steps {
                bat "npm run cy:tags TAGS=$tags"
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
