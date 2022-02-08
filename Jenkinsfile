pipeline {
    agent { dockerfile true }

    stages {
        stage('Build') {
            steps {
                bat "docker build -f Dockerfile -t quality_integration/cypress"
                
            }
        }
        
        stage('Run') {
            steps {
               bat "docker run -i -v "%cd%":/usr/src/e2e -t quality_integration/cypress --spec cypress/integration/spec/*.feature"
       
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


   

