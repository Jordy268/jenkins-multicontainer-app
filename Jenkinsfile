pipeline {

    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Verificar herramientas') {
            steps {
                bat 'docker --version'
                bat 'docker compose version'
                bat 'node -v'
                bat 'npm -v'
            }
        }


        stage('Levantar contenedores') {
            steps {
                bat 'docker compose -f docker/docker-compose.test.yml up -d'
            }
        }


        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }


        stage('Pruebas unitarias') {
            steps {
                bat 'npm run test:unit'
            }
        }


        stage('Pruebas de integracion') {
            steps {
                bat 'npm run test:integration'
            }
        }


        stage('Verificar reportes') {
            steps {
                bat 'dir'
                bat 'dir coverage'
            }
        }

    }


    post {

        always {

            junit allowEmptyResults: false, testResults: 'junit.xml'

            bat 'docker compose -f docker/docker-compose.test.yml down'
        }


        success {

            echo 'Pipeline ejecutado correctamente.'

            emailext(
                subject: "✅ Jenkins SUCCESS - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                Hola Jordy,

                El pipeline terminó correctamente.

                Proyecto: ${env.JOB_NAME}
                Build: ${env.BUILD_NUMBER}
                Estado: SUCCESS

                Puedes revisar los detalles aquí:
                ${env.BUILD_URL}
                """,
                to: "garciajordy137@gmail.com"
            )
        }


        failure {

            echo 'El pipeline fallo.'

            emailext(
                subject: "❌ Jenkins FAILURE - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                Hola Jordy,

                El pipeline tuvo errores.

                Proyecto: ${env.JOB_NAME}
                Build: ${env.BUILD_NUMBER}
                Estado: FAILURE

                Revisa los logs aquí:
                ${env.BUILD_URL}
                """,
                to: "garciajordy137@gmail.com"
            )
        }

    }
}