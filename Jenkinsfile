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

    }

    post {
        success {
            echo 'Pipeline ejecutado correctamente.'
        }

        failure {
            echo 'El pipeline falló.'
        }
    }
}