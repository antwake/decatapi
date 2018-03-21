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

Your user will be *root* and the password *admin*

Run a Prestashop container (will get the latest Prestashop version 1.7.3)

```
docker run -ti --name decathlon --link mariadeca:mysql -e DB_SERVER=mariadeca -e PS_DOMAIN=localhost:8080 -p 8080:80 -d prestashop/prestashop
```

Start Prestashop installation [http://localhost:8080/](http://localhost:8080/)

At the databse configuration step, enter *mariadeca* in the *Configure your database* field

Run a second MariaDB container to access the DB and create your Prestashop database

```
docker run -it --link mariadeca:mysql --rm mysql sh -c 'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"'
```

```
mysql> create database prestashop;
```

Create a new table ps_advisor

```
CREATE TABLE IF NOT EXISTS `ps_advisor` (`id` INTEGER NOT NULL auto_increment , `firstname` VARCHAR(255) NOT NULL, `sport` VARCHAR(255) NOT NULL, `imagePath` VARCHAR(255), `bioUrl` VARCHAR(255), `categoryId` INTEGER NOT NULL, `contact` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
```

Once Prestashop installed, clone this repo then type.

```
npm install
```

then start the project

```
npm start
```

You can access the docs there [http://localhost:3000/apidoc/v1/](http://localhost:3000/apidoc/v1/) and use Postman to test the API.
