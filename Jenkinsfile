pipeline {
    agent any

    parameters{
        string(name: 'SPEC', "cypress/integration/specs/**", description: "definicao dos specs")
    }

    stages {
        stage('Setup') {
            steps {
                bat "npm ci"
            }
        }
        stage('Tests') {
            steps {
                bat "npx cypress run --spec ${SPEC}"
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
