PROJECT_NAME = {{ project_name }}
PYTHON = python3
POETRY = poetry
MANAGE = $(PYTHON) {{ project_name }}/manage.py

all: install run

activate:
	$(POETRY) shell

install:
	$(POETRY) install

run:
	$(POETRY) run $(MANAGE) runserver

migrate:
	$(POETRY) run $(MANAGE) migrate

createsuperuser:
	$(POETRY) run $(MANAGE) createsuperuser

test:
	$(POETRY) run $(MANAGE) test

clean-p:
	find . -type f -name "*.pyc" -delete
	find . -type d -name "__pycache__" -delete

prod:
	$(POETRY) run gunicorn $(PROJECT_NAME).wsgi:application

format:
	$(POETRY) run black $(PROJECT_NAME)

lint:
	$(POETRY) run flake8 $(PROJECT_NAME)

security:
	$(POETRY) run bandit -r $(PROJECT_NAME)

check: lint format security

help:
	@echo "Available targets:"
	@echo "  install       - Install dependencies using Poetry"
	@echo "  run           - Run the development server"
	@echo "  migrate       - Run database migrations"
	@echo "  createsuperuser - Create a superuser"
	@echo "  test          - Run tests"
	@echo "  clean         - Clean up compiled Python files"
	@echo "  prod          - Run the production server using gunicorn"
	@echo "  format        - Format code using black"
	@echo "  lint          - Lint code using flake8"
	@echo "  security      - Check for security issues using bandit"
	@echo "  check         - Run all checks (lint, format, security)"
	@echo "  help          - Show this help message"

.PHONY: all install run migrate createsuperuser test clean prod format lint security check help
