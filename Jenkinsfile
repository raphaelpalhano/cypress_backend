pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                sh "npm ci"
            }
        }
        stage('Tests') {
            steps {
                sh "npm run cy:run"
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
