pipeline {
    agent { dockerfile true }

    stages {
        stage('Setup') {
            steps {
                bat "npm ci"
            }
        }
        stage('Tests') {
            steps {
                bat "npm run cy:ci"
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
