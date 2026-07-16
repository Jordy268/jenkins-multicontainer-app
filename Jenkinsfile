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
         stage('Pruebas de integración') {
            steps {
                bat 'npm run test:integration'
            }
        }

        stage('Detener contenedores') {
    steps {
        bat 'docker compose -f docker/docker-compose.test.yml down'
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