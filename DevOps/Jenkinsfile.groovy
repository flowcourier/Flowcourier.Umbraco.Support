pipeline {
    agent any

    environment {
        WebRootFilePath = 'D:\\Sites\\flowcourier\\flowcourier.com\\wwwroot'
        AppPoolName = "flowcourier.com"
        FrontPage = "https://flowcourier.web05.jpkeisala.com/"
    }

    stages {
        
        stage('Build and Publish') {
            steps {
                echo "Build is ${BUILD_NUMBER}"
                
                // Install dependencies and build the Astro Starlight project
                nodejs(nodeJSInstallationName: 'latest') {
                  
                    
                    // Navigate to the project directory and run pnpm build
                    dir('docs') {
                        bat 'pnpm install'
                        bat 'pnpm build'
                        // Rename dist to docs
                        bat 'ren dist docs'

                        // Check if docs already exists in the target, if so delete it
                        bat "if exist ${env.WebRootFilePath}\\docs rd /s /q ${env.WebRootFilePath}\\docs"
                        
                        // Move the docs folder to the WebRootFilePath
                        bat "move docs ${env.WebRootFilePath}"

                        // Remove the local docs folder just in case
                        bat "if exist docs rd /s /q docs"
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
