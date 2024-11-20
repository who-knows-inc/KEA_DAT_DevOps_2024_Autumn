# Upgrade The Database

For scalability and performance reasons, the SQLite database no longer cuts it.

**Type**: Group work

---

## Choosing the right database

You are free to choose NoSQL or relational databases. Your chioces should be informed and based on the business domain and the data model of `whoknows`. (Not personal preference).

If the choice is between PostgreSQL and MySQL your choice for a modern stack should without a doubt be PostgreSQL. Here are a plethora of reasons why:

https://www.datacamp.com/blog/postgresql-vs-mysql

---

## Github Discussions

Following the DevOps principle of showing your work the discussions regarding ORM and migration tools should be made public on Github Discussions.

https://github.com/features/discussions

You could use the voting feature to vote for the ORM and migration tool you would like to use. Remember that making a benchmark repository and testing out the tools is the best way to approach this, even if you don't implement it in the final project.


---

## Where to put the database

The problem with PostgreSQL and other databases is that they take up a lot of resources on the VM if placed with the rest of the application. 

There are many ways to solve this issue. You *are* allowed to use a managed database service.

But your solution should consider not only scalability but also cost.

---

## [Optional] ORM

It is not a requirement to use an ORM. 

Unless your goal is to learn to use an ORM in the respective language the argument should be that given you know how basic the data modeling of the application is, an ORM would be the wrong choice for this project.

**Requirement**: What is a requirement is that you must research ORMs.

---

## [Optional] Migration

As opposed to the ORM task setting up a migration tool is a good idea but still not a hard requirement. A migration tool can help you with:

1. Changes to the schema. Propagating the change for the developers or in production.

2. Migrating data from SQLite to the new database.

3. Backing up the database. (Better solutions might exist here depending on your chosen database).

To the best of your ability, try to avoid downtime while migrating to a new database.

**Requirement**: What is a requirement is that you must research migration tools and even if you don't use any you should have a clear plan for which you would go with and how it would work.
