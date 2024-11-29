pipeline {
    agent any

    environment {
        WebRootFilePath = 'D:\\Sites\\flowcourier\\flowcourier.com\\wwwroot'
    }

    stages {
        
        stage('Build and Publish') {
            steps {
                echo "Build is ${BUILD_NUMBER}"
                
                // Install dependencies and build the Astro Starlight project
                nodejs(nodeJSInstallationName: 'latest') {
                  
                    
                    // Navigate to the project directory and run pnpm build
                    dir('docs') {
                        // pagefind fails with pnpm, so we use npm
                        bat 'npm install'
                        bat 'npm run build'
                         // Remove the local docs folder just in case
                        bat "if exist docs rd /s /q docs"
                        // Rename dist to docs
                        bat 'ren dist docs'

                       // Use robocopy to move docs to the target directory with overwrite
                        // bat "robocopy docs ${env.WebRootFilePath}\\docs /e /mir"
                        bat "robocopy docs ${env.WebRootFilePath}\\docs /e /mir /z /copy:DAT | exit 0"

                        


                       
                    }

                }
            }
        }
        
    }

    post {
        success {
            slackSend channel: "#DevOps", message: "Build Done: ${env.JOB_NAME} ${env.BUILD_NUMBER}"
        }
        failure {
            slackSend(channel: '#DevOps', color: 'RED', message: "FAILED :alarm_clock:  ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL} :alarm_clock:")
        }
    }   
}
