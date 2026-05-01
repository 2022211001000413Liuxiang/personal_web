---
title: "Docker 从入门到实践"
description: "详细介绍 Docker 的核心概念、常用命令以及如何编写 Dockerfile 和 docker-compose.yml。"
date: 2026-04-05
category: "DevOps"
tags: ["Docker", "DevOps"]
featured: false
---

## Docker 简介

Docker 是一个开源的容器化平台，它允许我们将应用及其依赖打包成轻量级的容器，实现快速部署和迁移。

## 核心概念

### 镜像 (Image)

镜像是只读的模板，包含了运行应用所需的所有依赖。

```bash
docker pull nginx:latest
docker images
```

### 容器 (Container)

容器是镜像的运行实例。

```bash
docker run -d -p 80:80 nginx:latest
docker ps
```

### 仓库 (Registry)

仓库用于存储和分发镜像，Docker Hub 是最大的公共仓库。

## Dockerfile 入门

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## Docker Compose

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: secret
```

## 常用命令

| 命令 | 说明 |
|------|------|
| docker ps | 查看运行中的容器 |
| docker logs | 查看容器日志 |
| docker exec | 进入容器内部 |
| docker-compose up | 启动服务 |

通过 Docker，我们可以实现开发环境的一致性，大大减少"在我机器上能运行"的问题。
