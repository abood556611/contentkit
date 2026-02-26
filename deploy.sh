#!/bin/bash

echo 'ContentKit - Docker Deployment'
echo '=============================='
echo ''
echo 'Step 1: Copy .env.example to .env.local and fill in your keys'
echo 'Step 2: Run: docker compose up -d --build'  
echo 'Step 3: Run migrations: docker compose exec app npx prisma db push'
echo 'Step 4: Open http://localhost:3000'
echo ''
read -p 'Start deployment? (y/n): ' confirm

if [ $confirm = 'y' ]; then
  docker compose up -d --build
  echo 'Waiting for database...'
  sleep 5
  docker compose exec app npx prisma db push
  echo ''
  echo 'ContentKit is running at http://localhost:3000'
fi
