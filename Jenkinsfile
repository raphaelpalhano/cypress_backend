pipeline {
    agent {
        docker {
            image 'cypress/base:latest'
        }
    }
    stages {
        stage('Setup') {
            steps {
                sh "npm ci"
            }
        }
        stage('Tests') {
            steps {
                sh "npm run cy:tags TAGS=$tags"
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
