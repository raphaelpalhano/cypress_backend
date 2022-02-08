pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                powershell "npm ci"
            }
        }
        stage('Run tests') {
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
