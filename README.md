# Decatapi

API to expose Decathlon advisors

## Getting Started

Instructions to test the project in dev mode

### Prerequisites

You'll need Docker to install Prestashop and MariaDB

### Installing

Run a MariaDB container

```
docker run -ti --name mariadeca -e MYSQL_ROOT_PASSWORD=admin -p 3306:3306 -d mariadb
```

Run a Prestashop container (will get the latest Prestashop version 1.7.3)

```
docker run -ti --name decathlon --link mariadeca:mysql -e DB_SERVER=mariadeca -e PS_DOMAIN=localhost:8080 -p 8080:80 -d prestashop/prestashop
```

Start Prestashop installation [http://localhost:8080/](http://localhost:8080/)

At the databse configuration step, enter *mariadeca* in the *Configure your database* field
