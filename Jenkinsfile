pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                bat "npm ci"
            }
        }
        stage('Tests') {
            steps {
                bat "npm run cy:run"
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
