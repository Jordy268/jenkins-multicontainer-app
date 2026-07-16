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
                bat 'dir reports'
            }
        }

    }


    post {

        always {

            junit 'reports/junit.xml'

            bat 'docker compose -f docker/docker-compose.test.yml down'
        }


        success {
            echo 'Pipeline ejecutado correctamente.'
        }


        failure {
            echo 'El pipeline fallo.'
        }
    }
}