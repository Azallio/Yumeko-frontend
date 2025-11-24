FROM node:20-alpine

WORKDIR /appw

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы
COPY . .

# Открываем порт
EXPOSE 5173

# Команда по умолчанию (можно переопределить в compose)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]