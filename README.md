# SoftAct Take-Home Project

Thank you for taking the time to review this take-home project. I look forward to discussing your thoughts on my work.

As instructed, I have chosen to store the task items in an **in-memory array** on the backend. Therefore, any changes made to the tasks will only persist **as long as the server container is running**.

To simplify the build process, I have containerized the entire application using **Docker**. Instructions are provided below for installing and verifying Docker (and Docker Compose) on your local machine, if they are not already installed.

## Option 1 - Docker Compose

Once you have Docker and Docker Compose set up and verified on your
machine, there are only 3 steps to building and running the project:

1. Clone the repository

```bash
git clone https://github.com/jjcurtis/softact-takehome.git
```

2. Navigate to the project root directory and run the following
   command
```bash
docker compose up -d
```

3. Once the Docker build process has finished, open a web browser and
   navigate to [http://localhost:5173](http://localhost:5173) 

---

## Option 2 - Run the project manually

1. Clone the repository

```bash
git clone https://github.com/jjcurtis/softact-takehome.git
```

### Start the server

2. Navigate to the project root directory in a terminal and run the
   following command
```bash
cd backend;
npm i;
npm run dev
```

### Start the client

4. In seperate terminal instance, navigate to the project root directory and run the
   following command
```bash
cd frontend;
npm i;
npm run dev
```

# Complete Guide to Installing Docker and Docker Compose

This guide provides step-by-step instructions for installing **Docker** and **Docker Compose** on **Linux**, **macOS**, and **Windows**.

---

## Table of Contents

- [Linux](#ubuntu-linux)
- [macOS](#macos)
- [Windows](#windows)
- [Verify Installation](#verify-installation)
- [Optional: Run Docker as non-root (Linux)](#optional-run-docker-as-non-root-linux)
- [References](#references)

---

## Ubuntu Linux

### Step 1: Update your system

```bash
sudo apt update
sudo apt upgrade -y
```

### Step 2: Install required packages

```bash
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common lsb-release
```

### Step 3: Add Docker’s official GPG key

```bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

### Step 4: Add Docker repository

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### Step 5: Install Docker and Docker Compose plugin

```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

---

## macOS

1. Download **Docker Desktop for macOS** from [Docker Desktop](https://www.docker.com/products/docker-desktop).  
2. Open the downloaded `.dmg` file and drag **Docker** to the Applications folder.  
3. Launch Docker Desktop and follow the setup instructions.  

> Docker Compose is included with Docker Desktop.

---

## Windows

1. Download **Docker Desktop for Windows** from [Docker Desktop](https://www.docker.com/products/docker-desktop).  
2. Run the installer and follow the setup prompts.  
3. Start Docker Desktop after installation.  

> On Windows Home, ensure WSL2 is installed. Docker Compose comes bundled.

---

## Verify Installation

Run the following commands to verify that Docker and Docker Compose are installed:

```bash
# Docker version
docker --version

# Docker Compose version
docker compose version

# Test Docker
docker run hello-world
```

---

## References

- [Docker Official Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
