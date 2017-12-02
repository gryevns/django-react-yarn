# Django + React + Yarn Boilerplate

A minimal setup with the latest Django & React versions.

## Features

* django 1.11
* django-rest-framework
* react 16
* es6

## Getting started

```shell
brew install yarn
pip install -r requirements.txt
python manage.py runserver 8000
yarn start
```

This should launch [http://localhost:8080/](http://localhost:8080/)

### Production Bundle

To build a production JS bundle run:

```shell
yarn build
```

If successful this will output the bundle in `assets/bundles`.